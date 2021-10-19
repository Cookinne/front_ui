import _ from 'lodash';
import { formatTime } from '@utils/time';
import { killChainOrder, killChainColorMap } from './KillChainMap';

import diffMap from './diffMap';

const hours = [];
// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 364; ++i) { // 每个杀伤链阶段52度
  hours.push(i);
}

const RADIAL_AMOUNT = 10; // 径向坐标轴坐标点个数，从1开始
const days = [];
// eslint-disable-next-line no-plusplus
for (let i = 1; i <= RADIAL_AMOUNT; ++i) { // TODO
  days.push(i);
}

const MAX_SCATTER_SIZE = 50;
const MIN_SCATTER_SIZE = 15;

const renderData = (data) => {
  if (_.isEmpty(data)) return [];
  const result = [];
  let maxCount = 0;
  _.forEach(data, (value, key) => { // 遍历杀伤链七个阶段，key是阶段名
    if (!_.isEmpty(value.timeList)) {
      const vLength = value.timeList.length; // 一个杀伤链阶段分片个数
      value.timeList.forEach((timeSlice, index) => { // 遍历每个杀伤链阶段的timeList
        if (!_.isEmpty(timeSlice.eventList)) {
          const elLength = timeSlice.eventList.length; // 一个径向上点的个数
          timeSlice.eventList.forEach((event, index2) => { // 遍历timeListItem里面的eventList
            // 计算径向偏移量
            let offset = 0;
            if (diffMap[key] && diffMap[key][elLength]) {
              offset = diffMap[key][elLength]; // 径向坐标偏移量，key是eventList.length
            }
            if (event.count > maxCount) maxCount = event.count;
            result.push({
              value: [
                index2 + offset, // 径向坐标 = 数据index + 偏移量
                // eslint-disable-next-line no-mixed-operators
                killChainOrder[key] * 52 + (52 / vLength * index), // 角度坐标
                event.count, // 攻击次数，控制点的大小
                event.attackIp, // IP
                formatTime(timeSlice.sliceStart), // 时间
                maxCount, // 最大值，用来计算点的大小
              ],
              itemStyle: {
                color: killChainColorMap[key],
              },
            });
          });
        }
      });
    }
  });
  return result;
};

const legend = [];
_.forEach(killChainColorMap, (value, key) => {
  legend.push({
    name: key,
    icon: 'circle',
    textStyle: {
      color: value,
    },
  });
});

const renderOptions = (data) => ({
  legend: {
    show: true,
    z: 100,
    zlevel: 101,
    data: legend,
    left: 'right',
    // orient: 'horizontal',
  },
  polar: {},
  tooltip: {
    confine: true, // 限制tooltip不超出容器范围
    formatter: (params) => `来自 ${params.value[3]} 共 ${params.value[2]} 次攻击 at ${params.value[4]}`,
  },
  angleAxis: {
    show: false,
    type: 'category',
    data: hours,
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#999',
        type: 'dashed',
      },
    },
    axisLine: {
      show: false,
    },
  },
  radiusAxis: {
    show: false,
    type: 'category',
    data: days,
    axisLine: {
      show: false,
    },
    axisLabel: {
      rotate: 45,
    },
  },
  series: [{
    name: 'Punch Card',
    type: 'scatter',
    coordinateSystem: 'polar',
    symbolSize: (val) => {
      const max = Math.sqrt(val[5]);
      let size = (Math.sqrt(val[2]) / max) * MAX_SCATTER_SIZE;
      if (size > MAX_SCATTER_SIZE) size = MAX_SCATTER_SIZE;
      if (size < MIN_SCATTER_SIZE) size = MIN_SCATTER_SIZE;
      console.info(size);
      return size;
    },
    data: renderData(data),
    animationDelay: (idx) => idx * 5,
  }],
});

export default renderOptions;

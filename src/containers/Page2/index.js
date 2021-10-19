import React, { useEffect, useState } from 'react';
import echarts from 'echarts';

import renderOptions from './options';
import mockdata from './mockData';
import style from './style.scss';

const Page2 = (props) => {
  useEffect(() => {
    const eChartsDiv = echarts.init(document.querySelector('#eChartsDiv'));
    eChartsDiv.setOption(renderOptions(mockdata));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.box}>
          <div className={style.circle} />
          <div id="eChartsDiv" className={style.echarts} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Page2;

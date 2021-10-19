import diffMap from './diffMap';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let mockdata = {};
Object.keys(diffMap).forEach((item, keys) => {
  mockdata = {
    ...mockdata,
    [item]: {
      timeList: [
        {
          sliceStart: 1634486400000,
          eventList: [
            {
              count: random(1, 100),
              attackIp: 'xxxxxxxx',
            },
            {
              count: random(1, 100),
              attackIp: 'xxxxxxxx',
            },
            {
              count: random(1, 100),
              attackIp: 'xxxxxxxx',
            },
          ],
        },
      ],
    },
  };
  return mockdata;
});

const mockData = mockdata;

export default mockData;

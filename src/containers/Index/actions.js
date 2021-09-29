import network from '@utils/network';

export function getTest1(payload) {
  return network.GET('/api/v1/test1', payload, (data) => ({
    data,
    type: 'getTest1',
  }));
}

export function getTest2(payload) {
  return network.GET('/api/v1/test2', payload, (data) => ({
    data,
    type: 'getTest2',
  }));
}

const killChainMap = {
  Recon: '侦查跟踪',
  Weaponization: '武器构建',
  Delivery: '载荷投递',
  Exploitation: '漏洞利用',
  Beacon: '安装植入',
  CnC: '命令控制',
  'Actions on Objective': '目标达成',
};

const killChainOrder = {
  Recon: 0,
  Weaponization: 1,
  Delivery: 2,
  Exploitation: 3,
  Beacon: 4,
  CnC: 5,
  'Actions on Objective': 6,
};

const killChainColorMap = {
  Recon: '#235f90',
  Weaponization: '#63a8b1',
  Delivery: '#afc466',
  Exploitation: '#f3df6c',
  Beacon: '#d8ce45',
  CnC: '#e4942a',
  'Actions on Objective': '#ec4a27',
};

export {
  killChainMap,
  killChainOrder,
  killChainColorMap,
};

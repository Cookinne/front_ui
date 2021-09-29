/**
 * @summary 全局提示组件
 */

import { notification } from 'antd';

function notice(res) {
  const { data, status } = res;
  if (data.message) {
    let method = 'error';
    if (status > 100 && status < 400) {
      method = 'success';
    }
    return notification[method]({ message: data.message });
  }
  return null;
}

export default notice;

import axios from 'axios';
import { notification } from 'antd';

import Notice from '@components/Notice';
import parseQueryString from '@utils/object';

export function redirectToLogin() {
  Notice({
    status: 401,
    data: {
      message: '请重新登录',
    },
  });
  setTimeout(() => {
    window.location.href = '/login';
  }, 1000);
}

function handleRes(res, dispatch, callback, isGet) {
  const { data, status } = res;
  if (!(isGet)) {
    Notice(res);
  }
  if (status === 401) {
    redirectToLogin();
  } else if (status > 100 && status < 400) {
    dispatch(callback(data));
  } else {
    notification.error({ message: `Error: ${status}` });
    console.error(`X-Error: ${data.message}`);
  }
}

function handleErr(err) {
  console.error(`X-Error-message: ${err.message}`);
  console.error(err.response);

  const { status, statusText, request: { responseURL } } = err.response;

  if (status === 403 || status === 401) {
    redirectToLogin();
  } else {
    notification.error({ message: `Error: ${status} ${statusText}`, description: `responseURL: ${responseURL}` });
  }
}

class Network {
  GET(api, payload = {}, callback) {
    return (dispatch) => {
      axios.get(`${api}${parseQueryString(payload)}`)
        .then((res) => handleRes(res, dispatch, callback, true))
        .catch((err) => handleErr(err));
    };
  }

  POST(api, payload = {}, callback) {
    return (dispatch) => {
      axios.post(api, payload)
        .then((res) => handleRes(res, dispatch, callback))
        .catch((err) => handleErr(err));
    };
  }

  PUT(api, payload = {}, callback) {
    return (dispatch) => {
      axios.put(api, payload)
        .then((res) => handleRes(res, dispatch, callback))
        .catch((err) => handleErr(err));
    };
  }

  DELETE(api, payload = {}, callback) {
    return (dispatch) => {
      axios.delete(api, { data: payload })
        .then((res) => handleRes(res, dispatch, callback))
        .catch((err) => handleErr(err));
    };
  }

  SIMPLE_GET(api, payload = {}, callback) {
    return (
      axios.get(`${api}${parseQueryString(payload)}`)
        .then((res) => callback(res))
        .catch((err) => handleErr(err))
    );
  }
}

export default new Network();

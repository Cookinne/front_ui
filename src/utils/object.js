import _ from 'lodash';

export default function parseQueryString(params) {
  let qs = [];
  if (typeof (params) === 'string') {
    return params;
  }
  if (!params || typeof (params) === 'undefined') {
    return '';
  }
  if (params) {
    Object.keys(params).map((key) => {
      const value = params[key];
      if (value !== null && value !== undefined && value !== '') {
        qs.push(`${key}=${encodeURIComponent(params[key])}`);
      }
      return qs;
    });
  }
  if (qs.length > 0) {
    qs = [...new Set(qs)];
    qs.sort();
    return `?${qs.join('&')}`;
  }
  return '';
}

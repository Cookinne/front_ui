import moment from 'moment';

// 13位时间戳转时间
export function formatTime(timestamp, format) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(+timestamp)) {
    return '';
  }
  return moment(timestamp).format(format || 'YYYY-MM-DD HH:mm:ss');
}

// 零时区转东八区
export function zoneTransfer(time, format) {
  if (!time) {
    return '-';
  }
  return moment(time).utc().utcOffset(8).format(format || 'YYYY-MM-DD HH:mm');
}

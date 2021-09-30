/**
 * @summary 时钟组件
 */
import React, { useEffect, useState } from 'react';
import { zeroPad } from '@utils/number';

import style from './style.scss';

export default function Clock(props) {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  let timer = null;

  const getTime = () => {
    const _h = new Date().getHours();
    const _m = new Date().getMinutes();
    const _s = new Date().getSeconds();
    setH(_h);
    setM(_m);
    setS(_s);
  };

  useEffect(() => {
    getTime;
  }, []);

  useEffect(() => {
    timer = setInterval(getTime, 1000);
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, []);

  return (
    <div className={style.clock}>
      <span>{ zeroPad(h) }</span>
      <span>:</span>
      <span>{ zeroPad(m) }</span>
      <span>:</span>
      <span>{ zeroPad(s) }</span>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import style from './style.scss';

const Page2 = (props) => {
  useEffect(() => {
    console.info('this is page2 - useEffect');
  }, []);

  return (
    <div className={style.container}>
      <h2>Page2</h2>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default Page2;

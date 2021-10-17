import React, { useEffect, useState } from 'react';
import { Steps } from 'antd';
import style from './style.scss';

const { Step } = Steps;

const Page2 = (props) => {
  useEffect(() => {
    console.info('this is page2 - useEffect');
  }, []);

  return (
    <div className={style.container}>
      <h2>Page2</h2>
      <Steps style={{ width: '70%', margin: 'auto', marginTop: 40 }} current={1}>
        <Step title="完成" description="任务已完成" />
        <Step title="执行中" subTitle="Left 00:00:08" description="任务执行中" />
        <Step title="等待" description="任务等待中" />
      </Steps>
    </div>
  );
};

export default Page2;

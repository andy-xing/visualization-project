import React, {useEffect, useRef} from 'react';
import './home.scss';
import * as echarts from 'echarts';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart4} from '../components/chart-5';

export const Home = () => {

  return (
    <div className={'home'}>
      <header>
        <span>深圳市公安合作平台</span>
      </header>
      <main>
        <section className={'section1'}>
          <Chart1/>
          <Chart2/>
          <Chart4/>
        </section>
        <section className={'bordered section2'}>

        </section>
        <section className={'bordered section3'}></section>

      </main>
    </div>
  );
};

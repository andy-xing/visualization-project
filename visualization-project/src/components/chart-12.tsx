import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart12 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.12, name: '南园街道'},
    {value: 0.03, name: '桂园街道'},
    {value: 0.09, name: '南山街道'},
    {value: 0.06, name: '沙头角街道'},
    {value: 0.12, name: '新安街道'},
    {value: 0.06, name: '龙岗街道'},
    {value: 0.08, name: '园岭街道'},
    {value: 0.08, name: '黄贝街道'},
    {value: 0.08, name: '南头街道'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};

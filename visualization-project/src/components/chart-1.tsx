import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart=useRef(null)
  const data1 = [
    {name: '光明新区',value:10},
    {name: '宝安区', value: 20},
    {name: '龙华区', value: 36},
    {name: '南山区', value: 41},
    {name: '福田区', value: 15},

  ];
  const data2=[
    {name: '罗湖区', value: 26},
    {name: '龙岗区', value: 37},
    {name: '盐田区', value: 18},
    {name: '坪山区', value: 29},
    {name: '大鹏区', value: 30},
  ];
  const data = data1;
  useEffect(()=>{
    setInterval(()=>{
     x(data2)
    },3000)
  },[])
const x=(data)=>{
  myChart.current.setOption(createEchartsOptions({
    xAxis: {
      data: data.map(i=>i.name),
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#083B70'}
      },
      axisLabel: {
        formatter(val) {
          if (val.length > 2) {
            const array = val.split('');
            array.splice(2, 0, '\n');
            return array.join('');
          } else {
            return val;
          }
        }
      },
    },

    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#083B70'}
      }
    },
    series: [{
      type: 'bar',
      data: data.map(i=>i.value),
    }]
  }));
}
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)

  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
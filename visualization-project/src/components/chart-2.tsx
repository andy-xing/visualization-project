import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart=useRef(null)
const data=[
  {name:'光明新区',2020:1,2021:2},
  {name:'宝安区',2020:2,2021:3},
  {name:'龙华区',2020:3,2021:4},
  {name:'南山区',2020:4,2021:5},
  {name:'福田区',2020:5,2021:6},
  {name:'罗湖区',2020:6,2021:7},
  {name:'龙岗区',2020:7,2021:8},
  {name:'盐田区',2020:8,2021:9},
  {name:'坪山区',2020:9,2021:10},
  {name:'大鹏区',2020:10,2021:11},
];
  useEffect(()=>{
    setInterval(()=>{
      const newData=[
        {name:'光明新区',2020:Math.random()*10,2021:Math.random()*10},
        {name:'宝安区',2020:Math.random()*9,2021:Math.random()*9},
        {name:'龙华区',2020:Math.random()*8,2021:Math.random()*8},
        {name:'南山区',2020:Math.random()*7,2021:Math.random()*7},
        {name:'福田区',2020:Math.random()*6,2021:Math.random()*6},
        {name:'罗湖区',2020:Math.random()*5,2021:Math.random()*5},
        {name:'龙岗区',2020:Math.random()*4,2021:Math.random()*4},
        {name:'盐田区',2020:Math.random()*3,2021:Math.random()*3},
        {name:'坪山区',2020:Math.random()*2,2021:Math.random()*2},
        {name:'大鹏区',2020:Math.random(),2021:Math.random()},
      ]
      x(newData)
    },2000)
  },[])
  const x=(data)=>{
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false}
      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: data.map(i=>i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('区', '\n区');
          }
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data:data.map(i=>i[2020]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }]),
            }
          }
        },
        {
          name: '2012年',
          type: 'bar',
          data: data.map(i=>i[2021]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }]),
            }
          }
        }
      ]
    }));
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);

  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/> 破案排名1
        <span className="second"/> 破案排名2
      </div>
    </div>
  );
};
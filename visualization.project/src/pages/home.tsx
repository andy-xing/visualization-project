import React, {useEffect, useRef} from 'react';
import './home.scss';
import * as echarts from 'echarts';
const px=(n)=>n/2420 * (window as any).pageWidth;

export const Home = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
// 绘制图表
    myChart.setOption({
      tooltip: {
        color:'#79839e',
        fontSize: px(24),
      },
      title:{show:false},
      legend:{show:false},
      xAxis: {
        data: ['罗湖区', '光明新区', '宝安区', '龙华区', '南山区', '福田区','罗湖区','盐田区','坪山区','大鹏区'],
        axisTick:{show:false},
        axisLabel: {
          fontSize: px(18),
          formatter(val){
            if (val.length>2){
              const array =val.split('');
              array.splice(2,0,'\n');
              return array.join('')
            }else {return val}
          }


        }
      },
      grid:{
        x:px(50),
        y:px(40),
        x2:px(40),
        y2:px(60) ,
      },
      yAxis: {
        splitLine:{show:false},
        lineStyle:{color:'#083B70'},
        axisLabel: {
          fontSize: px(18)
        }
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20,30,26,19,33]
      }]
    });
  }, []);
  return (
    <div className={'home'}>
      <header>
        <span>深圳市公安合作平台</span>
      </header>
      <main>
        <section className={'section1'}>
          <div className={'bordered 管辖统计'}>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className={'chart'}></div>
          </div>
        </section>
        <section className={'bordered section2'}></section>
        <section className={'bordered section3'}></section>

      </main>
    </div>
  );
};

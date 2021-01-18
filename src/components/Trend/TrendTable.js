import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import '../../styles/Trend/TrendTable.less'
const TrendTable = (props) => {
  const { foreignData, chinaData } = props
  const [trendNumber, setTrendNumber] = useState(0)

  useEffect(() => {
    const globalDailyHistory = foreignData.globalDailyHistory
    // console.log(globalDailyHistory)
    const num = []
    const date = []
    for (let i = globalDailyHistory.length - 1; i >= 0; i--) {
      if (num.length >= 27) break
      if ((globalDailyHistory.length + 1 - i) % 3 === 0) {
        num.unshift(globalDailyHistory[i].all.newAddConfirm)
        date.unshift(globalDailyHistory[i].date)
        // console.log(globalDailyHistory[i])
      }
    }
    // console.log(num ,date)
    let myChart
    let linearBarDom = echarts.getInstanceByDom(document.querySelector('.tendency .map_info'))
    if(linearBarDom == null) {
      myChart = echarts.init(document.querySelector('.tendency .map_info'))
    } else {
      myChart = linearBarDom
    }
    const option = {
      title: {
        text: '  海外新增确诊趋势',
      },
      legend: {
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12,
        right: 20,
        top: 20,
        orient: 'horizontal',
        textStyle: {
          padding: [3, 0, 0, 0],
        },
      },
      xAxis: {
        type: 'category',
        data: date,
        axisLabel: {
          rotate: 45,
          interval: 0,
          color: '#ccc',
          fontSize: 10,
        },
        axisTick: {
          length: 0,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 1000000,
        axisLabel: {
          formatter: function (param) {
            return param.toString()
          },
        },
        axisTick: {
          length: 0,
        },
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          name: '新增确诊',
          type: 'line',
          data: num,
          smooth: true,
          itemStyle: {
            color: '#ff3d18',
          },
          lineStyle: {
            color: '#ff3d18',
          },
        },
      ],
      tooltip: {
        trigger: 'item',
        formatter: function (param) {
          return param.seriesName + '<br>' + param.marker + ' ' + param.name + ' - ' + param.value
        },
      },
    }
    if (trendNumber === 0) {
      const num = []
      const date = []
      for (let i = globalDailyHistory.length - 1; i >= 0; i--) {
        if (num.length >= 27) break
        if ((globalDailyHistory.length + 1 - i) % 3 === 0) {
          num.unshift(globalDailyHistory[i].all.newAddConfirm)
          date.unshift(globalDailyHistory[i].date)
        }
      }
      option.series = [
        {
          name: '新增确诊',
          data: num,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: '#ff3d18',
          },
          lineStyle: {
            color: '#ff3d18',
          },
        },
      ]
      option.yAxis.max = 1000000
      option.yAxis.splitNumber = 7
      option.yAxis.axisLabel.formatter = function (value, index) {
        return value.toString()
      }
    } else if (trendNumber === 1) {
      const num1 = []
      const num2 = []
      const date = []
      for (let i = globalDailyHistory.length - 1; i >= 0; i--) {
        if (num1.length >= 27) break
        if ((globalDailyHistory.length + 1 - i) % 3 === 0) {
          num1.unshift(
            globalDailyHistory[i].all.confirm +
              globalDailyHistory[i].all.heal +
              globalDailyHistory[i].all.dead
          )
          num2.unshift(globalDailyHistory[i].all.confirm)
          date.unshift(globalDailyHistory[i].date)
        }
      }
      option.series = [
        {
          name: '累计确诊',
          type: 'line',
          data: num1,
          smooth: true,
          itemStyle: {
            color: '#ff3d18',
          },
          lineStyle: {
            color: '#ff3d18',
          },
        },
        {
          name: '现有确诊',
          type: 'line',
          data: num2,
          smooth: true,
          itemStyle: {
            color: 'green',
          },
          lineStyle: {
            color: 'green',
          },
        },
      ]
      option.yAxis.max = 60000000
      option.yAxis.splitNumber = 8
      option.yAxis.axisLabel.formatter = function (value) {
        return value.toString()
      }
    } else if (trendNumber === 2) {
      const num1 = []
      const num2 = []
      const date = []
      for (let i = globalDailyHistory.length - 1; i >= 0; i--) {
        if (num1.length >= 27) break
        if ((globalDailyHistory.length + 1 - i) % 3 === 0) {
          num1.unshift(globalDailyHistory[i].all.dead)
          num2.unshift(globalDailyHistory[i].all.heal)
          date.unshift(globalDailyHistory[i].date)
        }
      }
      option.series = [
        {
          name: '死亡数',
          type: 'line',
          data: num1,
          smooth: true,
          itemStyle: {
            color: '#ff3d18',
          },
          lineStyle: {
            color: '#ff3d18',
          },
        },
        {
          name: '治愈数',
          type: 'line',
          data: num2,
          smooth: true,
          itemStyle: {
            color: 'green',
          },
          lineStyle: {
            color: 'green',
          },
        },
      ]
      option.yAxis.max = 20000000
      option.yAxis.splitNumber = 7
      option.yAxis.axisLabel.formatter = function (value) {
        return value.toString()
      }
    } else if (trendNumber === 3) {
      const num1 = []
      const num2 = []
      const date = []
      for (let i = globalDailyHistory.length - 1; i >= 0; i--) {
        if (num1.length >= 27) break
        if ((globalDailyHistory.length + 1 - i) % 3 === 0) {
          num1.unshift(globalDailyHistory[i].all.deadRate)
          num2.unshift(globalDailyHistory[i].all.healRate)
          date.unshift(globalDailyHistory[i].date)
        }
      }
      option.series = [
        {
          name: '病死率',
          type: 'line',
          data: num1.reverse(),
          smooth: true,
          itemStyle: {
            color: '#ff3d18',
          },
          lineStyle: {
            color: '#ff3d18',
          },
        },
        {
          name: '治愈率',
          type: 'line',
          data: num2.reverse(),
          smooth: true,
          itemStyle: {
            color: 'green',
          },
          lineStyle: {
            color: 'green',
          },
        },
      ]
      option.yAxis.max = 70
      option.yAxis.splitNumber = 7
      option.yAxis.axisLabel.formatter = function (value) {
        return value + '%'
      }
    }
    myChart.clear()
    myChart.setOption(option)
  }, [foreignData.globalDailyHistory, trendNumber])
  return (
    <div className='tendency'>
      <div className='map_info'></div>
      <div className='map_tab'>
        <div className='map_tabItem' onClick={() => setTrendNumber(0)}>
          新增确诊
        </div>
        <div className='map_tabItem' onClick={() => setTrendNumber(1)}>
          累计确诊/现有确诊
        </div>
        <div className='map_tabItem' onClick={() => setTrendNumber(2)}>
          死亡数/治愈数
        </div>
        <div className='map_tabItem' onClick={() => setTrendNumber(3)}>
          病死率/治愈率
        </div>
      </div>
    </div>
  )
}

export default TrendTable

import React, { useEffect } from 'react'
import * as echarts from 'echarts'
const TopTen = (props) => {
  const { chinaData, foreignData } = props
  useEffect(() => {
    const num = []
    const nation = []
    foreignData.countryAddConfirmRankList.forEach((v, i) => {
      num.push(v.addConfirm)
      nation.push(v.nation)
    })
    var myChart = echarts.init(document.querySelector('.addTop10 .map_info'))
    var option = {
      title: {
        text: '   Top10',
      },
      xAxis: {
        type: 'category',
        data: nation,
        axisLabel: {
          interval: 0,
          rotate: 45,
          color: '#333',
          fontSize: 10,
        },
        axisTick: {
          length: 0,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (value) {
            return value.toString()
          },
        },
      },
      series: [
        {
          type: 'bar',
          data: num,
          barWidth: 18,
          itemStyle: {
            color: 'orange',
            emphasis: {
              color: '#ffe04d',
            },
          },
        },
      ],
      tooltip: {
        trigger: 'item',
        formatter: function (param) {
          return param.marker + ' ' + param.name + ' - ' + param.value
        },
      },
    }
    myChart.setOption(option)
  }, [foreignData.countryAddConfirmRankList])
  return (
    <div className='addTop10'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          margin: '50px 20px 20px 20px',
        }}
      >
        昨日新增确诊国家Top10
      </div>
      <div className='map_info' style={{height: 400}}></div>
    </div>
  )
}

export default TopTen

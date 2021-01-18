import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import nameMap from '../../utils/nameMap'
import '../../styles/Map/WorldMap.less'
import '../../utils/world'

const WorldMap = (props) => {
  const { chinaData, foreignData } = props
  const [number, setNumber] = useState(0)
  useEffect(() => {
    // console.log(111)
    let virusDatas = []
    foreignData.foreignList.forEach((item, index) => {
      virusDatas[index] = {}
      virusDatas[index].name = item.name
      if (number === 0) {
        virusDatas[index].value = item.confirm
      } else {
        virusDatas[index].value = item.nowConfirm
      }
    })
    if (number === 0) {
      virusDatas.push({
        name: '中国',
        value: chinaData.chinaTotal.confirm,
      })
    } else {
      virusDatas.push({
        name: '中国',
        value: chinaData.chinaTotal.nowConfirm,
      })
    }
    let myChart
    let linearBarDom = echarts.getInstanceByDom(document.querySelector('.map .map_info'))
    if(linearBarDom == null) {
      myChart = echarts.init(document.querySelector('.map .map_info'))
    } else {
      myChart = linearBarDom
    }
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.name + ' : ' + (params.value ? params.value : 0)
        },
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          { max: 0, label: '0', color: '#eee' },
          { min: 1, max: 499, label: '1-499', color: '#fff7ba' },
          { min: 500, max: 4999, label: '500-4999', color: '#ffc24b' },
          { min: 5000, max: 9999, label: '5000-9999', color: '#ff7c20' },
          { min: 10000, max: 100000, label: '1万-10万', color: '#fe5e3b' },
          { min: 100000, max: 500000, label: '10万-50万', color: '#e2482b' },
          { min: 500000, label: '50万以上', color: '#b93e26' },
        ],
        itemHeight: 10,
        itemWidth: 10,
        inverse: true,
      },
      series: [
        {
          name: '',
          data: virusDatas,
          type: 'map',
          map: 'world',
          nameMap: nameMap,
          emphasis: {
            areaColor: '#c9ffff',
            label: {
              show: false,
            },
          },
          layoutCenter: ['center', 'center'],
          layoutSize: '157%',
        },
      ],
    }
    myChart.setOption(option)
  }, [chinaData.chinaTotal.confirm, chinaData.chinaTotal.nowConfirm, foreignData.foreignList, number])

  return (
    <div className='map'>
      <div className='map_info'></div>
      <div className='map_tab'>
        <div className='cur' onClick={() => setNumber(0)}>
          累计确诊
        </div>
        <div className='cur' onClick={() => setNumber(1)}>
          现有确诊
        </div>
      </div>
    </div>
  )
}

export default WorldMap

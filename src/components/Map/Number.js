import React, { useState } from 'react'
import '../../styles/Map/Number.less'
const Number = (props) => {
  const { foreignData } = props
  console.log(foreignData)
  return (
    <div className='brief_body'>
      <div className='number'>
        <div className="number1">{foreignData ? foreignData.globalStatis.confirm : ''}</div>
        <div className="text">累计确诊</div>
        <div className="more1">昨日+{foreignData ? foreignData.globalStatis.confirmAdd : ''}</div>
      </div>
      <div className='number'>
        <div className="number2">{foreignData ? foreignData.globalStatis.nowConfirm : ''}</div>
        <div className="text">现有确诊</div>
        <div className="more2">昨日+{foreignData ? foreignData.globalStatis.nowConfirmAdd : ''}</div>
      </div>
      <div className='number'>
        <div className="number3">{foreignData ? foreignData.globalStatis.dead : ''}</div>
        <div className="text">死亡人数</div>
        <div className="more3">昨日+{foreignData ? foreignData.globalStatis.deadAdd : ''}</div>
      </div>
      <div className='number'>
        <div className="number4">{foreignData ? foreignData.globalStatis.heal : ''}</div>
        <div className="text">治愈人数</div>
        <div className="more4">昨日+{foreignData ? foreignData.globalStatis.healAdd : ''}</div>
      </div>
    </div>
  )
}

export default Number

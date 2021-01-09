import React, { useState } from 'react'
import Header from '../components/Map/Header'
import Number from '../components/Map/Number'
const Map = (props) => {
  const {foreignData} = props
  // console.log(foreignData)
  return (
    <div className='brief'>
      <Header foreignData={foreignData}/>
      <Number foreignData={foreignData}/>
      <div className='map'>
        <div className='map_info'></div>
        <div className='map_tab'>
          <span className='cur'>累计确诊</span>
          <span>现有确诊</span>
        </div>
      </div>
    </div>
  )
}

export default Map

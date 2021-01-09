import React from 'react'
import '../../styles/Map/Header.less'

const Header = (props) => {
  const {foreignData} = props
  // console.log(typeof foreignData)
  return (
    <div className='brief_header'>
      <h2>海外疫情</h2>
      <p>更新时间 - {foreignData ? foreignData.globalStatis.lastUpdateTime : ''}</p>
    </div>
  )
}

export default Header

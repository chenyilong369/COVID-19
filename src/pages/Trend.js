import React from 'react'
import Header from '../components/Trend/Header'
import TrendTable from '../components/Trend/TrendTable'

const Trend = (props) => {
  const {foreignData, chinaData} = props
  return (
    <div>
      <Header></Header>
      {foreignData && chinaData ? (
        <TrendTable foreignData={foreignData} chinaData={chinaData} />
      ) : null}
    </div>
  )
}

export default Trend

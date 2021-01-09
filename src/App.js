import './App.less'
import Map from './pages/Map'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
const App = (props) => {
  const [foreignData, setForeignData] = useState(null)
  const [chinaData, setChinaData] = useState(null)

  useEffect(() => {
    // let request = new XMLHttpRequest()
    // request.open('GET', '/foreign', true)
    // request.onreadystatechange = function () {
    //   if (request.readyState === 4 && request.status === 200) {
    //     let cnt = JSON.parse(request.responseText)
    //     console.log(JSON.parse(cnt.data))
    //     setForeignData(JSON.parse(cnt.data))
    //   }
    // }
    // request.send()
    axios.get('/foreign').then((res) => {
      setForeignData(JSON.parse(res.data.data))
    })

    axios.get('/china').then((res) => {
      setChinaData(JSON.parse(res.data.data))
    })
    // let request2 = new XMLHttpRequest()
    // request2.open('GET', '/china', true)
    // request2.onreadystatechange = function () {
    //   if (request.readyState === 4 && request.status === 200) {
    //     let cnt = JSON.parse(request2.responseText)
    //     console.log(JSON.parse(cnt.data))
    //     setChinaData(JSON.parse(cnt.data))
    //   }
    // }
    // request2.send()
  }, [])

  return (
    <div className='container'>
      <Map foreignData={foreignData} chinaData={chinaData} />
    </div>
  )
}

export default App

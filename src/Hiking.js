import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Paths from './components/Paths'
import Pagination from './components/Pagination'
import { API_GET_DATA } from './global/constants'
import 'bootstrap/dist/css/bootstrap.min.css'

async function fetchPaths(setData) {
  const response = await fetch(API_GET_DATA)
  const data = await response.json()
  setData(data.result.results)
}

const Hiking = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchPaths(setData)
  }, [])

  return (
    <>
      <Header></Header>
      <Paths pathList={data}></Paths>
      <Pagination></Pagination>
    </>
  )
}

export default Hiking

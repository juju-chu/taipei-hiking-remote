import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Paths from './components/Paths'
import Pagination from './components/Pagination'
import { API_GET_DATA, PATHS_PER_PAGE } from './global/constants'
import 'bootstrap/dist/css/bootstrap.min.css'

const Hiking = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchPaths(setData) {
      const response = await fetch(
        `${API_GET_DATA}&offset=${page * PATHS_PER_PAGE}`
      )
      const data = await response.json()
      setCount(data.result.count)
      setData(data.result.results)
    }

    fetchPaths(setData)
  }, [page])

  return (
    <>
      <Header></Header>
      <Paths pathList={data}></Paths>
      <Pagination
        count={count}
        pathsPerPage={PATHS_PER_PAGE}
        currentPage={page}
        setPage={setPage}
      ></Pagination>
    </>
  )
}

export default Hiking

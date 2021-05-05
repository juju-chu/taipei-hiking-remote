import React from 'react'

const Pagination = ({ count, pathsPerPage, currentPage, setPage }) => {
  const handleClick = (page) => {
    return () => {
      setPage(function (prevData) {
        return page
      })
    }
  }

  let pageList = []
  for (let i = 0; i <= count / pathsPerPage; i++) {
    pageList.push(i)
  }

  return (
    <div className="pagination d-flex justify-content-center">
      <div>
        <ul className="pagination">
          {pageList.map((page) => {
            if (page === currentPage) {
              return (
                <li className="page-item active" key={page}>
                  <button className="page-link" onClick={handleClick(page)}>
                    {page + 1}
                  </button>
                </li>
              )
            } else {
              return (
                <li className="page-item" key={page}>
                  <button className="page-link" onClick={handleClick(page)}>
                    {page + 1}
                  </button>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default Pagination

import React from 'react'

const Pagination = ({ count, pathsPerPage, currentPage, setPage }) => {
  const handleClick = (page) => {
    return () => {
      setPage(function (prevData) {
        return page
      })
    }
  }
  const pageNumber = Math.ceil(count / pathsPerPage)
  let pageList = []
  for (let i = 0; i < pageNumber; i++) {
    pageList.push(i)
  }

  return (
    <div className="pagination d-flex justify-content-center">
      <div>
        <ul className="pagination">
          <li className={'page-item' + (currentPage === 0 ? ' disabled' : '')}>
            <button
              className="page-link"
              onClick={handleClick(currentPage - 1)}
            >
              &laquo;
            </button>
          </li>

          {pageList.map((page) => {
            return (
              <li
                className={
                  'page-item' + (page === currentPage ? ' active' : '')
                }
                key={page}
              >
                <button className="page-link" onClick={handleClick(page)}>
                  {page + 1}
                </button>
              </li>
            )
          })}

          <li
            className={
              'page-item' + (currentPage < pageNumber - 1 ? '' : ' disabled')
            }
          >
            <button
              className="page-link"
              onClick={handleClick(currentPage + 1)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pagination

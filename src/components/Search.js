import React, { useState } from 'react'

const searchStyle = {
  padding: '100px 0 0 24px',
  width: '200px',
}

const Search = ({ setKeyword, setPage }) => {
  const [word, setWord] = useState('')
  function keywordChange(e) {
    setWord(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword(word)
    setPage(0)
  }

  return (
    <div className="search" style={searchStyle}>
      <form>
        <fieldset>
          <div className="form-group">
            <label>行政區（例如：大安、士林...）</label>
            <input
              type="text"
              className="form-control"
              id="district"
              value={word}
              onChange={keywordChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            送出
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Search

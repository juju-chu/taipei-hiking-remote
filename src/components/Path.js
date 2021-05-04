import React from 'react'
import ClampLines from 'react-clamp-lines'

const cardStyle = {
  maxWidth: '15rem',
}

const Path = ({ id, name, district, description }) => {
  return (
    <div className="path">
      <div className="card border-danger m-3" style={cardStyle}>
        <div className="card-header">{district}</div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <ClampLines
            text={description}
            id="really-unique-id"
            lines={4}
            ellipsis="..."
            button="false"
            moreText="顯示更多"
            lessText="顯示較少"
            className="custom-class"
            innerElement="p"
          />
        </div>
      </div>
    </div>
  )
}
export default Path

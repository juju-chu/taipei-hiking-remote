import React from 'react'
import Path from './Path'

const Paths = ({ pathList }) => {
  return (
    <div className="pathList d-flex flex-wrap justify-content-center p-5">
      {pathList.map((path) => {
        const { _id: id, 步道名稱, 行政區, 環境特色 } = path
        return (
          <Path
            key={id}
            id
            name={步道名稱}
            district={行政區}
            description={環境特色}
          />
        )
      })}
    </div>
  )
}

export default Paths

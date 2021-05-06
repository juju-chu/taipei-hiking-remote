import React, { useState } from 'react'
import ClampLines from 'react-clamp-lines'
import { Modal, Button } from './../../node_modules/react-bootstrap'

const cardStyle = {
  maxWidth: '15rem',
}

const Path = ({ id, name, district, description }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="path">
      <div className="card border-danger m-3" style={cardStyle}>
        <div className="card-header">{district}</div>
        <div className="card-body" onClick={handleShow}>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Path

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './../../node_modules/react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          台北市健行步道
        </a>
      </Navbar>
    </>
  )
}

export default Header

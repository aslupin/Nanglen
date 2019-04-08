import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const NavbarBox = styled.div`
  position: fixed;
  height: 110px;
  box-shadow: 0 -40px 100px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
  bottom: 0px;
  left: 0px;
  text-align: left;
  justify-content: space-between;
  display: flex;
`
const Navbar = props => <NavbarBox />

export default Navbar

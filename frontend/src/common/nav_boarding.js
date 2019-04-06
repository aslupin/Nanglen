import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import closer from '../assets/icon/close.svg'

const NavbarBox = styled.div`
  z-index: 2;
  position: fixed;
  height: 110px;
  box-shadow: 0 60px 100px 0 rgba(0, 0, 0, 0.05);
  background-color: #f2f2f2;
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: left;
  justify-content: space-between;
  display: flex;
`

const IconTop = styled.img`
  width: 16.5px;
  height: 16.5px;
  text-align: left;
  padding-left: 10px;
`

const WrapIcon = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-left: 20px;
  display: flex;
`
const TextFliter = styled.div`
  width: 88%;
  text-align: center;
  font-family: Montserrat;
  font-weight: bolder;
`
const Navbar = props => (
  <NavbarBox>
    <WrapIcon>
      <a href="/">
        <IconTop src={closer} />
      </a>
      <TextFliter>Filter by</TextFliter>
    </WrapIcon>
  </NavbarBox>
)

export default Navbar

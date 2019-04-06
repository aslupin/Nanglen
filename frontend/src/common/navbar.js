import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import closer from '../assets/icon/close.svg'

const NavbarBox = styled.div`
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
  width: 12.5px;
  height: 12.5px;
  text-align: left;
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
      <IconTop src={closer} />
      <TextFliter>Filter by</TextFliter>
    </WrapIcon>
  </NavbarBox>
)

export default Navbar

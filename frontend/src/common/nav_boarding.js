import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import closer from '../assets/icon/close.svg'
import act from '../assets/icon/activity.png'
import side from '../assets/icon/sidelist.png'
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
  font-size: 12px;
  font-weight: bolder;
`
const IconTopR = styled.img`
  width: 16.5px;
  height: 16.5px;
  text-align: right;
  padding-right: 20px;
`

const Navbar = props => (
  <NavbarBox>
    <WrapIcon>
      <a href="/">
        <IconTop src={side} />
      </a>
      <TextFliter>boarding house</TextFliter>
      <a href="/">
        <IconTopR src={act} />
      </a>
    </WrapIcon>
  </NavbarBox>
)

export default Navbar

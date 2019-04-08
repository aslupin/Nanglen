import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import closer from '../assets/icon/close.svg'
import MoreH from '../assets/icon/more.svg'
import Share from '../assets/icon/share.svg'

const NavbarBox = styled.div`
  z-index: 2;
  position: fixed;
  height: 110px;
  box-shadow: 0 60px 100px 0 rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.25)
    ),
    linear-gradient(to bottom, rgba(242, 242, 242, 0), rgba(242, 242, 242, 0));
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: left;
  justify-content: space-between;
  display: flex;
`
const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  display: flex;
`
const R = styled.div`
  width: 50%;
  text-align: right;
`
const L = styled.div`
  width: 50%;
  text-align: left;
`
const CloserIcon = styled.img`
  padding-left: 30px;
  float: left;
  width: 16.5px;
  height: 16.5px;
`
const ShareMoreIcon = styled.img`
  padding-right: 30px;
  float: right;
  width: 16.5px;
  height: 16.5px;
`
const Navbar = props => (
  <NavbarBox>
    <Container>
      <L>
        <a href="/">
          <CloserIcon src={closer} />
        </a>
      </L>
      <R>
        <ShareMoreIcon src={MoreH} />
        <ShareMoreIcon src={Share} />
      </R>
    </Container>
  </NavbarBox>
)

export default Navbar

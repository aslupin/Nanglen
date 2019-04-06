import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SrcIconAdd from '../assets/icon/add.png'

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;
  font-family: Montserrat;
  color: #444444;
  display: flex;
`
const TdLeft = styled.div`
  width: 45%;
`
const TdRight = styled.div`
  width: 45%;
`
const HBig = styled.div`
  font-size: 23px;
  font-weight: bolder;
`
const HSmall = styled.div`
  font-size: 11.4px;
  color: #888888;
  font-weight: bolder;
`

const BtnFilter = styled.button`
  box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(247, 172, 55, 0.89);
  display: inline-block;
  border-radius: 65px;
  font-family: Montserrat;
  font-size: 13px;
  color: #fff;
  width: 105px;
  height: 40px;
  float: right;
`
const IconAdd = styled.img`
  width: 13px;
  height: 13px;
  padding-right: 5px;
`

const Header = props => (
  <Container>
    <TdLeft>
      <HBig>Bangkok</HBig>
      <HSmall>367 spots</HSmall>
    </TdLeft>
    <TdRight>
      <a href="/filter">
        <BtnFilter>
          <IconAdd src={SrcIconAdd} /> Filters
        </BtnFilter>
      </a>
    </TdRight>
  </Container>
)

export default Header

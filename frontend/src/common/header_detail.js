import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SrcIconAdd from '../assets/icon/add.png'

const Container = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
  width: 100%;
  height: auto;
  font-family: Montserrat;
  color: #444444;

  /* display: flex; */
`

const NameBuilding = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
  padding-top: 15px;
  padding-left: 25px;
  margin-bottom: -7px;
`
const Inline = styled.div`
  display: flex;
  padding-left: 25px;
`
const SmallDetail_Front = styled.p`
  font-size: 12px;
  color: #f2994a;
  padding-right: 10px;
`
const SmallDetail_Back = styled.p`
  font-size: 12px;
  color: #222222;
`

const Line = styled.div`
  width: 92%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #222222;
  padding-top: 9px;
  opacity: 0.3;
  padding-bottom: 20px;
`

const HeadContent = styled.h2`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
  padding-top: 25px;
  padding-left: 25px;
  margin-bottom: -7px;
`
const Content = styled.p`
  font-size: 12px;
  /* font-weight: bold; */
  color: #888888;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  /* margin-bottom: -7px; */
`
const Header = props => (
  <Container>
    <NameBuilding>PREMIO VETRO </NameBuilding>
    <Inline>
      <SmallDetail_Front>14,000 BAHT</SmallDetail_Front>{' '}
      <SmallDetail_Back> Bangkhen, Bangkok</SmallDetail_Back>
    </Inline>
    <center>
      <Line />
    </center>
    <HeadContent>About PREMIO VETRO</HeadContent>
    <Content>
      Boutique style condominium with standard facility, the final high building
      standard in the agricultural area opposite the Kasetsart University
      Ngamwongwan Gate 1
    </Content>
  </Container>
)

export default Header

import React from 'react'
import styled from 'styled-components'
import NavbarBoo from '../../common/nav_boarding'
import Header from '../../common/header_boarding'
import Card from '../../common/card'
const BoxDrummy = styled.div`
  height: 130px;
`
const Home = props => (
  <div>
    <BoxDrummy />
    <NavbarBoo />
    <Header />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
)
export default Home

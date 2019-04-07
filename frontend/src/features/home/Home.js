import React from 'react'
import styled from 'styled-components'
import NavbarBoo from '../../common/nav_boarding'
import Header from '../../common/header_boarding'
import Card from '../../common/card'
import MockA from '../../assets/mock/b.png'
import MockI from '../../assets/mock/m1.jpg'
import MockII from '../../assets/mock/m2.jpg'
import MockIII from '../../assets/mock/m3.jpg'
import MockIV from '../../assets/mock/m4.jpg'
const BoxDrummy = styled.div`
  height: 130px;
`
const Ll = styled.a`
  color: #000;
  text-decoration: none;
`
const Home = props => (
  <div>
    <BoxDrummy />
    <NavbarBoo />
    <Header />
    <Ll href="/detail">
      <Card
        img={MockI}
        name="UHACK KU"
        pay="8,000 BAHT"
        water="5 BAHT/UNIT"
        elec="5 BAHT/UNIT"
      />
    </Ll>
    <Ll href="/detail">
      <Card
        img={MockII}
        name="PREMIO VETRO"
        pay="14,000 BAHT"
        water="5 BAHT/UNIT"
        elec="5 BAHT/UNIT"
      />
    </Ll>
    <Ll href="/detail">
      <Card
        img={MockIII}
        name="SANSUK"
        pay="6,000 BAHT"
        water="2 BAHT/UNIT"
        elec="3 BAHT/UNIT"
      />
    </Ll>
    <Ll href="/detail">
      <Card
        img={MockIV}
        name="CHAPTER ONE"
        pay="10,000 BAHT"
        water="5 BAHT/UNIT"
        elec="8 BAHT/UNIT"
      />
    </Ll>
    <Ll href="/detail">
      <Card
        img={MockII}
        name="THE SELECTED"
        pay="7,000 BAHT"
        water="5 BAHT/UNIT"
        elec="5 BAHT/UNIT"
      />
    </Ll>
    <Ll href="/detail">
      <Card
        img={MockA}
        name="CPE"
        pay="2,000 BAHT"
        water="4 BAHT/UNIT"
        elec="5 BAHT/UNIT"
      />
    </Ll>
  </div>
)
export default Home

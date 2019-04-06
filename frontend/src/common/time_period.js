import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: Montserrat;
`
const LeftDetail = styled.div`
  position: absolute;
  padding-top: 20px;
  padding-left: 20px;
`
const HeaderBig = styled.h1`
  font-size: 20px;
  font-weight: bolder;
`
const HeaderMe = styled.h1`
  font-size: 15px;
  opacity: 0.5;
  margin-top: -2px;
  font-weight: bolder;
`
const HeaderSamll = styled.h1`
  font-size: 9px;
  margin-top: 0px;
  opacity: 0.5;
  font-weight: bolder;
`

const ContainerMockup = styled.div`
  width: 100%;
  height: 140px;
  font-size: 18px;
  font-weight: bold;
`
const time_period = props => (
  <Container>
    <LeftDetail>
      <HeaderBig>Time Period</HeaderBig>
      <HeaderMe>FROM</HeaderMe>
      <HeaderSamll>(MONTH/YEAR)</HeaderSamll>
    </LeftDetail>
  </Container>
)

export default time_period

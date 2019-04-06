import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: Montserrat;
`

const LeftDetail = styled.div`
  z-index: -1;
  position: absolute;
  padding-top: 10px;
  padding-left: 10px;
`
const HeaderBig = styled.h1`
  font-size: 17px;
  font-weight: bold;
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
  padding-top: 38px;
  width: 100%;
  height: auto;
  text-align: center;
`
const ItemVertical = styled.div`
  padding-top: 13px;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  font-weight: bold;
  text-align: center;
  display: block;
`

const UnderlineI = styled.div`
  width: 23%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #000;
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
  display: inline-block;
  margin-bottom: 2px;
`
const UnderlineII = styled.div`
  width: 23%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #000;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  margin-bottom: 2px;
`
const UnderlineIII = styled.div`
  opacity: 0.5;
`

const time_period = props => (
  <Container>
    <LeftDetail>
      <HeaderBig>Time Period</HeaderBig>
      <HeaderMe>FROM</HeaderMe>
      <HeaderSamll>(MONTH/YEAR)</HeaderSamll>
    </LeftDetail>
    <ContainerMockup>
      <ItemVertical>
        <UnderlineI>3 / 19</UnderlineI>
      </ItemVertical>
      <ItemVertical>
        <UnderlineII>4 / 19</UnderlineII>
      </ItemVertical>
      <ItemVertical>
        <UnderlineIII>5 / 19</UnderlineIII>
      </ItemVertical>
    </ContainerMockup>
  </Container>
)

export default time_period

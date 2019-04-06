import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: Montserrat;
`

const LeftDetail = styled.div`
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
  padding-top: 18px;
  width: 100%;
  height: auto;
  text-align: center;
`
const ItemVertical = styled.div`
  color: #222222;
  padding-top: 13px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  display: block;
`

const UnderlineI = styled.div`
  width: 14%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #222222;
  color: #222222;
  font-weight: bold;
  opacity: 0.5;
  text-align: center;
  display: inline-block;
  margin-bottom: 2px;
`
const UnderlineII = styled.div`
  width: 14%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #222222;
  color: #000;

  font-weight: bold;
  text-align: center;
  display: inline-block;
  margin-bottom: 2px;
`
const UnderlineIII = styled.div`
  opacity: 0.5;
`
const Line = styled.div`
  width: 92%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: #222222;
  padding-top: 15px;
  opacity: 0.3;
  padding-bottom: 15px;
`
const duration = props => (
  <div>
    <Container>
      {props.isDuration ? (
        <div>
          <center>
            <Line />
          </center>
          <LeftDetail>
            <HeaderMe>DURATION</HeaderMe>
            <HeaderSamll>(YEAR)</HeaderSamll>
          </LeftDetail>
        </div>
      ) : (
        <LeftDetail>
          <HeaderBig>Room</HeaderBig>
          <HeaderMe>PERSONS</HeaderMe>
        </LeftDetail>
      )}

      <ContainerMockup>
        <ItemVertical>
          <UnderlineI>3</UnderlineI>
        </ItemVertical>
        <ItemVertical>
          <UnderlineII>4</UnderlineII>
        </ItemVertical>
        <ItemVertical>
          <UnderlineIII>5</UnderlineIII>{' '}
        </ItemVertical>
      </ContainerMockup>
    </Container>
  </div>
)

export default duration

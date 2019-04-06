import React from 'react'
import styled from 'styled-components'

import WifiIcon from '../assets/icon/wifi.svg'
import ResIcon from '../assets/icon/restaurant.svg'
import ParkIcon from '../assets/icon/parking.svg'
import SwimmingIcon from '../assets/icon/swim.svg'
import InternetIcon from '../assets/icon/internet.svg'
const Container = styled.div`
  width: 100%;
  box-shadow: 0 40px 100px 0 rgba(0, 0, 0, 0.05);
  background-color: #f2f2f2;
  padding-top: 10px;
  display: block;
`
const TextFeature = styled.h1`
  font-size: 17px;
  font-weight: bold;
  padding-left: 10px;
`

const ContainerOptions = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const Td = styled.div`
  width: 20%;
  height: auto;
  margin: 7px;
  display: block;
  text-align: center;
  /* background-color: #000; */
`
const Circle = styled.span`
  text-align: center;
  width: 55px;
  height: 55px;
  /* height: 100%; */
  border-radius: 50%;
  display: block;
  box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(247, 172, 55, 0.89);
  /* margin: 20px; */
`
const CircleOff = styled.div`
  text-align: center;
  width: 55px;
  height: 55px;
  /* height: 100%; */
  border-radius: 50%;
  display: block;
  box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(94, 104, 112, 0.1);
  /* margin: 20px; */
`
const Icon = styled.img`
  width: 25px;
  height: auto;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`
const NameFeature = styled.p`
  display: block;
  font-size: 10px;
  color: #222222;
  text-align: center;
`

const features = props => (
  <Container>
    <TextFeature>Features</TextFeature>
    <center>
      <ContainerOptions>
        <Td>
          <Circle>
            <Icon src={WifiIcon} />
          </Circle>
          <NameFeature> WI-FI</NameFeature>
        </Td>
        <Td>
          <Circle>
            <Icon src={ResIcon} />
          </Circle>
          <NameFeature> Restaurant</NameFeature>
        </Td>
        <Td>
          <CircleOff>
            <Icon src={SwimmingIcon} />
          </CircleOff>
          <NameFeature> Swimming Pools</NameFeature>
        </Td>
        <Td>
          <Circle>
            <Icon src={InternetIcon} />
          </Circle>
          <NameFeature> Internet</NameFeature>
        </Td>
        <Td>
          <CircleOff>
            <Icon src={ParkIcon} />
          </CircleOff>
          <NameFeature>Parking Spot</NameFeature>
        </Td>
      </ContainerOptions>
    </center>
  </Container>
)

export default features

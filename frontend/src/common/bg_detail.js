import React from 'react'
import styled from 'styled-components'
import BgHead from '../assets/img/bg_detail.jpg'

const Container = styled.div`
  width: cover;
  height: 250px;
  background-image: url(${BgHead});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-right: -10px;
  margin-left: -10px;
  margin-top: -10px;
`

const Bg = props => <Container />

export default Bg

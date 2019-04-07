import React from 'react'
import styled from 'styled-components'
import Sunny from '../assets/icon/sunny.png'
import MockA from '../assets/mock/b.png'
import Light from '../assets/icon/light-bolt.png'
import Drop from '../assets/icon/drop.png'
import More from '../assets/icon/more.png'

const Container = styled.div`
  width: 100%;
  box-shadow: 0 40px 100px 0 rgba(0, 0, 0, 0.05);
  background-color: #f2f2f2;
`
const Td = styled.div`
  width: 30%;
`
const SunnyIcon = styled.img`
  width: 30px;
  height: auto;
`

const Rate = props => (
  <Container>
    <Td>
      <SunnyIcon src={SunnyIcon} />
    </Td>
    <Td>
      <SunnyIcon src={SunnyIcon} />
    </Td>
    <Td>
      <SunnyIcon src={SunnyIcon} />
    </Td>
  </Container>
)

export default Rate

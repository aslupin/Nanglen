import React from 'react'
import styled from 'styled-components'

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

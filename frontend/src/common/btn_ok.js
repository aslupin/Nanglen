import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 40px;
`
const Btn = styled.button`
  width: 70%;
  color: #fff;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(247, 172, 55, 0.89);
  font-size: 16px;
  font-weight: bold;
  font-family: Montserrat;
`
const BtnFilter = props => (
  <Container>
    <a href="/">
      <Btn>Book it</Btn>
    </a>
  </Container>
)

export default BtnFilter

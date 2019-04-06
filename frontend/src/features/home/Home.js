import React from 'react'
import styled from 'styled-components'
import Navbar from '../../common/navbar'
import Time_Period from '../../common/time_period'

const BoxDrummy = styled.div`
  height: 110px;
`

const Home = props => (
  <div>
    <Navbar />
    <BoxDrummy />
    <Time_Period />
  </div>
)
export default Home

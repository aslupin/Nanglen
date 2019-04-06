import React from 'react'
import styled from 'styled-components'
import Navbar from '../../common/navbar'
import Btn from '../../common/btn_filter'
import Duration from '../../common/duration'
import Features from '../../common/features'
import Time_Period from '../../common/time_period'
const BoxDrummy = styled.div`
  height: 110px;
`

const Home = props => (
  <div>
    <BoxDrummy />
    <Navbar />
    <Time_Period />
    <Duration isDuration={true} />
    <Features />
    <Duration isDuration={false} />
    <Btn />
  </div>
)
export default Home

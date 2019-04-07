import React from 'react'
import styled from 'styled-components'
import NavbarWater from '../../common/nav_water'
import Header from '../../common/header_detail'
import Rate from '../../common/rate'
const BoxDrummy = styled.div`
  height: 130px;
`
const Detail = props => (
  <div>
    <BoxDrummy />
    <NavbarWater />
    <Header />
    <Rate />
  </div>
)
export default Detail

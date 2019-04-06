import React from 'react'
import styled from 'styled-components'
import NavbarWater from '../../common/nav_water'
import Header from '../../common/header_boarding'
import Card from '../../common/card'
const BoxDrummy = styled.div`
  height: 130px;
`
const Detail = props => (
  <div>
    <BoxDrummy />
    <NavbarWater />
  </div>
)
export default Detail

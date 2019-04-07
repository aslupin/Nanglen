import React from 'react'
import styled from 'styled-components'
import NavbarWater from '../../common/nav_water'
import Header from '../../common/header_detail'
import BgDetailHeader from '../../common/bg_detail'
import Btn from '../../common/btn_ok'
// import Rate from '../../bcommon/rate'
const BoxDrummy = styled.div`
  height: 130px;
`
const Detail = props => (
  <div>
    {/* <BoxDrummy /> */}
    <NavbarWater />
    <BgDetailHeader />
    <Header />
    <Btn />
    {/* <Rate /> */}
  </div>
)
export default Detail

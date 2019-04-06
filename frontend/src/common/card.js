import React from 'react'
import styled from 'styled-components'
import MockA from '../assets/mock/b.png'
import Light from '../assets/icon/light-bolt.png'
import Drop from '../assets/icon/drop.png'
import More from '../assets/icon/more.png'

const CardContainer = styled.div`
  overflow: hidden;
  padding: 2 2 10px;
  margin: 30px auto 0;
  width: 94%;
  height: 140px;
  border-radius: 20px;
  box-shadow: 0 40px 100px 0 rgba(0, 0, 0, 0.05);
  background-color: #fafafa;
  display: flex;
`
const ConL = styled.div`
  width: 45%;
  height: auto;
  text-align: center;
`
const ConR = styled.div`
  width: 55%;
  display: block;
  margin-left: 10px;
`
const ImageOrder = styled.img`
  width: 140px;
  height: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 20px;
`

const DetailName = styled.div`
  padding-top: 23.5px;
  display: block;
  font-size: 17px;
  font-weight: bold;
  color: #444444;
`
const DetailPay = styled.div`
  padding-left: 5px;
  display: block;
  font-size: 14px;
  font-weight: bolder;
  color: #888888;
  padding-bottom: 10px;
`
const Inline = styled.div`
  /* justify-content: space-between; */
  display: flex;
  /* top: -30px; */
  /* bottom: -30px; */
  margin: -10px;
  padding: 0px;
`

const InLineIcon = styled.img`
  padding-top: 9px;
  width: auto;
  height: 13px;
`

const TextUnit = styled.p`
  padding-left: 10px;
  /* padding-top: -6px; */
  font-size: 10px;
  font-weight: bold;
`
const ConMore = styled.div`
  width: 5%;
  text-align: right;
  float: right;
`
const MoreIcon = styled.img`
  padding-top: 25px;
  height: 20px;
  width: auto;
  padding-right: 15px;
`

const Card = props => (
  <CardContainer>
    <ConL>
      <ImageOrder src={MockA} />
    </ConL>
    <ConR>
      <DetailName>PREMIO VETRO</DetailName>
      <DetailPay>14,000 BAHT</DetailPay>
      <Inline>
        <InLineIcon src={Light} />
        <TextUnit>5 BAHT/UNIT</TextUnit>
      </Inline>
      <Inline>
        <InLineIcon src={Drop} />
        <TextUnit>5 BAHT/UNIT</TextUnit>
      </Inline>
    </ConR>
    {/* <ConMore> */}
    <MoreIcon src={More} />
    {/* </ConMore> */}
  </CardContainer>
)

export default Card

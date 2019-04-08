import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../../common/navbar'
// import Btn from '../../common/btn_filter'
import Duration from '../../common/duration'
import Features from '../../common/features'
import Time_Period from '../../common/time_period'
const BoxDrummy = styled.div`
  height: 110px;
`
const Container = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 40px;
`
const Btn = styled.button`
  width: 80%;
  color: #fff;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 10px 27px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(247, 172, 55, 0.89);
  font-size: 16px;
  font-weight: bold;
  font-family: Montserrat;
`
const onSubmit = async () => {
  // e.preventDefault()
  // const serverport = {
  //   name: this.state.name,
  //   port: this.state.port,
  // }
  await axios
    .get(
      `https://juitanya.herokuapp.com/filter/?rental=condo&min=4000&max=20000`
    )
    .then(res => {
      const f = res.data
      // time = f['items'][0]['contentDetails']['duration']
    })

  // this.setState({
  //   name: '',
  //   port: '',
  // })
}

const Home = props => (
  <div>
    <BoxDrummy />
    <Navbar />
    <Time_Period />
    <Duration isDuration={true} />
    <Features />
    <Duration isDuration={false} />
    <Container>
      <a href="/">
        <Btn>Filter</Btn>
      </a>
    </Container>
  </div>
)
export default Home

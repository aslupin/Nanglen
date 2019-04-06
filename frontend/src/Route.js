import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Register, Success } from './features/form'
// import Register from './features/form/Register'
// import Success from './features/form/Success'
import Home from './features/home/Home'

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/form/register" exact component={Register} />
    <Route path="/form/success:id" exact component={Success} /> */}
  </Switch>
)

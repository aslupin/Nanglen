import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Register, Success } from './features/form'
// import Register from './features/form/Register'
// import Success from './features/form/Success'
import Home from './features/home/Home'
import Filter from './features/filter/Filter'
import Detail from './features/detail/Detail'
export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/filter" exact component={Filter} />
    <Route path="/detail" exact component={Detail} />
  </Switch>
)

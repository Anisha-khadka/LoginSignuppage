import React from 'react'

import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Main from './Components/Main'

export default function Routes() {
  return (
    <>
    <Route path="/" component={Login} exact/>
    <Route path="/signup" component={Signup} exact/>
    <Route path="/main" component={Main} exact/>

    </>
  )
}

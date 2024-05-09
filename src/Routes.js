import React from 'react'

import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

export default function Routes() {
  return (
    <>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    </>
  )
}

import React from 'react'
import {Route, Redirect} from "react-router"

const PrivateRoute = ({children , ...rest}) => (
  localStorage.getItem('authToken') ?
    <Route {...rest} >
      {children}
    </Route> : 
    <Redirect to={{
      pathname: "/login"
    }} />
)

export default PrivateRoute;

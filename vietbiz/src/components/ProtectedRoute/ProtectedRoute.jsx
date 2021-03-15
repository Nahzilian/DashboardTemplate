import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute(props) {
    if (props.isAuth) {
        return <Route path={props.path} component={props.component}/>
    }
    return <Redirect to={{pathname: '/', state: {from : props.location }}}/>
}

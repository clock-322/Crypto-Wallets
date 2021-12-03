import React from 'react';
import { Route, Redirect } from "react-router-dom";

//Currently Authguard is configured to nothing.
//Can be modified according to the required authencation process.

const AuthGuard = ({ component: Component, auth, ...rest }) => (
    
    <Route {...rest} render={(props) => (
        //
            /* ? */ <Component {...props} />
            //: <Redirect to='/' />
    )} />
)

export default AuthGuard;
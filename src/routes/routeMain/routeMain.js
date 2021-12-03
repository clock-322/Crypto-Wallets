import React,{Component} from 'react'
import CommonRoutes from '../commonRoutes/commonRoutes.routes'

import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'

export default class RouteMain extends Component {
    render(){
        return(
        <div>
                <Router>
                    <Switch>
                        <Route component={CommonRoutes} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
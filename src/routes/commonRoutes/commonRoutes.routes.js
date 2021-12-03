import React, {Component} from 'react'
import Homepage from '../../components/common/homepage'
import { Route } from 'react-router-dom'

export default class CommonRoutes extends Component{
    render(){
        return(
            <div>
                <Route exact path='/' component={Homepage}/>
                
            </div>
        )
    }
}
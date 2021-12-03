import React from 'react'
import RouteMain from './routes/routeMain/routeMain'
import { Provider } from 'react-redux'
import configureStore from "./redux/store";

let { store } = configureStore();

export default class App extends React.Component {
  render(){
    return(
      <>
        <Provider store={store}>
          <RouteMain/>
        </Provider>
      </>
    )
  }
}

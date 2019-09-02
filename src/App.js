import React, { Component } from 'react'
import routes from './routes/routes'
import axios from 'axios'

import store from './redux/store'
import {SET_HOUSES} from './redux/reducer'

import Header from './components/Header/Header'

import 'reset-css'
import './App.css';



export default class App extends Component {
  constructor(){
    super()

    this.state = {
        reduxState: store.getState()
    }
  }

  componentDidMount(){
    this.getHouses()

    store.subscribe(() => {
      this.setState({
        reduxState: store.getState()
      })
    })
  }

  getHouses = () => {
    axios.get('/api/house/get').then((res) => {
      store.dispatch({type: SET_HOUSES, payload: res.data})
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
    <div className="App" >
      <Header />
      {routes}
    </div>
    )
  }
}


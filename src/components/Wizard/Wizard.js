import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom'

import store from '../../redux/store'
import {DELETE_STATE} from '../../redux/reducer'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

import './Wizard.css'

export default class Wizard extends Component {

    cancelButton = () => {
        store.dispatch({type: DELETE_STATE, payload: this.state.image_url})
    }

    render() {
        return (
            <div className="wizard-container">
                <div className='title-container'>
                    <h1>Add New Listing</h1>
                </div>
                <Switch>
                    <Route exact path='/wizard' component={Step1}/>
                    <Route path='/wizard/step2' component={Step2}/>
                    <Route path='/wizard/step3' component={Step3}/>
                </Switch>
            </div>
        )
    }
}
import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import store from '../../redux/store'
import {STEP2, DELETE_STATE} from '../../redux/reducer'

import './Wizard.css'

export default class Step2 extends Component {
    constructor(){
        super()

        this.state = {
            reduxState: store.getState(),
            image_url: ''
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState(),
                image_url: ''
            })
        })
    }

    cancelButton = () => {
        store.dispatch({type: DELETE_STATE, payload: {}})
    }

    addURL = () => {
        store.dispatch({type: STEP2, payload: {image_url: this.state.image_url}})
        this.setState({
            image_url: 'https://bit.ly/2TXgria'
        })
    }

    render() {
        return (
            <div className="step-container">
                <div className='form-container'>
                    <section className='input-container'>
                        <label>Image URL</label>
                        <input onChange={(e) => this.setState({image_url: e.target.value})}/>
                    </section>
                </div>
                <div>
                    <Link to='/wizard'>
                        <button>Previous Step</button>
                    </Link>
                    <Link to='/wizard/step3'>
                        <button onClick={this.addURL}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import axios from 'axios'

import store from '../../redux/store'
import {ADD_HOME} from '../../redux/reducer'

import './Wizard.css'

export default class Step3 extends Component {
    constructor(){
        super()

        this.state = {
            reduxState: store.getState(),
            mortgage: 0,
            rent: 0
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState(),
                mortgage: 0,
                rent: 0
            })
        })
    }

    submitForm = () => {
        const {name, address, city, state, zipcode, image_url} = this.state.reduxState
        const {mortgage, rent} = this.state
        // const {mortgage, rent} = this.state
        // console.log(mortgage)
        // console.log(this.state.reduxState)
        // store.dispatch({type: STEP3, payload: {mortgage:mortgage, rent:rent}})

        const houseObj = {name, address, city, state, zipcode, image_url, mortgage, rent}

        console.dir(houseObj)

        axios.post('/api/house/add', houseObj)
            .then((res) => {
                store.dispatch({type: ADD_HOME, payload: res.data})
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="step-container">
                <div className='form-container'>
                    <section className='input-container'>
                        <label>Monthly Mortgage Amount</label>
                        <input onChange={(e) => this.setState({mortgage: e.target.value})}/>
                    </section>
                    <section>
                        <label>Desired Monthly Rent</label>
                        <input onChange={(e) => this.setState({rent: e.target.value})}/>
                    </section>
                </div>
                <div>
                    <Link to='/wizard/step2'>
                        <button>Previous Step</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={this.submitForm}>Complete</button>
                    </Link>
                </div>
            </div>
        )
    }
}
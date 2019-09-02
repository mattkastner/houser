import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import store from '../../redux/store'
import {STEP1} from '../../redux/reducer'

import './Wizard.css'

export default class Step1 extends Component {
    constructor(){
        super()

        this.state = {
            reduxState: store.getState(),
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState(),
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0
            })
        })
    }

    addTextInfo = () => {
        const {name, address, city, state, zipcode} = this.state
        console.dir({name, address, city, state, zipcode})
        const textInfo = {name, address, city, state, zipcode}
        store.dispatch({type: STEP1, payload: textInfo})
        console.log(this.state.reduxState)
    }

    render() {
        // const {name, address, city, state, zipcode} = this.state
        return (
            <div className="step-container">
                <div className='form-container'>
                    <section className='input-container'>
                        <label>Property Name</label>
                        <input onChange={(e) => this.setState({name: e.target.value})}/>
                    </section>
                    <section>
                        <label>Address</label>
                        <input onChange={(e) => this.setState({address: e.target.value})}/>
                    </section>
                    <div className='location-container'>
                        <section>
                            <label>City</label>
                            <input onChange={(e) => this.setState({city: e.target.value})}/>
                        </section>
                        <section>
                            <label>State</label>
                            <input onChange={(e) => this.setState({state: e.target.value})}/>
                        </section>
                        <section>
                            <label>Zip</label>
                            <input onChange={(e) => this.setState({zipcode: +e.target.value})}/>
                        </section>
                    </div>
                </div>
                <Link to='/wizard/step2'>
                    <button onClick={this.addTextInfo}>Next Step</button>
                </Link>
            </div>
        )
    }
}
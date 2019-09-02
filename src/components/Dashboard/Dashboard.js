import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios';

import store from '../../redux/store'

import House from '../House/House'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            reduxState: store.getState()
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState()
            })
        })
    }

    render() {
        console.dir(this.state.reduxState.houses)
        const mappedListings = this.state.reduxState.houses.map((house, i) => <House key={i} house={house}/>)
        return (
            <div className="dashboard-container">
                <div className='listings-header-container'>
                    <div className='title-btn-container'>
                        <h1>Dashboard</h1>
                        <Link to='/wizard'>
                            <button className='add-property'>Add New Property</button>
                        </Link>
                    </div>
                </div>
                <div className="home-listings-container">
                    <h3>Home Listings</h3>
                </div>
                <div>
                    {mappedListings}
                </div>
                
            </div>
        )
    }
}

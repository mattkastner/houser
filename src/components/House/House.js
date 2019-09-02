import React, { Component } from 'react'

import axios from 'axios'

import store from '../../redux/store'
import {SET_HOUSES} from '../../redux/reducer'

import './House.css'

export default class House extends Component {
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

    deleteBtnClick = (id) => {
        axios.delete(`/api/house/delete/${id}`).then((res) => {
            console.dir(res.data)
            store.dispatch({type: SET_HOUSES, payload: res.data})
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const {house_id, name, address, city, state, zipcode, image_url, mortgage, rent} = this.props.house

        return (
            <div className='display-container'>
                <div className='image-container'>
                    <img src={image_url} alt={image_url}/>
                </div>
                <div className='info-container'>
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Zip: {zipcode}</p>
                </div>
                <div className='price-container'>
                    <p>Monthly Mortage: {mortgage}</p>
                    <p>Desired Rent: {rent}</p>
                </div>
                <div onClick={()=> this.deleteBtnClick(house_id)} className='delete-btn'>x</div>
            </div>
        )
    }
}

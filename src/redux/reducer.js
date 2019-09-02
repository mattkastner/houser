//initial state
const initialState = {
    houses: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image_url: 'https://bit.ly/2TXgria'
}

export const DELETE_STATE = 'DELETE_STATE'
export const STEP1 = 'STEP1'
export const STEP2 = 'STEP2'
export const STEP3 = 'STEP3'
export const ADD_HOME = 'ADD_HOUSE'
export const SET_HOUSES = 'SET_HOUSES'
export const DELETE_HOUSE = 'DELETE_HOUSE'

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_HOUSES:
            return {...state, houses:action.payload}
        case STEP1:
            const {name, address, city, zipcode} = action.payload
            console.log(action.payload)
            return {
                ...state, 
                name:name, 
                address:address, 
                city:city, 
                state:action.payload.state, 
                zipcode:zipcode
            }
        case STEP2:
            const {image_url} = action.payload
            console.log(action.payload)
            return {
                ...state, 
                image_url:image_url
            }
        // case STEP3:
        //     const {mortgage, rent} = action.payload
        //     console.log(action.payload)
        //     // console.log()
        //     return {...state, mortgage: +mortgage, rent: +rent}
        case ADD_HOME:
            return {
                ...state, 
                houses:action.payload,
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0,
                image_url: 'https://bit.ly/2TXgria'
            }
        case DELETE_STATE:
            return {
                ...state,
                houses:state.houses,
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0,
                image_url: 'https://bit.ly/2TXgria'
            }
        default: 
            return state
    }
}   

export default reducer
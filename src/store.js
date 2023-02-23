import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import {  productReducer } from './Reducers/ProductReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const reducer = combineReducers({
    productReducer:productReducer
    // productListReducer: productListReducer,
    // productCreateReducer: productCreateReducer,
})

const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
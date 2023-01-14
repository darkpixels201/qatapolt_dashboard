import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import { productListReducer } from './Reducers/ProductReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const reducer = combineReducers({
    productListReducer: productListReducer
})

const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
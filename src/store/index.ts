import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'
import { dataReducer } from './reducers/dataReducer'


export const store = configureStore({
    reducer:{
        data: dataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


import * as actionTypes from './actionTypes'

export const addCounter=(product)=>({
        type:"ADD_COUNTER",
        payload:product
    }
)

export const reduceCounter=()=>({
        type:"REDUCE_COUNTER",
        payload:1
    }
)
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value++
        },
        decrement: state => {
            state.value--
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        double: state => {
            state.value *= 2
        }
    }
})

export const { increment, decrement, incrementByAmount, double } = counterSlice.actions

export default counterSlice.reducer
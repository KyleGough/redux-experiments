import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { increment, decrement, double } from './counterSlice';
import './Counter.css'

export const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    
    return (
      <div className="card">
        <h2>Click Counter</h2>
        <p className='label'>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(double())}>x2</button>
      </div>
    )
}
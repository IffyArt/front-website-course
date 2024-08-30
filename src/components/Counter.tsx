// src/components/Counter.tsx

import { RootState } from '@/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/counter';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

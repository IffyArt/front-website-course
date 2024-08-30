import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setCount } from '../actions';

function Count() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setCount(223))}>Decrement</button>
    </div>
  );
}

export default Count;

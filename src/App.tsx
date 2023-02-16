import './App.css';

import type { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label='Increment by 2'
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
    </div>
  );
}

export default App;

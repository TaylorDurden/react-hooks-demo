import { stat } from "fs";
import { useEffect, useReducer } from "react";

function init(initialCount: number) {
  return { count: initialCount, background: '#fff' };
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1 };
    case 'decrement':
      return {...state, count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    case 'setBackgroundGray':
      return { ...state, background: '#eee' };
    case 'setBackgroundWhite':
      return {...state, background: '#fff' };
    default:
      throw new Error();
  }
}

export default function Counter({ initialCount }: any) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  useEffect(() => {
    console.log(`componentDidMount => called`);
    return () => {
      console.log(`componentWillUnmount => called`);
    }
  }, [state.background]);
  return (
    <div style={{background: state.background}}>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: 'setBackgroundGray' })}>Set Gray</button>
      <button onClick={() => dispatch({ type: 'setBackgroundWhite' })}>Set White</button>
    </div>
  );
}

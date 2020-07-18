import React, { useReducer } from "react";

const COUNTER_ACTIONS = {
  INCREASE: "increase",
  DECREASE: "decrease",
  RESET: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREASE:
      return state + 1;
    case COUNTER_ACTIONS.DECREASE:
      return state - 1;
    case COUNTER_ACTIONS.RESET:
      return 0;
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
};

const App = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  const increase = () => dispatch({ type: COUNTER_ACTIONS.INCREASE });
  const decrease = () => dispatch({ type: COUNTER_ACTIONS.DECREASE });
  const reset = () => dispatch({ type: COUNTER_ACTIONS.RESET });
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>Sumar</button>
      <button onClick={decrease}>Restar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default App;

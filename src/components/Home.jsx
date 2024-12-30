// example of udeReducer on counting

import React, { useReducer } from "react";
const Home = () => {
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    }
    if (action.type === "decrement") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Home;

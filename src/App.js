import React, { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>더하기</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>뺴기</button>
    </>
  );
};

export default App;

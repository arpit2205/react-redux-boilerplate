import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(signin())}>Sign in</button>
      {logged ? (
        <>
          <h1>Counter value: {counter}</h1>
          <button onClick={() => dispatch(increment(1))}>+</button>
          <button onClick={() => dispatch(decrement(1))}>-</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

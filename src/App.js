import React, { useReducer, useState } from "react";
import reducer, { ADD, COMPLETE, DEL, initialState } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payLoad: newToDo });
    setNewTodo("");
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTodo(value);
  };

  return (
    <>
      <h1>ADD To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payLoad: todo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payLoad: todo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <span onClick={() => dispatch({ type: DEL, payLoad: todo.id })}>
                  ❌
                </span>
                <span onClick={() => dispatch({ type: DEL, payLoad: todo.id })}>
                  😂👍🏻
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default App;

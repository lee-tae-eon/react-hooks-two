import React, { useState } from "react";
import Add from "./Add";
import List from "./List";


const App = () => {

  const [newToDo, setNewTodo] = useState("");

  return (
    <>
      <Add />
      <List>
        <h1>text</h1>
        <h2>hello</h2>
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
                <span
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payLoad: todo.id })
                  }
                >
                  😂👍🏻
                </span>
              </li>
            ))}
          </>
        )}
      </List>
    </>
  );
};

export default App;

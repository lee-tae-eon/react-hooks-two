import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDos: [],
};

const ADD = "add";
const DEL = "del";

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        toDos: [...state.toDos, { text: action.payLoad, id: uuidv4() }],
      };
    case DEL:
      return {};
    default:
      throw new Error();
  }
}

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
            <button>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

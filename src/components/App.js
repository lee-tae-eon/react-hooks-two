import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

const App = () => {
  const { toDos, completed } = useState();

  return (
    <>
      <Add />
      <List name={"To Do"}>
        {toDos.map((todo) => (
          <ToDo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};

export default App;

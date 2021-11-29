/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default () => {
  const [newToDo, setNewTodo] = useState("");
  const dispatch = useDispatch();
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
    </>
  );
};

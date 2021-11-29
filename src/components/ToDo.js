/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { COMPLETE, DEL, UNCOMPLETE } from "../actions";
import { useDispatch } from "../context";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <span onClick={() => dispatch({ type: DEL, payLoad: id })}>❌</span>
      <span
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payLoad: id })
        }
      >
        {isCompleted ? "😂" : "✅"}
      </span>
    </li>
  );
};

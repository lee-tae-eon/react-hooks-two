/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ name, children }) => (
  <>
    <h1>{name}</h1>
    <ul>{children}</ul>
  </>
);

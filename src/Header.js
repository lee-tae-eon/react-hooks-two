import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);

  return (
    <header>
      <a href="#">Home</a>
      <span>Hello, {name}</span>
      you are {loggedIn ? "로그인중" : "로그인하세여"}
    </header>
  );
};
export default Header;

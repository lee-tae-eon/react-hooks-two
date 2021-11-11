import React, { useContext } from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a>
      <span>Hello, {name}</span>
      you are {loggedIn ? "로그인중" : "로그인하세여"}
    </header>
  );
};
export default Header;

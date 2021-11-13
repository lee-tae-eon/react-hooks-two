import React from "react";
import { useSetLang } from "./context";

const Screen = () => {
  const setLang = useSetLang();
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => setLang("es")}>TransLate</button>
    </>
  );
};

export default Screen;

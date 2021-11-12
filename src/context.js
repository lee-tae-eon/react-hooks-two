import React, { useState, createContext } from "react";
import { Children } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState();
  return <LangContext.Provider>{children}</LangContext.Provider>;
};

export default Lang;

import React, { useState, createContext, useContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);

  return (
    <LangContext.Provider value={{ setLang }}>{children}</LangContext.Provider>
  );
};

export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);

  return setLang(lang);
};

export default Lang;

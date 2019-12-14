import React, { useReducer, useEffect } from "react";

import { textReducer, CREATE_GROUP, CREATE_FILE } from "../reducer/textReducer";

const TextContext = React.createContext();
export default TextContext;

export function Provider(props) {
  const initialState = { groups: [], files: [] };

  const [state, dispatch] = useReducer(textReducer, initialState, () => {
    const localData = localStorage.getItem("get_text_app");
    return localData === null ? { ...initialState } : JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("get_text_app", JSON.stringify({ ...state }));
  }, [state]);

  const createGroup = group => dispatch({ type: CREATE_GROUP, group });

  const createFile = file => dispatch({ type: CREATE_FILE, file });

  return (
    <TextContext.Provider
      value={{
        ...state,
        createGroup,
        createFile
      }}
    >
      {props.children}
    </TextContext.Provider>
  );
}

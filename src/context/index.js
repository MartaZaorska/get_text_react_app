import React, { useReducer, useEffect } from "react";

import {
  textReducer,
  CREATE_GROUP,
  CREATE_FILE,
  CHANGE_MODE
} from "../reducer/index";

const TextContext = React.createContext();
export default TextContext;

export function Provider(props) {
  const initialState = { groups: [], files: [], lightMode: true };

  const [state, dispatch] = useReducer(textReducer, initialState, () => {
    const localData = localStorage.getItem("get_text_app");
    return localData === null ? { ...initialState } : JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("get_text_app", JSON.stringify({ ...state }));
  }, [state]);

  const createGroup = group => dispatch({ type: CREATE_GROUP, group });

  const createFile = file => dispatch({ type: CREATE_FILE, file });

  const changeMode = lightMode => dispatch({ type: CHANGE_MODE, lightMode });

  return (
    <TextContext.Provider
      value={{
        ...state,
        createGroup,
        createFile,
        changeMode
      }}
    >
      {props.children}
    </TextContext.Provider>
  );
}

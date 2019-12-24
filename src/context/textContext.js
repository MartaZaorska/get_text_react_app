import React, { useReducer, useEffect } from "react";

import {
  textReducer,
  CREATE_GROUP,
  CREATE_FILE,
  CHANGE_MODE,
  DELETE_GROUP,
  DELETE_FILE,
  UPDATE_FILE
} from "../reducer/textReducer";

const TextContext = React.createContext();
export default TextContext;

export function Provider(props) {
  const initialState = {
    groups: [],
    files: [],
    lightMode: true
  };

  const [state, dispatch] = useReducer(textReducer, initialState, () => {
    const localData = localStorage.getItem("get_text_app");
    return localData === null ? { ...initialState } : JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("get_text_app", JSON.stringify({ ...state }));
  }, [state]);

  const createGroup = data => {
    const now = new Date().getTime();
    const group = { ...data, files: [], createdAt: now, updatedAt: now };
    dispatch({ type: CREATE_GROUP, group });
  };

  const createFile = data => {
    const now = new Date().getTime();
    const file = { ...data, createdAt: now, updatedAt: now };
    dispatch({ type: CREATE_FILE, file });
  };

  const deleteGroup = groupID => {
    dispatch({ type: DELETE_GROUP, groupID });
  };

  const deleteFile = fileID => {
    dispatch({ type: DELETE_FILE, fileID });
  };

  const updateFile = data => {
    const now = new Date().getTime();
    const file = { ...data, updatedAt: now };
    dispatch({ type: UPDATE_FILE, file });
  };

  const changeMode = lightMode => dispatch({ type: CHANGE_MODE, lightMode });

  return (
    <TextContext.Provider
      value={{
        ...state,
        createGroup,
        createFile,
        changeMode,
        deleteFile,
        deleteGroup,
        updateFile
      }}
    >
      {props.children}
    </TextContext.Provider>
  );
}

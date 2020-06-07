import React, { useReducer, useEffect } from "react";

import {
  defaultReducer,
  CREATE_GROUP,
  CREATE_FILE,
  CHANGE_MODE,
  DELETE_GROUP,
  DELETE_FILE,
  UPDATE_FILE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_ACTIVE_ITEM,
} from "./reducer";

const Context = React.createContext();
export default Context;

const initialState = {
  groups: [],
  files: [],
  lightMode: true,
  modal: {
    open: false,
    content: "groups",
    activeGroup: "",
  },
  activeItem: {},
};

export function Provider(props) {
  const [state, dispatch] = useReducer(defaultReducer, initialState, () => {
    const localData = localStorage.getItem("get_text_app");
    return localData === null
      ? { ...initialState }
      : { ...initialState, ...JSON.parse(localData) };
  });

  useEffect(() => {
    const data = {
      groups: [...state.groups],
      files: [...state.files],
      lightMode: state.lightMode,
    };
    localStorage.setItem("get_text_app", JSON.stringify(data));
  }, [state.groups, state.files, state.lightMode]);

  const createGroup = (data) => {
    const now = new Date().getTime();
    const group = { ...data, files: [], createdAt: now, updatedAt: now };
    dispatch({ type: CREATE_GROUP, group });
  };

  const createFile = (data) => {
    const now = new Date().getTime();
    const file = { ...data, createdAt: now, updatedAt: now };
    dispatch({ type: CREATE_FILE, file });
  };

  const deleteGroup = (groupID) => {
    dispatch({ type: DELETE_GROUP, groupID });
  };

  const deleteFile = (fileID) => {
    dispatch({ type: DELETE_FILE, fileID });
  };

  const updateFile = (data) => {
    const now = new Date().getTime();
    const file = { ...data, updatedAt: now };
    dispatch({ type: UPDATE_FILE, file });
  };

  const changeMode = (lightMode) => dispatch({ type: CHANGE_MODE, lightMode });

  const openModal = (type, groupID = "") =>
    dispatch({ type: OPEN_MODAL, content: type, activeGroup: groupID });

  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  const setActiveItem = (data = {}) =>
    dispatch({ type: SET_ACTIVE_ITEM, data });

  return (
    <Context.Provider
      value={{
        ...state,
        createGroup,
        createFile,
        changeMode,
        deleteFile,
        deleteGroup,
        updateFile,
        openModal,
        closeModal,
        setActiveItem,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

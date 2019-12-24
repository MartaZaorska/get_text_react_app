export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_FILE = "CREATE_FILE";
export const CHANGE_MODE = "CHANGE_MODE";
export const DELETE_FILE = "DELETE_FILE";
export const DELETE_GROUP = "DELETE_GROUP";
export const UPDATE_FILE = "UPDATE_FILE";

const createFileReducer = (state, file) => {
  const updatedState = {
    ...state,
    files: [...state.files, { ...file }]
  };

  const indexGroup = updatedState.groups.findIndex(
    group => group.id === file.group
  );

  updatedState.groups[indexGroup].files.push(file.id);
  updatedState.groups[indexGroup].updatedAt = file.createdAt;

  return updatedState;
};

const deleteGroupReducer = (state, groupID) => {
  const indexGroup = state.groups.findIndex(item => item.id === groupID);
  const updatedFiles = [...state.files];
  state.groups[indexGroup].files.forEach(file => {
    const fileIndex = updatedFiles.findIndex(item => item.id === file.id);
    updatedFiles.splice(fileIndex, 1);
  });
  return {
    ...state,
    groups: state.groups.filter(item => item.id !== groupID),
    files: [...updatedFiles]
  };
};

const deleteFileReducer = (state, fileID) => {
  const updatedGroups = [...state.groups];
  const updatedFiles = [...state.files];
  const fileIndex = updatedFiles.findIndex(item => item.id === fileID);
  const groupIndex = updatedGroups.findIndex(
    item => item.id === updatedFiles[fileIndex].group
  );
  const fileIndexInGroup = updatedGroups[groupIndex].files.findIndex(
    item => item.id === fileID
  );
  const now = new Date().getTime();
  updatedGroups[groupIndex].files.splice(fileIndexInGroup, 1);
  updatedGroups[groupIndex].updatedAt = now;
  updatedFiles.splice(fileIndex, 1);
  return {
    ...state,
    groups: [...updatedGroups],
    files: [...updatedFiles]
  };
};

const updateFileReducer = (state, file) => {
  const fileIndex = state.files.findIndex(item => item.id === file.id);
  const groupIndex = state.groups.findIndex(item => item.id === file.group);
  const updatedFiles = [...state.files];
  const updatedGroups = [...state.groups];
  updatedFiles[fileIndex] = { ...file };
  updatedGroups[groupIndex].updatedAt = file.updatedAt;
  return {
    ...state,
    files: updatedFiles,
    groups: updatedGroups
  };
};

export const textReducer = (state, action) => {
  switch (action.type) {
    case CREATE_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.group]
      };
    case CREATE_FILE:
      return createFileReducer(state, action.file);
    case DELETE_GROUP:
      return deleteGroupReducer(state, action.groupID);
    case DELETE_FILE:
      return deleteFileReducer(state, action.fileID);
    case UPDATE_FILE:
      return updateFileReducer(state, action.file);
    case CHANGE_MODE:
      return {
        ...state,
        lightMode: action.lightMode
      };
    default:
      return state;
  }
};

/*
groups [{
  id, name, createdAt, updatedAt, files: [fileId, fileId]
}];

files [{
  id, title, text, createdAt, updatedAt, group: groupId
}]
*/

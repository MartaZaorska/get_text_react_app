export const CREATE_GROUP = "CREATE_GROUP";
export const CREATE_FILE = "CREATE_FILE";

const createFileReducer = (state, file) => {
  //id, title, text, createdAt, updatedAt, createdWith: [fileId, fileId], shareWith: [fileId, fileId], group: groupId
  const updatedState = {
    groups: [...state.groups],
    files: [...state.files, file]
  };

  if (file.group.length !== 0) {
    const indexGroup = updatedState.groups.findIndex(
      group => group.id === file.group
    );
    updatedState.groups[indexGroup].files.push(file.id);
    updatedState.groups[indexGroup].updatedAt = file.createdAt;
  }

  return updatedState;
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
    default:
      return state;
  }
};

/*
groups [{
  id, name, createdAt, updatedAt, files: [fileId, fileId]
}];

files [{
  id, title, text, createdAt, updatedAt, createdWith: [fileId, fileId], shareWith: [fileId, fileId], group: groupId
}]
*/

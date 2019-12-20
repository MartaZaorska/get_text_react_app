import React from "react";

export default React.createContext({
  modalOpen: false,
  modalContent: "groups",
  openModal: () => {},
  closeModal: () => {}
});

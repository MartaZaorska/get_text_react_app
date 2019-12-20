import React from "react";
import classNames from "classnames";

import GroupModal from "./GroupModal";
import FileModal from "./FileModal";

function Modal({ closeModal, modalContent, lightMode }) {
  const close = e => {
    if (e.target.classList.contains("modal")) closeModal();
  };

  return (
    <section
      onClick={close}
      className={classNames({ modal: true, "modal--dark": !lightMode })}
    >
      {modalContent === "groups" ? <GroupModal /> : <FileModal />}
    </section>
  );
}

export default Modal;

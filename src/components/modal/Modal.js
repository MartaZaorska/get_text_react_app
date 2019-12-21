import React, { useContext } from "react";
import classNames from "classnames";

import TextContext from "../../context/textContext";
import ModalContext from "../../context/modalContext";

import GroupModal from "./GroupModal";
import FileModal from "./FileModal";

function Modal({ lightMode }) {
  const textContext = useContext(TextContext);
  const modalContext = useContext(ModalContext);

  const close = e => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    )
      modalContext.closeModal();
  };

  return (
    <section
      onClick={close}
      className={classNames({ modal: true, "modal--dark": !lightMode })}
    >
      <i className="modal__close fas fa-arrow-left"></i>
      {modalContext.modalContent === "groups" ? (
        <GroupModal
          createGroup={textContext.createGroup}
          closeModal={modalContext.closeModal}
        />
      ) : (
        <FileModal
          groups={textContext.groups}
          createFile={textContext.createFile}
          closeModal={modalContext.closeModal}
          activeGroup={modalContext.activeGroup}
        />
      )}
    </section>
  );
}

export default Modal;

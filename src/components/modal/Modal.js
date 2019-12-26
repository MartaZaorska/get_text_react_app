import React, { useContext } from "react";
import classNames from "classnames";

import TextContext from "../../context/textContext";
import ModalContext from "../../context/modalContext";

import GroupModal from "./GroupModal";
import FileModal from "./FileModal";

import useAnimationSection from "../../hooks/useAnimationSection";

function Modal() {
  const textContext = useContext(TextContext);
  const modalContext = useContext(ModalContext);

  useAnimationSection("modal");

  const close = e => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    )
      modalContext.closeModal();
  };

  const showAlert = alert => {
    const alertElement = document.createElement("span");
    const alertsContainer = document.querySelector(".alerts");
    alertElement.classList.add("alert_item");
    alertElement.textContent = alert;
    alertsContainer.appendChild(alertElement);
    setTimeout(() => alertsContainer.removeChild(alertElement), 3000);
  };

  return (
    <React.Fragment>
      <section
        onClick={close}
        className={classNames({
          modal: true,
          "modal--dark": !textContext.lightMode
        })}
      >
        <section className="alerts"></section>
        <i className="modal__close fas fa-arrow-left"></i>
        {modalContext.modalContent === "groups" ? (
          <GroupModal
            createGroup={textContext.createGroup}
            closeModal={modalContext.closeModal}
            showAlert={showAlert}
          />
        ) : (
          <FileModal
            groups={textContext.groups}
            createFile={textContext.createFile}
            closeModal={modalContext.closeModal}
            activeGroup={modalContext.activeGroup}
            showAlert={showAlert}
          />
        )}
      </section>
    </React.Fragment>
  );
}

export default Modal;

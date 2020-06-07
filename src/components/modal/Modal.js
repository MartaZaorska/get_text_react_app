import React, { useContext, useState, useEffect } from "react";
import classNames from "classnames";

import Context from "../../context/context";

import GroupModal from "./GroupModal";
import FileModal from "./FileModal";

import useAnimationSection from "../../hooks/useAnimationSection";

function Modal() {
  const [alert, setAlert] = useState("");
  const context = useContext(Context);

  useEffect(() => {
    if (alert.length > 0) {
      const alertItem = document.querySelector(".alert_item");
      alertItem.innerText = alert;
      alertItem.classList.add("alert_item--active");
      setTimeout(() => {
        setAlert("");
        alertItem.classList.remove("alert_item--active");
      }, 3000);
    }
  }, [alert]);

  useAnimationSection("modal");

  const close = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    )
      context.closeModal();
  };

  return (
    <React.Fragment>
      <section
        onClick={close}
        className={classNames({
          modal: true,
          "modal--dark": !context.lightMode,
        })}
      >
        <section className="alerts">
          <span className="alert_item"></span>
        </section>
        <i className="modal__close fas fa-arrow-left"></i>
        {context.modal.content === "groups" ? (
          <GroupModal setAlert={setAlert} />
        ) : (
          <FileModal setAlert={setAlert} />
        )}
      </section>
    </React.Fragment>
  );
}

export default Modal;

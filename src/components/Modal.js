import React, { useEffect } from "react";
import classNames from "classnames";

function Modal(props) {
  useEffect(() => {
    const containerElement = document.querySelector(".container");
    if (containerElement) {
      containerElement.classList.add("container--blur");
    }

    return () => {
      containerElement.classList.remove("container--blur");
    };
  }, []);

  const closeModal = e => {
    if (e.target.classList.contains("modal")) {
      props.close();
    }
  };

  return (
    <section
      className={classNames({ modal: true, "modal--dark": !props.lightMode })}
      onClick={closeModal}
    >
      {props.children}
    </section>
  );
}

export default Modal;

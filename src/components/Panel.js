import React, { useContext } from "react";

import TextContext from "../context/textContext";
import ModalContext from "../context/modalContext";

import PanelItem from "./PanelItem";

function Panel({ name }) {
  const textContext = useContext(TextContext);
  const modalContext = useContext(ModalContext);

  return (
    <section className="panel">
      <header className="panel__header">
        <h4 className="panel__title">
          {name === "groups" ? (
            <i className="far fa-folder"></i>
          ) : (
            <i className="far fa-file"></i>
          )}{" "}
          {name}
        </h4>
        <button
          onClick={() => modalContext.openModal(name)}
          className="panel__button"
        >
          <i className="fas fa-plus"></i>
        </button>
      </header>
      {textContext[name].length === 0 ? (
        <p className="panel_empty">empty</p>
      ) : (
        <section className="panel__content">
          {textContext[name]
            .sort((a, b) => b.updatedAt - a.updatedAt)
            .map(item => (
              <PanelItem item={item} key={item.id} />
            ))}
        </section>
      )}
    </section>
  );
}

export default Panel;

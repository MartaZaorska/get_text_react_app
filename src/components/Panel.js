import React, { useContext } from "react";

import TextContext from "../context/textContext";
import ModalContext from "../context/modalContext";

import PanelItem from "./PanelItem";

function Panel({ name, query }) {
  const textContext = useContext(TextContext);
  const modalContext = useContext(ModalContext);

  const openModalWindow = () => {
    name === "files" && textContext.groups.length !== 0
      ? modalContext.openModal("files")
      : modalContext.openModal("groups");
  };

  return (
    <section className={`panel panel--${name}`}>
      <header className="panel__header">
        <h4 className="panel__title">
          {name === "groups" ? (
            <i className="far fa-folder"></i>
          ) : (
            <i className="far fa-file"></i>
          )}{" "}
          {name}
        </h4>
        <button onClick={openModalWindow} className="panel__button">
          <i className="fas fa-plus"></i>
        </button>
      </header>
      {textContext[name].length === 0 ? (
        <p className="panel_empty">empty</p>
      ) : (
        <section className="panel__content">
          {textContext[name]
            .sort((a, b) => b.updatedAt - a.updatedAt)
            .filter(item => (item.name.indexOf(query) < 0 ? false : true))
            .map(item => (
              <PanelItem item={item} key={item.id} />
            ))}
        </section>
      )}
    </section>
  );
}

export default Panel;

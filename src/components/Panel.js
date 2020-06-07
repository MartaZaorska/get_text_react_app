import React, { useContext, useMemo } from "react";

import Context from "../context/context";

import PanelItem from "./PanelItem";

function Panel({ name, query }) {
  const context = useContext(Context);

  const openModalWindow = () => {
    name === "files" && context.groups.length !== 0
      ? context.openModal("files")
      : context.openModal("groups");
  };

  const data = useMemo(() => {
    return context[name]
      .sort((a, b) => b.updatedAt - a.updatedAt)
      .filter((item) =>
        item.name.toLowerCase().indexOf(query) < 0 ? false : true
      );
  }, [name, query, context[name]]);

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
      {context[name].length === 0 ? (
        <p className="panel_empty">empty</p>
      ) : (
        <section className="panel__content">
          {data.map((item) => (
            <PanelItem item={item} key={item.id} />
          ))}
        </section>
      )}
    </section>
  );
}

export default Panel;

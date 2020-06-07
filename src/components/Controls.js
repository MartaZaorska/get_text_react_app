import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../context/context";

function Controls({ typeContent }) {
  const context = useContext(Context);

  const deleteItem = (type, id) => {
    context[`delete${type}`](id);
    context.setActiveItem();
  };

  const { id } = context.activeItem;

  return (
    <section className="data_item__controls">
      {typeContent === "File" ? null : (
        <button
          className="data_item__button"
          onClick={() => context.openModal("files", id)}
        >
          <i className="fas fa-plus"></i>
        </button>
      )}
      {typeContent === "File" ? (
        <Link className="data_item__button" to={`/edit/${id}`}>
          <i className="far fa-edit"></i>
        </Link>
      ) : null}
      <button
        onClick={() => deleteItem(typeContent, id)}
        className="data_item__button"
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </section>
  );
}

export default Controls;

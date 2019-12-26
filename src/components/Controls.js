import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ModalContext from "../context/modalContext";

function Controls({ id, typeContent, deleteItem }) {
  const modalContext = useContext(ModalContext);

  return (
    <section className="data_item__controls">
      {typeContent === "File" ? null : (
        <button
          className="data_item__button"
          onClick={() => modalContext.openModal("files", id)}
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
        onClick={() => deleteItem(id, typeContent)}
        className="data_item__button"
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </section>
  );
}

export default Controls;

import React from "react";
import uuid from "uuid";

function GroupModal({ createGroup, closeModal }) {
  const submitHandler = e => {
    e.preventDefault();
    const { name } = e.target.elements;
    if (name.value.length === 0) return;
    createGroup({ name: name.value, id: uuid() });
    e.target.reset();
    closeModal();
  };

  return (
    <section className="modal__content">
      <h3 className="modal__title">Create a new group</h3>
      <form onSubmit={submitHandler} className="modal__form modal__form--group">
        <input
          type="text"
          className="modal__input"
          name="name"
          placeholder="Group name..."
        />
        <button className="modal__button" type="submit">
          Create
        </button>
      </form>
    </section>
  );
}

export default GroupModal;

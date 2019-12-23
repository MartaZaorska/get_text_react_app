import React, { useContext } from "react";

import { getDateString } from "../helpers";

import ActiveContext from "../context/activeContext";
import ModalContext from "../context/modalContext";
import TextContext from "../context/textContext";

import ControlsItem from "./ControlsItem";
import FileContent from "./FileContent";
import GroupContent from "./GroupContent";

function DataItem() {
  const activeContext = useContext(ActiveContext);
  const modalContext = useContext(ModalContext);
  const textContext = useContext(TextContext);

  const deleteItem = (id, type) => {
    textContext[`delete${type}`](id);
    activeContext.setActiveItem({});
  };

  if (Object.keys(activeContext.activeItem).length === 0) return null;

  const { name, id, updatedAt, createdAt } = activeContext.activeItem;
  const typeContent = activeContext.activeItem.files ? "Group" : "File";

  return (
    <section className="data_item section__wrapper">
      <button
        onClick={() => activeContext.setActiveItem({})}
        className="data_item__button--back"
      >
        <i className="fas fa-angle-left"></i> Back
      </button>
      <section className="data_item__info">
        <header>
          <h2 className="data_item__title">{name}</h2>
          <p className="data_item__date text--light">
            Created {getDateString(createdAt)}
            <br />
            Last updated {getDateString(updatedAt)}
          </p>
        </header>
        <ControlsItem
          openModal={modalContext.openModal}
          typeContent={typeContent}
          deleteItem={deleteItem}
          id={id}
        />
      </section>
      {typeContent === "File" ? (
        <FileContent text={activeContext.activeItem.text} />
      ) : (
        <GroupContent
          files={activeContext.activeItem.files}
          setActiveItem={activeContext.setActiveItem}
          data={textContext.files}
          id={id}
        />
      )}
    </section>
  );
}

export default DataItem;

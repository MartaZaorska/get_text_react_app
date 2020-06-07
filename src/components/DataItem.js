import React, { useContext, useMemo } from "react";

import { getDateString } from "../helpers";

import Context from "../context/context";

import Controls from "./Controls";
import FileContent from "./FileContent";
import GroupContent from "./GroupContent";

function DataItem() {
  const context = useContext(Context);

  const typeContent = useMemo(() => {
    return context.activeItem.files ? "Group" : "File";
  }, [context.activeItem]);

  const { name, updatedAt, createdAt } = context.activeItem;

  return (
    <section className="data_item section__wrapper">
      <button onClick={() => context.setActiveItem()} className="back__button">
        <i className="fas fa-angle-left"></i> Back
      </button>
      <section className="data_item__header">
        <header>
          <p className="text--light">{typeContent}</p>
          <h2 className="data_item__title">{name}</h2>
          <p className="data_item__date text--light">
            Created {getDateString(createdAt)}
            <br />
            Last updated {getDateString(updatedAt)}
          </p>
        </header>
        <Controls typeContent={typeContent} />
      </section>
      {typeContent === "File" ? (
        <FileContent text={context.activeItem.text} />
      ) : (
        <GroupContent />
      )}
    </section>
  );
}

export default DataItem;

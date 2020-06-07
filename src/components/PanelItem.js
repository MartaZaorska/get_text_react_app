import React, { useContext } from "react";
import classNames from "classnames";

import { getDifferenceDate } from "../helpers";

import Context from "../context/context";

function PanelItem({ item }) {
  const context = useContext(Context);

  return (
    <section
      className={classNames({
        panel_item: true,
        "panel_item--active":
          context.activeItem && context.activeItem.id === item.id,
      })}
      onClick={() => context.setActiveItem({ ...item })}
    >
      <h4 className="panel_item__title">
        {item.name}
        <br />
        {item.files ? (
          <span className="text--light">{item.files.length} files</span>
        ) : null}
      </h4>
      <span className="panel_item__updated">
        {getDifferenceDate(item.updatedAt)}
      </span>
    </section>
  );
}

export default PanelItem;

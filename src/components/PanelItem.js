import React from "react";
import { getDifferenceDate } from "../helpers";

function PanelGroup({ item }) {
  return (
    <section className="panel_item">
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

export default PanelGroup;

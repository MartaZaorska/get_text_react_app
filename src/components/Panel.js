import React, { useContext } from "react";
import textContext from "../context/index";

import PanelItem from "./PanelItem";

function Panel({ name }) {
  const context = useContext(textContext);

  return (
    <section className="panel">
      <h4 className="panel__title">{name}</h4>
      {context[name].length === 0 ? (
        <p className="panel_empty">empty</p>
      ) : (
        <section className="panel__content">
          {context[name].map(item => (
            <PanelItem item={item} key={item.id} />
          ))}
        </section>
      )}
    </section>
  );
}

export default Panel;

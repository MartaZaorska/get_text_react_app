import React from "react";

import Panel from "./Panel";

function DataList() {
  return (
    <section className="data_list">
      <section className="data_list__search">
        <i className="fas fa-search"></i>{" "}
        <input type="text" className="data_list__input" placeholder="Search" />
      </section>
      <section className="data_list__wrapper">
        <Panel name="groups" />
        <Panel name="files" />
      </section>
    </section>
  );
}

export default DataList;

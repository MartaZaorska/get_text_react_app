import React, { useState } from "react";

import Panel from "./Panel";

function DataList() {
  const [query, setQuery] = useState("");

  return (
    <section className="data_list">
      <section className="data_list__search">
        <i className="fas fa-search"></i>{" "}
        <input
          type="text"
          className="data_list__input"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </section>
      <section className="data_list__wrapper">
        <Panel name="groups" query={query} />
        <Panel name="files" query={query} />
      </section>
    </section>
  );
}

export default DataList;

import React, { useState, useEffect } from "react";

import Panel from "./Panel";

function DataList() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const dataListElement = document.querySelector(".data_list");
    if (dataListElement) {
      dataListElement.classList.add("data_list--active");
    }
    return () => {
      dataListElement.classList.remove("data_list--active");
    };
  }, []);

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

import React, { useState } from "react";

import Panel from "./Panel";

import useAnimationSection from '../hooks/useAnimationSection';

function DataList() {
  const [query, setQuery] = useState("");

  useAnimationSection('data_list');

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
        <Panel name="groups" query={query.toLowerCase()} />
        <Panel name="files" query={query.toLowerCase()} />
      </section>
    </section>
  );
}

export default DataList;

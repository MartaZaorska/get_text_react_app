import React from "react";

import DataList from "../components/DataList";
import DataItem from "../components/DataItem";

function Manager() {
  return (
    <section className="section__wrapper manager">
      <DataList />
      <DataItem />
    </section>
  );
}

export default Manager;

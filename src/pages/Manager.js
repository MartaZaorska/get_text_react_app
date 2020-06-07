import React, { useContext, useEffect } from "react";

import DataList from "../components/DataList";
import DataItem from "../components/DataItem";

import Context from "../context/context";

function Manager() {
  const context = useContext(Context);

  useEffect(() => {
    context.setActiveItem();
  }, []);

  return (
    <section className="section__wrapper manager">
      <DataList />
      {Object.keys(context.activeItem).length === 0 ? null : <DataItem />}
    </section>
  );
}

export default Manager;

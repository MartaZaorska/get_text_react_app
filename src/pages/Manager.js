import React, { useState, useEffect } from "react";

import DataList from "../components/DataList";
import DataItem from "../components/DataItem";

import ActiveContext from "../context/activeContext";

function Manager() {
  const [activeItem, setActiveItem] = useState({});

  useEffect(() => {
    setActiveItem({});
  }, []);

  return (
    <ActiveContext.Provider
      value={{
        activeItem,
        setActiveItem
      }}
    >
      <section className="section__wrapper manager">
        <DataList />
        <DataItem />
      </section>
    </ActiveContext.Provider>
  );
}

export default Manager;

import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import Context from "./context/context";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Modal from "./components/modal/Modal";
import Edit from "./pages/Edit";
import Connect from "./pages/Connect";
import Contact from "./pages/Contact";

function App() {
  const context = useContext(Context);

  return (
    <>
      {context.modal.open ? <Modal /> : null}
      <section
        className={classNames({
          container: true,
          "container--dark": !context.lightMode,
          "container--blur": context.modal.open,
        })}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/files" component={Manager} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/connect/:id" component={Connect} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </section>
    </>
  );
}

export default App;

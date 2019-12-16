import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import textContext from "./context/index";

import Navbar from "./components/Navbar";
import FormModal from "./components/FormModal";
import Home from "./pages/Home";
import Manage from "./pages/Manage";

function App() {
  const [formModal, setFormModal] = useState(false);

  const context = useContext(textContext);

  return (
    <React.Fragment>
      {formModal ? <FormModal close={() => setFormModal(false)} /> : null}
      <section
        className={classNames({
          container: true,
          "container--dark": context && !context.lightMode
        })}
      >
        <Navbar
          toggleMode={() => context.changeMode(!context.lightMode)}
          openFormModal={() => setFormModal(true)}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/files" component={Manage} />
        </Switch>
      </section>
    </React.Fragment>
  );
}

export default App;

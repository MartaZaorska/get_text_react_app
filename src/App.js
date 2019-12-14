import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <section className="container container--dark">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </section>
  );
}

export default App;

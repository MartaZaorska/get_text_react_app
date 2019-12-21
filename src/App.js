import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import TextContext from "./context/textContext";
import ModalContext from "./context/modalContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Modal from "./components/modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("groups");
  const [activeGroup, setActiveGroup] = useState("");

  const context = useContext(TextContext);

  const openModal = (typeContent, groupID = "") => {
    setModalContent(typeContent);
    setActiveGroup(groupID);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveGroup("");
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        modalOpen,
        modalContent,
        activeGroup
      }}
    >
      {modalOpen ? <Modal lightMode={context.lightMode} /> : null}
      <section
        className={classNames({
          container: true,
          "container--dark": context && !context.lightMode,
          "container--blur": modalOpen
        })}
      >
        <Navbar
          toggleMode={() => context.changeMode(!context.lightMode)}
          openModal={openModal}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/files" component={Manager} />
        </Switch>
      </section>
    </ModalContext.Provider>
  );
}

export default App;

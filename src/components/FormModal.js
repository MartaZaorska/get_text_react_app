import React, { useContext } from "react";
import textContext from "../context/index";

import Modal from "./Modal";

function FormModal(props) {
  const context = useContext(textContext);

  return (
    <Modal close={props.close} lightMode={context.lightMode}>
      <p>Hello My modal window FORM</p>
    </Modal>
  );
}

export default FormModal;

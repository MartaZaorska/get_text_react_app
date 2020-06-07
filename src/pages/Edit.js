import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../context/context";

import TextEditor from "../components/TextEditor";

function Edit(props) {
  const [text, setText] = useState("");
  const [item, setItem] = useState(undefined);

  const context = useContext(Context);

  useEffect(() => {
    const file = context.files.find(
      (item) => item.id === props.match.params.id
    );
    setItem({ ...file });
    setText(file.text);
  }, [props.match.params.id, context.files]);

  const saveText = () => {
    context.updateFile({ ...item, text });
    props.history.push("/files");
  };

  if (!item) return null;

  return (
    <section className="edit">
      <Link to="/files" className="back__button">
        <i className="fas fa-angle-left"></i> Back
      </Link>
      <button onClick={saveText} className="edit__button">
        Save
      </button>
      <header className="edit__header">
        <p className="text--light">TEXT EDITOR</p>
        <h2 className="edit__title">{item.name}</h2>
      </header>
      <TextEditor text={text} setText={setText} />
    </section>
  );
}

export default Edit;

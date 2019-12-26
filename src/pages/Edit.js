import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import TextContext from "../context/textContext";

import TextEditor from "../components/TextEditor";

function Edit(props) {
  const [text, setText] = useState("");
  const [item, setItem] = useState(undefined);

  const textContext = useContext(TextContext);

  useEffect(() => {
    const fileIndex = textContext.files.findIndex(
      item => item.id === props.match.params.id
    );
    const fileItem = { ...textContext.files[fileIndex] };
    setItem(fileItem);
    setText(fileItem.text);
  }, [props.match.params.id, textContext.files]);

  const saveText = () => {
    textContext.updateFile({ ...item, text });
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

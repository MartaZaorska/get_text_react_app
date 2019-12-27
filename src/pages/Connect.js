import React, { useState, useEffect, useContext } from "react";
import uuid from "uuid";

import TextContext from "../context/textContext";

import FilesList from "../components/FilesList";
import TextEditor from "../components/TextEditor";

function Connect(props) {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Connected file");

  const textContext = useContext(TextContext);

  useEffect(() => {
    const groupID = props.match.params.id;
    const data = [];
    const groupIndex = textContext.groups.findIndex(
      item => item.id === groupID
    );
    textContext.groups[groupIndex].files.forEach(fileID => {
      const fileIndex = textContext.files.findIndex(item => item.id === fileID);
      data.push({ ...textContext.files[fileIndex] });
    });
    setFiles(data);
  }, [props.match.params.id, textContext]);

  const createText = () => {
    const id = uuid();
    textContext.createFile({
      id,
      name: title || "Connected file",
      text,
      group: props.match.params.id
    });
    props.history.push("/files");
  };

  const copyText = () => {
    let allText = "";
    files.forEach(file => (allText += `${file.text}`));
    setText(allText);
  };

  return (
    <section className="connect">
      <section className="new_file">
        <button onClick={createText} className="edit__button">
          Create
        </button>
        <header className="new_file__header">
          <p className="text--light">CONNECT FILES</p>
          <input
            autoFocus={true}
            type="text"
            className="new_file__input"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="File name..."
          />
        </header>
        <TextEditor text={text} setText={setText} />
      </section>
      <FilesList files={files} copyText={copyText} />
    </section>
  );
}

export default Connect;

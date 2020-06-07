import React, { useState, useEffect, useContext } from "react";
import uuid from "uuid";

import Context from "../context/context";

import FilesList from "../components/FilesList";
import TextEditor from "../components/TextEditor";

function Connect(props) {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Connected file");

  const context = useContext(Context);

  useEffect(() => {
    const groupID = props.match.params.id;
    const group = context.groups.find((item) => item.id === groupID);

    const data = [];
    group.files.forEach((fileID) => {
      const file = context.files.find((item) => item.id === fileID);
      data.push({ ...file });
    });

    setFiles(data);
  }, [props.match.params.id, context.groups, context.files]);

  const createFile = () => {
    const id = uuid();
    context.createFile({
      id,
      name: title || "Connected file",
      text,
      group: props.match.params.id,
    });
    props.history.push("/files");
  };

  return (
    <section className="connect">
      <section className="new_file">
        <button onClick={createFile} className="edit__button">
          Create
        </button>
        <header className="new_file__header">
          <p className="text--light">CONNECT FILES</p>
          <input
            autoFocus={true}
            type="text"
            className="new_file__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="File name..."
          />
        </header>
        <TextEditor text={text} setText={setText} />
      </section>
      <FilesList files={files} setText={setText} />
    </section>
  );
}

export default Connect;

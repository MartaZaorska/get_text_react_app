import React, { useState, useEffect, useContext } from "react";
import { createWorker } from "tesseract.js";
import uuid from "uuid";

import { LANGUAGE_LIST } from "../../constants";

import Context from "../../context/context";

import Progress from "./Progress";
import FileInput from "./FileInput";

function FileModal({ setAlert }) {
  const context = useContext(Context);
  const [group, setGroup] = useState(context.modal.activeGroup);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(undefined);
  const [language, setLanguage] = useState("eng");
  const [ocr, setOcr] = useState("");
  const [progress, setProgress] = useState(undefined);

  useEffect(() => {
    if (ocr && typeof ocr === "string") {
      newFile();
    }
  }, [ocr]);

  const worker = createWorker({
    logger: (m) => setProgress(m),
  });

  const newFile = () => {
    context.createFile({ id: uuid(), name: title, group, text: ocr });
    setTitle("");
    setOcr("");
    setProgress(undefined);
    context.closeModal();
  };

  const doOCR = async (image) => {
    await worker.load();
    await worker.loadLanguage(language);
    await worker.initialize(language);
    const {
      data: { text },
    } = await worker.recognize(image);
    setOcr(text);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length === 0 || group.length === 0) {
      setAlert("You must enter a file name and select a group.");
      return;
    }

    image ? doOCR(image) : newFile();
  };

  return (
    <React.Fragment>
      {progress ? <Progress data={progress} /> : null}
      <section className="modal__content">
        <h3 className="modal__title">Create a new file</h3>
        <form onSubmit={submitHandler} className="modal__form">
          <input
            type="text"
            className="modal__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="File name..."
            autoFocus={true}
          />
          <select
            className="modal__select"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="">Select a group</option>
            {context.groups.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <FileInput setImage={setImage} />
          <p className="modal__text">Choose the language of the text</p>
          <select
            className="modal__select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGUAGE_LIST.map((lang) => (
              <option value={lang.abbr} key={lang.abbr}>
                {lang.name}
              </option>
            ))}
          </select>
          <p className="modal__text">
            You can upload a photo from which the text will be read (OCR
            technique) or you can continue without selecting an image and create
            an empty file (add text manually).
          </p>
          <button className="modal__button" type="submit">
            Create
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}

export default React.memo(FileModal);

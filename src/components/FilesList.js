import React from "react";

function FilesList({ files, setText }) {
  const copyText = () => {
    let allText = "";
    files.forEach((file) => (allText += `${file.text}`));
    setText(allText);
  };

  return (
    <section className="files_list">
      <h3 className="files_list__title">Content of files in the group</h3>
      <button className="files_list__button" onClick={copyText}>
        Copy all text
      </button>
      {files.map((file) => (
        <section className="files_list__item" key={file.id}>
          <h4 className="files_list__subtitle">{file.name}</h4>
          {file.text.length === 0 ? (
            <p className="text--light">empty</p>
          ) : (
            <section className="files_list__text">
              {file.text.split("\n").map((txt, index) => (
                <p key={`${parseInt(Math.random() * 1000)}_${index}`}>{txt}</p>
              ))}
            </section>
          )}
        </section>
      ))}
    </section>
  );
}

export default FilesList;

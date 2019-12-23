import React from "react";

function FileContent({ text }) {
  return (
    <section className="file__content">
      <h3 className="file__title">Content</h3>
      {text.length === 0 ? (
        <p className="text--light">empty</p>
      ) : (
        <p className="file__text">{text}</p>
      )}
    </section>
  );
}

export default FileContent;

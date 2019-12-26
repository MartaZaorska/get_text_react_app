import React from "react";

function FileContent({ text }) {
  return (
    <section className="file__content">
      <h3 className="file__title">Content</h3>
      {text.length === 0 ? (
        <p className="text--light">empty</p>
      ) : (
        <section className="file__text">
          {text.split("\n").map((txt, index) => (
            <p key={`${parseInt(Math.random() * 1000)}_${index}`}>{txt}</p>
          ))}
        </section>
      )}
    </section>
  );
}

export default FileContent;

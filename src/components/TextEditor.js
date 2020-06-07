import React from "react";

function TextEditor({ text, setText }) {
  return (
    <section className="text_editor">
      <h4 className="text_editor__title">Content</h4>
      <textarea
        className="text_editor__textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </section>
  );
}

export default TextEditor;

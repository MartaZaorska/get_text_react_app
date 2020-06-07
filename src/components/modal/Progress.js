import React from "react";

function Progress({ data }) {
  return (
    <section className="modal__progress">
      <h1 className="progress__title">{parseInt(data.progress * 100) || 0}%</h1>
      <p className="progress__text">{data.status || ""}</p>
    </section>
  );
}

export default React.memo(Progress);

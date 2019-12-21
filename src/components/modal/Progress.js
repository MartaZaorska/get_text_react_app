import React from "react";

function Progress({ data }) {
  return (
    <section className="modal__progress">
      <p>{data.status || ""}</p>
      <h1>{parseInt(data.progress * 100) || 0}%</h1>
    </section>
  );
}

export default Progress;

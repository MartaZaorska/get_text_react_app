import React, { useContext, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import Context from "../context/context";

function GroupContent() {
  const context = useContext(Context);
  const [width, setWidth] = useState(0);

  const data = useMemo(() => {
    return context.activeItem.files.map((fileID) => {
      const file = context.files.find((item) => item.id === fileID);
      return { ...file };
    });
  }, [context.activeItem, context.files]);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const updateWidth = () =>
    setWidth(document.body.getBoundingClientRect().width);

  return (
    <section className="group__content">
      <h3 className="group__title">Files</h3>
      {context.activeItem.files.length === 0 ? (
        <p className="group__text text--light">empty</p>
      ) : (
        <React.Fragment>
          <section className="group_list">
            {data.map((file) => (
              <button
                key={file.id}
                className="group_list__button"
                onClick={() => context.setActiveItem({ ...file })}
              >
                <span>{file.name}</span>
              </button>
            ))}
          </section>
          {width >= 768 ? (
            <React.Fragment>
              <p className="group__text">
                You can combine all files in this group into one separate file.
                Click the link below and go to edit file linking.
              </p>
              <Link
                to={`/connect/${context.activeItem.id}`}
                className="group__link"
              >
                Connect
              </Link>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )}
    </section>
  );
}

export default GroupContent;

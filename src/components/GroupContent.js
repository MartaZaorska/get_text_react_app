import React from "react";

import { Link } from "react-router-dom";

function GroupContent({ files, setActiveItem, id, data }) {
  const width = document.body.getBoundingClientRect().width;

  return (
    <section className="group__content">
      <h3 className="group__title">Files</h3>
      {files.length === 0 ? (
        <p className="group__text text--light">empty</p>
      ) : (
        <React.Fragment>
          <section className="group_list">
            {files.map(fileID => {
              const fileIndex = data.findIndex(item => item.id === fileID);
              return (
                <button
                  key={fileID}
                  className="group_list__button"
                  onClick={() => setActiveItem({ ...data[fileIndex] })}
                >
                  <span>{data[fileIndex].name}</span>
                </button>
              );
            })}
          </section>
          {width >= 768 ? (
            <React.Fragment>
              <p className="group__text">
                You can combine all files in this group into one separate file.
                Click the link below and go to edit file linking.
              </p>
              <Link to={`/connect/${id}`} className="group__link">
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

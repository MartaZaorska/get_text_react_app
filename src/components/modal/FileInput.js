import React, { useState } from "react";

function FileInput({ setImage }) {
  const [file, setFile] = useState(undefined);

  const fileHandler = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      let reader = new FileReader();
      let uploadFile = e.target.files[0];

      reader.onloadend = () => {
        setFile(uploadFile);
        setImage(reader.result);
      };

      if (uploadFile.type.indexOf("image") >= 0) {
        reader.readAsDataURL(uploadFile);
      } else {
        setImage(undefined);
        setFile(undefined);
        window.alert("You must upload image");
      }
    } else {
      setImage(undefined);
      setFile(undefined);
    }
  };

  return (
    <label className="modal__file">
      <input type="file" name="image" onChange={fileHandler} />
      {file && file.name ? `${file.name}` : "Select image"}
    </label>
  );
}

export default FileInput;

import React, { useState } from "react";
import "./Error.css";

const Error = (props) => {
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(false);
    props.hasErrorHandler();
  };

  console.log(props.err);
  const res = showModal ? (
    <div onClick={handleModal} className="Error" id="error">
      <div className="close">
        <p>x</p>
      </div>
      <div className="textarea">{props.err}</div>
    </div>
  ) : null;
  return res;
};

export default Error;

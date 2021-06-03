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
      <h1 style={{ margin: "0", padding: "10px 0", color:'red', textAlign:'center' }}>OOPS! There is an Error</h1>
      <div className="textarea">{props.err}</div>
    </div>
  ) : null;
  return res;
};

export default Error;

import React from "react";
import ResultItem from "./ResultItem/ResultItem";
import "./Result.css";

function Result(props) {
  const list = Array.from(props.result).map((item) => (
    <ResultItem details={item} />
  ));

  return (
    <div className="resultContainer">
      <ul className="headList">
        <li className="list-item">CustomerID</li>
        <li className="list-item">Name</li>
        <li className="list-item">Company </li>
        <li className="list-item">Country</li>
        <li className="list-item">Phone</li>
      </ul>
      <div className="list-container">{list}</div>
    </div>
  );
}

export default Result;

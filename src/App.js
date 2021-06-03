import React, { useState, useEffect } from "react";
import Editor from "./Components/Editor/Editor";
import Nav from "./Components/Nav/Nav";
import Result from "./Components/queryResult/Result";
import "./App.css";
import Loader from "./Util/Loader/Loader";
import Page from "./Components/RulePage/Page";
import alasql from "alasql";
import Error from "./Components/Error/Error";

const App = () => {
  const [query, setquery] = useState(
    "SELECT * FROM CSV(?, {headers: true, separator:','})"
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (data && !hasError) {
      console.log(query);
      alasql
        .promise(query, [data])
        .then(function (data) {
          setData(null);
          console.log(data);
          setResult(data);
        })
        .catch((e) => {
          console.log(e);
          setErr("Syntax Error!");
          setHasError(true);
        });
    }
  });

  const handleQuery = (e) => {
    console.log(e);
    setquery(e);
  };

  const hasErrorHandler = () => {
    setHasError(false);
    setErr(null);
    setData(null);
    setquery("SELECT * FROM CSV(?, {headers: true, separator:','})");
  };

  const onSubmit = () => {
    // we can connect query to backend here!
    // query has been updated to state
    //showing dummy data due to lack of backend
    setResult(null);
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/customers.csv"
    )
      .then((res) => res.text())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setErr("Api could'nt be fetched!");
        setHasError(true);
      });
  };

  function download() {
    let downloadResults = [];
    downloadResults.push(Object.keys(result[0]).join(", "));
    for (let res of result) {
      downloadResults.push(Object.values(res).join(", "));
    }

    let blob = new Blob([downloadResults.join("\n")], { type: "text/csv" });
    let href = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.setAttribute("href", href);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link);
    link.click();
  }

  return (
    <>
      {hasError ? (
        <Error
          hasError={hasError}
          hasErrorHandler={hasErrorHandler}
          err={err}
        />
      ) : null}

      <Nav download={download} />
      <div style={{ display: "flex" }}>
        <div style={{ height: "90vh", background: "#2C2828" }}>
          <Editor query={query} handleQuery={handleQuery} />
          <div className="tile2">
            <button onClick={onSubmit} className="btn">
              Run
            </button>
            {loading ? <Loader /> : null}
          </div>
          <p
            style={{
              marginLeft: "20px",
              fontSize: "10px",
              fontStyle: "italic",
              color: "white",
            }}
          >
            *Dummy csv file is used to fetch data.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50vw",
            background: "#1b1a17",
          }}
        >
          {loading ? (
            <Loader />
          ) : result ? (
            <Result result={result} />
          ) : (
            <Page />
          )}
        </div>
      </div>
    </>
  );
};
export default App;

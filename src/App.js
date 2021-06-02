import React, { useState, useEffect } from "react";
import Editor from "./Components/Editor/Editor";
import Nav from "./Components/Nav/Nav";
import Result from "./Components/queryResult/Result";
import "./App.css";
import Loader from "./Util/Loader/Loader";
import Page from "./Components/RulePage/Page";
import alasql from "alasql";

const App = () => {
  const [query, setquery] = useState(
    "SELECT * FROM CSV(?, {headers: true, separator:','})"
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);
  const [err,setErr] = useState(null)

  useEffect(() => {
    if (data) {
      alasql.promise(query, [data]).then(function (data) {
        setData(null);
        setResult(data);
      }).catch((e)=>{
        console.log(e)
        setErr(e)
      })
    }
  });

  const handleQuery = (e) => {
    setquery(e);
  };

  const onSubmit = () => {
    // we can connect query to backend here!
    // query has been updated to state
    //showing dummy data due to lack of backend

    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/customers.csv"
    )
      .then((res) => res.text())
      .then((data) => {
        setData(data);
        setLoading(false);
      }).catch((e)=>{
        console.log(e)
        setErr(e)
      });
  };

  return (
    <>
      <Nav />
      <div style={{ display: "flex" }}>
        <div>
          <Editor query={query} handleQuery={handleQuery} />
          <div className="tile2">
            <button onClick={onSubmit} className="btn">
              Run
            </button>
            {loading ? <Loader /> : null}
            
          </div>
          <p style={{marginLeft:'20px',fontSize:'10px', fontStyle:'italic'}}>*Dummy csv file is used to fetch data.</p>
        </div>
        <div style={{display:"flex",justifyContent:'center',alignItems:'center', width:'50vw'}}>
            {loading ? <Loader /> : result ? <Result result={result} /> : <Page />}

        </div>
      </div>
    </>
  );
};
export default App;

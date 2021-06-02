import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-pastel_on_dark";

const Editor = (props) => {
  return (
    <AceEditor
      mode="sql"
      theme="pastel_on_dark"
      onChange={(e) => props.handleQuery(e)}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      style={{ height: "75vh", width: "50vw" }}
      setOptions={{
        showLineNumbers: true,
        wrap: true,
        hScrollBarAlwaysVisible: false,
        vScrollBarAlwaysVisible: false,
        tabSize: 2,
        cursorStyle: "smooth",
      }}
      fontSize="16px"
      value={props.query}
      // defaultValue="`SELECT * FROM CSV(?, {headers: true, separator:","})`"
      placeholder="Enter your queries here"
    />
  );
};

export default Editor;

import React, { useState } from "react";
import styled from "styled-components";
import Tree from "./components/Tree";
import { treeData } from "./data/input1";

const Container = styled.div`
  padding: 5px;
`;
const Button = styled.button`
  display: block;
`;

function App() {
  const [textJson, setTextJson] = useState(JSON.stringify(treeData));
  const [inputJson, setInputJson] = useState("");
  // const [outPutJson, setOutputJson] = useState();
  return (
    <Container>
      <textarea
        value={textJson}
        onChange={(e) => setTextJson(e.target.value)}
        style={{ width: "800px", height: "200px" }}
      />
      <Button
        onClick={(e) => setInputJson(JSON.parse(textJson))}
        disabled={!textJson}
      >
        Generate Data Tree
      </Button>
      {/* <textarea
        value={JSON.stringfy(outPutJson)} //TODO: write a function to convert json to an object for storing state
        style={{ width: "800px", height: "200px" }}
      /> */}
      <div>
        <h1>DataInputTree</h1>
        <Tree data={inputJson} />
      </div>
    </Container>
  );
}

export default App;

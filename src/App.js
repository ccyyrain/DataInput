import React, { useState } from "react";
import styled from "styled-components";
import Tree from "./components/Tree";
import { treeData } from "./data/input1";
import { convertObjToState } from "./utils/common-utils";
import { useSelector, useDispatch } from "react-redux";
import { setComponentValues } from "./redux/appSlice";

const Container = styled.div`
  padding: 5px;
`;
const Button = styled.button`
  display: block;
`;

function App() {
  const [textJson, setTextJson] = useState(JSON.stringify(treeData));
  const [inputJson, setInputJson] = useState("");
  const dispatch = useDispatch();
  const { componentValues } = useSelector((state) => state.app);

  return (
    <Container>
      <textarea
        value={textJson}
        onChange={(e) => setTextJson(e.target.value)}
        style={{ width: "800px", height: "200px" }}
      />
      <Button
        onClick={(e) => {
          setInputJson(JSON.parse(textJson));
          let copyJson = JSON.parse(textJson);
          dispatch(setComponentValues(convertObjToState(copyJson)));
        }}
        disabled={!textJson}
      >
        Generate Data Tree
      </Button>
      <div>
        <h1>DataInputTree</h1>
        <Tree data={inputJson} />
      </div>
      <div>
        <h1>Data Output</h1>
        <textarea
          readOnly
          value={JSON.stringify(componentValues)}
          style={{ width: "800px", height: "200px" }}
        />
      </div>
    </Container>
  );
}

export default App;

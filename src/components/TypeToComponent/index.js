import React, { useState } from "react";
import styled from "styled-components";
const LineItem = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LineLabel = styled.div`
  text-transform: capitalize;
`;
const LineContent = styled.div`
  width: 500px;
  margin-left: auto;
  > input {
    width: 96%;
  }
  > select {
    width: 96%;
  }
`;

const TypeContent = ({ node, index }) => {
  if (node === "string") return <input id={index} type="text" />;
  else if (node === "number") return <input id={index} type="number" />;
  else if (node === "bollean")
    return <input id={index} type="checkbox" style={{ width: "auto" }} />;
  else if (Array.isArray(node) === true)
    return (
      <select id={index}>
        {node.map((itm) => (
          <option value={itm} key={itm}>
            {itm}
          </option>
        ))}
      </select>
    );
  else return null;
};

const TypeToComponent = ({ node, label, index }) => {
  return (
    <LineItem index={index}>
      <LineLabel>{label}</LineLabel>
      <LineContent>
        <TypeContent {...{ node, index }}></TypeContent>
      </LineContent>
    </LineItem>
  );
};

export default TypeToComponent;

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

const TypeToComponent = ({ node, label, index }) => {
  const TypeContent = ({ node, index }) => {
    switch (node) {
      case "string":
        return <input id={index} type="text" />;
      case "number":
        return <input id={index} type="number" />;
      case "boolean":
        return <input id={index} type="checkbox" style={{ width: "auto" }} />;
      case Array.isArray(node):
        return (
          <select id={index}>
            {node.map((itm) => (
              <option value={itm} key={itm}>
                {itm}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

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

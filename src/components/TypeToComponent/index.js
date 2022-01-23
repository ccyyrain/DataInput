import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setComponentValues } from "../../redux/appSlice";
import { setAttributeFromPath } from "../../utils/common-utils";

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
  const { componentValues } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const {
      target,
      target: { type, id },
    } = e;
    const value = type === "checkbox" ? target.checked : target.value;
    const arr = id.split("#");
    let copyStates = JSON.parse(JSON.stringify(componentValues));
    setAttributeFromPath(arr, copyStates, value);
    dispatch(setComponentValues(copyStates));
  };

  if (node === "string")
    return <input id={index} onChange={(e) => handleOnChange(e)} type="text" />;
  else if (node === "number")
    return (
      <input id={index} onChange={(e) => handleOnChange(e)} type="number" />
    );
  else if (node === "boolean")
    return (
      <input
        id={index}
        type="checkbox"
        style={{ width: "auto" }}
        onChange={(e) => handleOnChange(e)}
      />
    );
  else if (Array.isArray(node) === true)
    return (
      <select id={index} onChange={(e) => handleOnChange(e)}>
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

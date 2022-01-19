import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import TypeToComponent from "../TypeToComponent";

const TreeContainer = styled.div`
  line-height: 30px;
`;
const TreeList = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`;
const TreeNodeLi = styled.li`
  // display: flex;
  border-left: 0.1rem solid;
`;

const RowItem = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  background-color: #f5f5f5;
  text-transform: capitalize;
`;

const Caret = styled.div`
  ${(props) => {
    if (props.active) {
      return `
    transform: rotate(90deg) !important;
    `;
    }
  }}
`;

const Tree = ({ data = {}, index = "" }) => {
  return (
    <TreeContainer>
      <TreeList>
        {Object.keys(data).map((itm) => (
          <TreeNode
            label={itm}
            node={data[itm]}
            key={index + `.${itm}`}
            index={index ? index + `.${itm}` : `${itm}`}
          />
        ))}
      </TreeList>
    </TreeContainer>
  );
};

const TreeNode = ({ label, node, index }) => {
  const [childVisible, setChildVisiblity] = useState(true);
  const hasChild = typeof node === "object" && !Array.isArray(node);
  if (hasChild) {
    return (
      <TreeNodeLi>
        <RowItem onClick={(e) => setChildVisiblity((v) => !v)}>
          <Caret active={childVisible}>
            <FontAwesomeIcon icon="caret-right" />
          </Caret>
          <div style={{ paddingLeft: "15px" }}>{label}</div>
        </RowItem>
        {childVisible && (
          <TreeList>
            <Tree data={node} index={index} />
          </TreeList>
        )}
      </TreeNodeLi>
    );
  } else {
    return <TypeToComponent {...{ label, node, index }} />;
  }
};

export default Tree;

import styled from "styled-components";

export const TagButton = styled.button`
  background-color: ${(props) => (props.bgColor ? "#f3aa4e" : "transparent")};
  outline: none;
  border: 1px solid #f3aa4e;
  color: white;
  border-radius: 10px;
  margin-left: 10px;
  font-size: 12px;
  padding: 3px 10px 3px 10px;
`;

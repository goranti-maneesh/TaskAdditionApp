import styled from "styled-components";

export const DisplayTaskComponentContainer = styled.div`
  height: 70%;
`;

export const TagsAndTasksTitle = styled.h1`
  color: white;
  font-family: Roboto;
  font-size: 15px;
`;

export const TagsUlEle = styled.ul`
  list-style-type: none;
  color: white;
  display: flex;
  padding-left: 0px;
`;

export const TasksUlEle = styled.ul`
  list-style-type: none;
  color: white;
  padding-left: 0px;
`;

export const NoTasksTitle = styled.h1`
  color: #d5dde8;
  font-size: 20px;
`;

export const NoTasksTitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

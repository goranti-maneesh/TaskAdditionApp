import styled from "styled-components";

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Roboto";
  height: 100vh;
`;

export const CreateTaskContainer = styled.div`
  background-color: #131213;
  width: 40%;
  padding: 20px;
`;

export const CreateTaskTitle = styled.h1`
  font-family: "Roboto";
  color: #f3aa4e;
  text-align: center;
`;

export const EachInputFeildContainer = styled.div`
  margin-top: 30px;
`;

export const AddTaskBtnContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const AddTaskBtn = styled.button`
  width: 150px;
  height: 35px;
  color: white;
  font-weight: bold;
  outline: none;
  border: 0px;
  border-radius: 5px;
  background-color: #f3aa4e;
  cursor: pointer;
`;

export const LabelEle = styled.label`
  font-family: "Roboto";
  color: white;
  padding-bottom: 20px;
`;

export const InputEle = styled.input`
  width: 97%;
  outline: none;
  border: 0px;
  padding: 8px;
  margin-top: 5px;
`;

export const SelectEle = styled.select`
  width: 100%;
  outline: none;
  border: 0px;
  padding: 8px;
  margin-top: 5px;
`;

export const DisplayTaskContainer = styled.div`
  width: 70%;
  background-color: #000000;
  padding: 40px 20px 20px 20px;
`;

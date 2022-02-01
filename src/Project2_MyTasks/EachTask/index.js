import { observer } from "mobx-react";
import { EachTaskContainer, TaskName, SpanElement } from "./styledComponents";

const EachTask = (props) => {
  const {
    eachTask: { newTaskname, newTagname },
  } = props;
  return (
    <EachTaskContainer>
      <TaskName>{newTaskname}</TaskName>
      <SpanElement>{newTagname}</SpanElement>
    </EachTaskContainer>
  );
};

export default observer(EachTask);

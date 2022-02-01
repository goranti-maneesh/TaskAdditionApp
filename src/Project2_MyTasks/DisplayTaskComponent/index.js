import { observer } from "mobx-react";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import EachTag from "../EachTag/index";
import EachTask from "../EachTask/index";

import {
  TagsAndTasksTitle,
  TagsUlEle,
  TasksUlEle,
  NoTasksTitle,
  NoTasksTitleContainer,
  DisplayTaskComponentContainer,
} from "./styledComponents";

class DisplayTaskComponent extends Component {
  changeCategoryTag = (categoty) => {
    const { changeCategory } = this.props;
    changeCategory(categoty);
  };
  render() {
    const { tagsList, tasksArray, categorySelected, specifiedTasks, tagId } =
      this.props;
    const TasksList = categorySelected ? specifiedTasks : tasksArray;
    console.log(TasksList.length, 123);
    return (
      <DisplayTaskComponentContainer>
        <TagsAndTasksTitle>Tags</TagsAndTasksTitle>
        <TagsUlEle>
          {tagsList.map((eachTag) => (
            <li key={eachTag.optionId}>
              <EachTag
                eachTag={eachTag}
                changeCategory={this.changeCategoryTag}
                categorySelected={categorySelected}
                tagId={tagId}
              />
            </li>
          ))}
        </TagsUlEle>
        <TagsAndTasksTitle>Tasks</TagsAndTasksTitle>
        {TasksList.length === 0 ? (
          <NoTasksTitleContainer>
            <NoTasksTitle>No Tasks Added Yet</NoTasksTitle>
          </NoTasksTitleContainer>
        ) : null}
        <TasksUlEle>
          {TasksList.map((eachTask) => (
            <li key={uuidv4()}>
              <EachTask eachTask={eachTask} />
            </li>
          ))}
        </TasksUlEle>
      </DisplayTaskComponentContainer>
    );
  }
}

export default observer(DisplayTaskComponent);

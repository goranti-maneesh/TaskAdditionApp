import { Component } from "react";
import { observable, makeObservable, action } from "mobx";
import { observer } from "mobx-react";
import DisplayTaskComponent from "../DisplayTaskComponent/index";
import {
  BgContainer,
  CreateTaskContainer,
  CreateTaskTitle,
  EachInputFeildContainer,
  LabelEle,
  InputEle,
  SelectEle,
  DisplayTaskContainer,
  AddTaskBtnContainer,
  AddTaskBtn,
} from "./styledComponents";

//NOTE: can be kept in separate file
const tagsList = [
  {
    optionId: "HEALTH",
    displayText: "Health",
  },
  {
    optionId: "EDUCATION",
    displayText: "Education",
  },
  {
    optionId: "ENTERTAINMENT",
    displayText: "Entertainment",
  },
  {
    optionId: "SPORTS",
    displayText: "Sports",
  },
  {
    optionId: "TRAVEL",
    displayText: "Travel",
  },
  {
    optionId: "OTHERS",
    displayText: "Others",
  },
];

class CreateTaskComponent extends Component {
  tasksArray = [];
  categorySelected = false;
  specifiedTasks = [];
  taskName = "";
  tagId = ""; //assign values in constructor
  tagName = tagsList[0].displayText;

  constructor() {
    super();
    makeObservable(this, {
      tasksArray: observable,
      categorySelected: observable,
      specifiedTasks: observable,
      taskName: observable,
      tagId: observable,
      tagName: observable,
      onchangeTaskName: action,
      onchangeTagName: action,
      addTask: action,
      changeCategory: action,
    });
  }

  onchangeTaskName = (event) => {
    this.taskName = event.target.value;
  };

  onchangeTagName = (event) => {
    this.tagName = event.target.value;
  };

  addTask = (event) => {
    event.preventDefault();
    if (this.taskName === "") {
      return alert("Please enter task name");
    }
    const eachTask = {
      newTaskname: this.taskName,
      newTagname: this.tagName,
    };
    this.tasksArray.push(eachTask);
    this.taskName = "";
  };

  changeCategory = (eachTag) => {
    console.log(
      this.categorySelected,
      eachTag,
      this.tagId,
      "category and tagid"
    );
    if (
      this.categorySelected === false ||
      (this.categorySelected && eachTag.optionId !== this.tagId)
    ) {
      this.tagId = eachTag.optionId;
      this.categorySelected = true;
      this.specifiedTasks = this.tasksArray.filter(
        (eachTask) => eachTask.newTagname === eachTag.displayText
      );
    } else {
      this.categorySelected = false;
      this.tagId = "";
    }
  };

  render() {
    return (
      <BgContainer>
        <CreateTaskContainer>
          <form onSubmit={this.addTask}>
            <CreateTaskTitle>Create a task!</CreateTaskTitle>
            <EachInputFeildContainer>
              <LabelEle htmlFor="task">Task</LabelEle>
              <br />
              <InputEle
                type="text"
                id="task"
                onChange={this.onchangeTaskName}
                placeholder="Enter a task here"
                value={this.taskName}
              />
            </EachInputFeildContainer>
            <EachInputFeildContainer>
              <LabelEle htmlFor="tag">Tags</LabelEle>
              <br />
              <SelectEle id="tag" onChange={this.onchangeTagName}>
                {tagsList.map((eachTag) => (
                  <option key={eachTag.optionId}>{eachTag.displayText}</option>
                ))}
              </SelectEle>
            </EachInputFeildContainer>
            <AddTaskBtnContainer>
              <AddTaskBtn>Add Task</AddTaskBtn>
            </AddTaskBtnContainer>
          </form>
        </CreateTaskContainer>
        <DisplayTaskContainer>
          <DisplayTaskComponent
            tagsList={tagsList}
            tasksArray={this.tasksArray}
            specifiedTasks={this.specifiedTasks}
            changeCategory={this.changeCategory}
            categorySelected={this.categorySelected}
            tagId={this.tagId}
          />
        </DisplayTaskContainer>
      </BgContainer>
    );
  }
}

export default observer(CreateTaskComponent);

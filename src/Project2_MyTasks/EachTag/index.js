import { observer } from "mobx-react";
import { Component } from "react";
import { TagButton } from "./styledComponents";

class EachTag extends Component {
  changeCategoryTag = () => {
    const { eachTag, changeCategory } = this.props;
    changeCategory(eachTag);
  };

  render() {
    const {
      eachTag: { displayText, optionId },
      // categorySelected,
      tagId,
    } = this.props;
    // console.log(tagId, optionId, "tagid");
    return (
      <div>
        <TagButton
          key={optionId}
          onClick={this.changeCategoryTag}
          bgColor={tagId === optionId}
        >
          {displayText}
        </TagButton>
      </div>
    );
  }
}

export default observer(EachTag);

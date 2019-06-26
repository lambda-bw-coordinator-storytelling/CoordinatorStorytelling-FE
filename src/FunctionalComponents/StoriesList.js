import React from "react";
import Story from "./Story";

const StoriesList = props => {
  let filteredList = [];

  // if (props.country === "all") {
  //   filteredList = props.stories;
  // } else {
  //   filteredList = props.stories.filter(
  //     story => story.country === props.country
  //   );
  // }

  props.country === "all"
    ? (filteredList = props.stories)
    : (filteredList = props.stories.filter(
        story => story.country === props.country
      ));

  return (
    <>
      <div className="story-cards-container">
        {filteredList.map(story => {
          return (
            <div className="story-card" key={story.storiesid}>
              <Story story={story} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StoriesList;

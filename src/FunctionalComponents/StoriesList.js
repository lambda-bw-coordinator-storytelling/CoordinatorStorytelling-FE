import React from "react";
import Story from "./Story";

const StoriesList = props => {
  console.log("Passed in list: ", props.stories);
  console.log("Passed in country: ", props.country);

  // let filteredList = props.stories.filter(
  //   story => story.country === props.country
  // );

  let filteredList = [];

  if (props.country === "all") {
    filteredList = props.stories;
  } else {
    filteredList = props.stories.filter(
      story => story.country === props.country
    );
  }

  console.log("Filtered list: ", filteredList);

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

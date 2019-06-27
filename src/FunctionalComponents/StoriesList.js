import React from "react";
import Story from "./Story";

import "../styles/storiesList.scss";

const StoriesList = props => {
  console.log(props.stories);
  let filteredList = [...props.stories];

  // props.country === "all"
  //   ? (filteredList = props.stories)
  //   : (filteredList = props.stories.filter(
  //       story => story.country === props.country
  //     ));

  return (
    <>
      <div className="story-cards-container">
        <h2>Explore Stories</h2>
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

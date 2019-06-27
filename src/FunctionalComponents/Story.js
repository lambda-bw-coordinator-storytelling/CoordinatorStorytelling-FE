import React from "react";
import { Link } from "react-router-dom";

const Story = props => {
  const { story } = props;
  return (
    <>
      <Link
        to={{
          pathname: `/stories/${story.storiesid}`
        }}
      >
        <div className="media">
          <img src={story.url} alt={story.title} />
        </div>
        <div className="title-bar">
          <h3>{story.title}</h3>
          <h4 className="country">{story.country}</h4>
        </div>
      </Link>

      <p className="description">{story.description}</p>
    </>
  );
};

export default Story;

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

        <h3 className="title">{story.title}</h3>
      </Link>
      <div className="country">{story.country}</div>
      <p className="description">{story.description}</p>
    </>
  );
};

export default Story;

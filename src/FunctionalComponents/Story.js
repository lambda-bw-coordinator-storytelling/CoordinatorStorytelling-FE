import React from "react";

const Story = props => {
  const { story } = props;

  return (
    <>
      <div className="media">
        <img src={story.url} alt={story.title} />
      </div>
      <h3 className="title">{story.title}</h3>
      <div className="country">{story.country}</div>
      <p className="description">{story.description}</p>
    </>
  );
};

export default Story;

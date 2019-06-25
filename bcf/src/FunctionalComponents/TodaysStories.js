import React from "react";

const TodaysStories = () => {
  // Filter 3 stories from today, each story card is a link to that story.

  return (
    <div className="todays-stories-container">
      <h2>Be Inspired by Today's Stories</h2>
      <div className="story-card">
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
      <div className="story-card">
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
      <div className="story-card">
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
    </div>
  );
};

export default TodaysStories;

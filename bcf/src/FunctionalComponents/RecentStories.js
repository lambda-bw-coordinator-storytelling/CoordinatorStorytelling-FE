import React from "react";

const RecentStories = () => {
  // Filter 4 random stories, each story card is a link to that story.

  return (
    <div className="recent-stories-container">
      <h2>Recent Stories</h2>
      <div className="story-card">
        <div className="recent-story-image">Country Name</div>
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
      <div className="story-card">
        <div className="recent-story-image">Country Name</div>
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
      <div className="story-card">
        <div className="recent-story-image">Country Name</div>
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
      <div className="story-card">
        <div className="recent-story-image">Country Name</div>
        <h3 className="title">Title</h3>
        <p className="description">
          Laborum nisi velit eiusmod velit duis aliquip eu amet nulla.
        </p>
      </div>
    </div>
  );
};

export default RecentStories;

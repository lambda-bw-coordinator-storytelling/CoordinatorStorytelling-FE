import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

const ViewStory = props => {
  const { story } = props;

  return (
    <>
      <NavBar />
      <div className="click-back-container">
        <div className="back-arrow" />
        <a href="">Back to Stories</a>
      </div>

      <div className="story-container">
        <div className="title-line">
          <h2>{story.title}</h2>
          <p>{story.date}</p>
        </div>
        <p className="article-country">{story.country}</p>
        <div className="story">{story.content}</div>
      </div>
      <Footer />
    </>
  );
};

export default ViewStory;

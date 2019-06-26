import React from "react";

import MainHeader from "./MainHeader";
import Footer from "./Footer";

const Story = () => {
  return (
    <>
      <MainHeader />
      <div className="back-container">
        <div className="back-arrow" />
        <a href="">Back to Stories</a>
      </div>

      <div className="story-container">
        <div className="title-line">
          <h2>Grad Gets Her Big Win</h2>
          <p>May 17, 2019</p>
        </div>
        <p className="article-country">Madagascar</p>
        <div className="story">
          <p>
            Ullamco consectetur est duis officia esse elit ullamco. Occaecat
            consequat proident adipisicing do eu consequat aliqua velit duis
            sunt. Mollit cupidatat consequat ipsum eu ea incididunt laborum sint
            commodo dolore sunt qui reprehenderit.
          </p>
          <p>
            Ullamco consectetur est duis officia esse elit ullamco. Occaecat
            consequat proident adipisicing do eu consequat aliqua velit duis
            sunt. Mollit cupidatat consequat ipsum eu ea incididunt laborum sint
            commodo dolore sunt qui reprehenderit.
          </p>
          <p>
            Ullamco consectetur est duis officia esse elit ullamco. Occaecat
            consequat proident adipisicing do eu consequat aliqua velit duis
            sunt. Mollit cupidatat consequat ipsum eu ea incididunt laborum sint
            commodo dolore sunt qui reprehenderit.
          </p>
          <p>
            Ullamco consectetur est duis officia esse elit ullamco. Occaecat
            consequat proident adipisicing do eu consequat aliqua velit duis
            sunt. Mollit cupidatat consequat ipsum eu ea incididunt laborum sint
            commodo dolore sunt qui reprehenderit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Story;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

class ViewStory extends Component {
  render() {
    console.log("This is the data: ", this.props.data);
    return (
      <>
        <NavBar />
        <div className="click-back-container">
          <Link to=""> &#129120; Back to Stories</Link>
        </div>
        <h2>Story Container Here</h2>

        <Footer />
      </>
    );
  }
}

export default ViewStory;

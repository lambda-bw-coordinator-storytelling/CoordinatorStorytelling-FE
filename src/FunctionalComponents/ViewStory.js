import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

class ViewStory extends Component {
  componentDidMount() {
    // const { story } = this.props.location.state;
    // this.setState(() => ({ story: story.data }));
    // console.log(this.state);
    // componentDidMount() {
    //   axios
    //     .get("http://coordinator-storytelling.herokuapp.com/stories/all")
    //     .then(res => {
    //       console.log(res);
    //       this.setState(() => ({ stories: res.data }));
    //     })
    //     .catch(function() {
    //       console.log("There was an error: ");
    //     });
    // }
  }

  render() {
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

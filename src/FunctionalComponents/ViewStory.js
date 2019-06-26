import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NavBar from "./NavBar";
import Footer from "./Footer";

class ViewStory extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    let storyid = this.props.match.params.id;

    axios
      .get(`http://coordinator-storytelling.herokuapp.com/stories/${storyid}`)
      .then(res => {
        this.setState({
          post: res.data
        });
        console.log(this.state.post.title);
      })
      .catch(function() {
        console.log("There was an error: ");
      });

    this.setState({
      id: storyid
    });
  }

  render() {
    const post = this.state.post ? (
      <h2>{this.state.post.title}</h2>
    ) : (
      <p>Loading post...</p>
    );

    return (
      <>
        <NavBar />
        <div className="click-back-container">
          <Link to=""> &#129120; Back to Stories</Link>
        </div>
        {post}

        <Footer />
      </>
    );
  }
}

export default ViewStory;

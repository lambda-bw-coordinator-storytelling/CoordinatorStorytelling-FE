import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NavBar from "./NavBar";
import Footer from "./Footer";

class ViewStory extends Component {
  state = {
    story: null,
    loggedIn: null
  };

  checkAuth() {
    localStorage.getItem("token")
      ? this.setState({
          loggedIn: true
        })
      : this.setState({
          loggedIn: false
        });
  }

  componentDidMount() {
    let storyid = this.props.match.params.id;
    this.checkAuth();

    axios
      .get(`http://coordinator-storytelling.herokuapp.com/stories/${storyid}`)
      .then(res => {
        this.setState({
          story: res.data
        });
      })

      .catch(function() {
        console.log("There was an error: ");
      });

    this.setState({
      id: storyid
    });
  }

  render() {
    console.log(localStorage.getItem("token"));

    const editButton = <button>Edit</button>;

    const story = this.state.story ? (
      <>
        <div className="title-left-container">
          <h2 className="title">{this.state.story.title}</h2>
          <p className="country">{this.state.story.country}</p>
        </div>
        <p className="date">{this.state.story.date}</p>
        <div className="story-content-container">
          {this.state.story.content}
          {this.state.loggedIn === true ? editButton : <p />}
        </div>
      </>
    ) : (
      <p>Loading story...</p>
    );

    return (
      <>
        <NavBar />
        <div className="click-back-container">
          <Link to=""> &#129120; Back to Stories</Link>
        </div>
        <div className="story-container">{story}</div>

        <Footer />
      </>
    );
  }
}

export default ViewStory;

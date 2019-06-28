import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralNav from "./GeneralNav";
import "../styles/viewstory.scss";

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
        console.log("Returned Data: ", res.data);
        this.setState({
          story: res.data
        });
      })

      .then()
      .catch(function() {
        console.log("There was an error: ");
      });

    this.setState({
      id: storyid
    });
  }

  deleteStory = e => {
    e.preventDefault();
    alert("This is forever!");

    let storyid = this.props.match.params.id;

    axios
      .delete(
        `http://coordinator-storytelling.herokuapp.com/stories/story/${storyid}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      )
      .then(res => {
        console.log("Story Deleted: ", res);
      })

      .then(this.props.history.push("/user"))

      .then()
      .catch(function() {
        console.log("There was an error: ");
      });
  };

  render() {
    console.log(localStorage.getItem("token"));

    const editButton = (
      <Link
        to={{
          pathname: `/user/editstory/${this.state.id}`
        }}
      >
        <button>Edit</button>
      </Link>
    );

    const deleteButton = (
      <button className="delete-button" onClick={this.deleteStory}>
        Delete
      </button>
    );

    const story = this.state.story ? (
      <>
        <div className="single-story-page view-page">
          <div className="story-container view-story">
            <img src={this.state.story.url} alt="story" />

            <div className="title-container view-title">
              <h2 className="title">{this.state.story.title}</h2>
              <p className="country">{this.state.story.country}</p>
            </div>

            <p className="date">{this.state.story.date}</p>

            <div className="story-content-container">
              {this.state.story.content}
            </div>
            <div className="story-buttons">
              {this.state.loggedIn === true ? editButton : <div />}
              {this.state.loggedIn === true ? deleteButton : <div />}
            </div>
          </div>
        </div>
      </>
    ) : (
      <p>Loading story...</p>
    );

    return (
      <>
        <GeneralNav />
        <div className="click-back-container">
          {/* <Link to=""> &#129120; Back to Stories</Link>*/}
        </div>
        <div>{story}</div>
      </>
    );
  }
}

export default ViewStory;

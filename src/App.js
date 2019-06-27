import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";

// import NavBarLoggedOut from "./FunctionalComponents/NavBarLoggedOut";
// import NavBarLoggedIn from "./FunctionalComponents/NavBarLoggedIn";
import GeneralNav from "./FunctionalComponents/GeneralNav";
import Footer from "./FunctionalComponents/Footer";
import MainStories from "./Containers/MainStories";
import CoordinatorLogin from "./Containers/CoordinatorLogin";
import CoordinatorSignup from "./Containers/CoordinatorSignup";
import CoordinatorHome from "./Containers/CoordinatorHome";
import ViewStory from "./FunctionalComponents/ViewStory";
import StoryEdit from "./Containers/StoryEdit";
import StoryAdd from "./Containers/StoryAdd";

class App extends React.Component {
  state = {
    stories: []
  };

  getMyStories = () => {
    axios
      .get("http://coordinator-storytelling.herokuapp.com/stories/mine", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })

      .then(res => {
        console.log(res);

        this.setState(() => ({ stories: res.data }));
      })

      .catch(function() {
        console.log("There was an error: ");
      });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={props => <GeneralNav {...props} />} />

          <Route exact path="/" render={props => <MainStories {...props} />} />
          <Route
            exact
            path="/login"
            render={props => (
              <CoordinatorLogin getMyStories={this.getMyStories} {...props} />
            )}
          />

          <Route
            exact
            path="/signup"
            render={props => <CoordinatorSignup {...props} />}
          />

          <Route
            exact
            path="/user"
            render={props => <GeneralNav {...props} />}
          />

          <Route
            exact
            path="/user"
            render={props => <CoordinatorHome stories={this.state.stories} />}
          />

          <Route
            exact
            path="/stories/:id"
            render={props => <ViewStory {...props} />}
          />

          <Route
            exact
            path="/user/editstory/:id"
            render={props => <StoryEdit {...props} />}
          />

          <Route
            exact
            path="/user/addstory"
            render={props => <StoryAdd {...props} />}
          />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

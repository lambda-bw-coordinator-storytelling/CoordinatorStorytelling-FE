import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

import MainHeader from "./FunctionalComponents/NavBar";
import Footer from "./FunctionalComponents/Footer";
import MainStories from "./Containers/MainStories";
import CoordinatorLogin from "./Containers/CoordinatorLogin";
import CoordinatorSignup from "./Containers/CoordinatorSignup";
import CoordinatorHome from "./Containers/CoordinatorHome";
import ViewStory from "./FunctionalComponents/ViewStory";
import StoryEdit from "./Containers/StoryEdit";
import StoryAdd from "./Containers/StoryAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <Route exact path="/" render={props => <MainStories {...props} />} />
        <Route
          exact
          path="/login"
          render={props => <CoordinatorLogin {...props} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <CoordinatorSignup {...props} />}
        />
        <Route
          exact
          path="/admin"
          render={props => <CoordinatorHome {...props} />}
        />

        <Route
          exact
          path="/stories/:id"
          render={props => <ViewStory {...props} />}
        />

        <Route
          exact
          path="admin/editstory/:id"
          render={props => <StoryEdit {...props} />}
        />

        <Route
          exact
          path="admin/addstory"
          render={props => <StoryAdd {...props} />}
        />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

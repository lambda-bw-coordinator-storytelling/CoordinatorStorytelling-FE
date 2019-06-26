import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import { ProtectedRoute } from "./Helpers/ProtectedRoute";
import MainHeader from "./FunctionalComponents/MainHeader";
import Footer from "./FunctionalComponents/Footer";
import MainStories from "./Containers/MainStories";
import CoordinatorLogin from "./Containers/CoordinatorLogin";
import CoordinatorSignup from "./Containers/CoordinatorSignup";
import CoordinatorHome from "./Containers/CoordinatorHome";
import CoordinatorProfile from "./Containers/CoordinatorProfile";
import StoryAdd from "./Containers/StoryAdd";
import StoryEdit from "./Containers/StoryEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <Route exact path="/" component={MainStories} />
        <Route path="/login" component={CoordinatorLogin} />
        <Route path="/signup" component={CoordinatorSignup} />
        <ProtectedRoute exact path="/protected" component={CoordinatorHome} />
        <ProtectedRoute exact path="/protected/addstory" component={StoryAdd} />
        <ProtectedRoute
          exact
          path="/protected/editstory"
          component={StoryEdit}
        />
        <ProtectedRoute
          exact
          path="/protected/profile"
          component={CoordinatorProfile}
        />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

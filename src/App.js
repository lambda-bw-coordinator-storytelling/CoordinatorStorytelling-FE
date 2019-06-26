import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PrivateRoute } from "./Helpers/PrivateRoute";
import "./App.scss";

import MainHeader from "./FunctionalComponents/MainHeader";
import Footer from "./FunctionalComponents/Footer";
import MainStories from "./Containers/MainStories";
import CoordinatorLogin from "./Containers/CoordinatorLogin";
import CoordinatorSignup from "./Containers/CoordinatorSignup";
import CoordinatorHome from "./Containers/CoordinatorHome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <Route exact path="/" component={MainStories} />
        <Route path="/login" component={CoordinatorLogin} />
        <Route path="/signup" component={CoordinatorSignup} />
        <PrivateRoute exact path="/protected" component={CoordinatorHome} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

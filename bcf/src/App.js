import React from "react";
import "./App.scss";

// import CoordinatorLogin from "./components/CoordinatorLogin";
// import CoordinatorSignup from "./Containers/CoordinatorSignup";
// import CoordinatorHome from "./Containers/CoordinatorHome";
// import CoordinatorProfile from "./Containers/CoordinatorProfile";
// import StoryAdd from "./Containers/StoryAdd";
// import StoryEdit from "./Containers/StoryEdit";
// import StoriesList from "./FunctionalComponents/StoriesList";
// import Story from "./FunctionalComponents/Story";
import MainStories from "./Containers/MainStories";

function App() {
  return (
    <div className="App">
      <MainStories />
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";

// import CoordinatorLogin from "./components/CoordinatorLogin";
// import CoordinatorSignup from "./Containers/CoordinatorSignup";
// import CoordinatorHome from "./Containers/CoordinatorHome";
// import CoordinatorProfile from "./Containers/CoordinatorProfile";
// import StoryAdd from "./Containers/StoryAdd";
// import StoryEdit from "./Containers/StoryEdit";
import MainHeader from "./FunctionalComponents/MainHeader";
import Footer from "./FunctionalComponents/Footer";
import MainStories from "./Containers/MainStories";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainStories />
      <Footer />
    </div>
  );
}

export default App;

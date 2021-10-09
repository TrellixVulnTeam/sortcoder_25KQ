import React from "react";
import { Route, Switch } from "react-router-dom";
import DataScience from "./pages/Courses/DataScience";
import "./App.css";
import Blog from "./pages/Blog";
import PostContainer from "./Containers/Post/PostContainer";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/" component={DataScience} /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={PostContainer} />
      </Switch>
      {/* <DataScience /> */}
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />

        {/* <Route exact path="/" component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;

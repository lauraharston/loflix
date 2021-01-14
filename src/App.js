import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Movies from "./containers/Movies";
import TVShows from "./containers/TVShows";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/tvshows" component={TVShows} />
        <Redirect to='/home'/>
      </Switch>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;

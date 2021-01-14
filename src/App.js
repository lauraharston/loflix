import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './containers/Home'
import Movies from './containers/Movies'
import TVShows from './containers/TVShows'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Movies />
      <TVShows />
      <Footer />
    </div>
  );
}

export default App;

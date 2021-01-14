import React, { Component } from "react";
import Carousel from "../components/Carousel";

class TVShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      comedy: {},
      actionAdventure: {},
      family: {},
      warPolitics: {},
      mystery: {},
    };
  }

  // Fetch methods
  fetchComedy = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&vote_average.gte=8&with_genres=35`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          comedy: data,
        })
      );
  };

  fetchActionAdventure = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&vote_average.gte=8&with_genres=10759`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          actionAdventure: data,
        })
      );
  };

  fetchFamily = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=8&with_genres=10751`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          family: data,
        })
      );
  };

  fetchWarPolitics = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&vote_average.gte=8&with_genres=10768`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          warPolitics: data,
        })
      );
  };

  fetchMystery = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=8&with_genres=9648`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          mystery: data,
        })
      );
  };

  componentDidMount() {
    this.setState({ loading: true });

    this.fetchComedy();
    this.fetchActionAdventure();
    this.fetchFamily();
    this.fetchWarPolitics();
    this.fetchMystery();
  }
  render() {
    if (this.state.mystery) {
      console.log(this.state.mystery);
    }
    return (
      <div>
        <h4 style={{ color: "white" }}>Comedy</h4>
        <Carousel movies={this.state.comedy.results} />
        <h4 style={{ color: "white" }}>Action Adventure</h4>
        <Carousel movies={this.state.actionAdventure.results} />
        <h4 style={{ color: "white" }}>Family</h4>
        <Carousel movies={this.state.family.results} />
        <h4 style={{ color: "white" }}>War & Politics</h4>
        <Carousel movies={this.state.warPolitics.results} />
        <h4 style={{ color: "white" }}>Mystery</h4>
        <Carousel movies={this.state.mystery.results} />
      </div>
    );
  }
}

export default TVShows;

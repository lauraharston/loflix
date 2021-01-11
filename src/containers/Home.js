import React, { Component } from "react";

import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      trendingMovies: {},
    };
  }
  // Fetching trending movie list
  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          trendingMovies: data,
        })
      );
  }

  render() {
    return (
      <div>
        <Banner trendingMovies={this.state.trendingMovies.results} />
        <h4 style={{ color: "rgba(255, 255, 255, 0.5)" }}>Trending Now</h4>
        <Carousel trendingMovies={this.state.trendingMovies.results} />
      </div>
    );
  }
}

export default Home;

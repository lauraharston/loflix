import React, { Component } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      trendingAll: {},
      discoverActionAll: {},
      discoverComedyAll: {},
      discoverDramaTV: {},
    };
  }

  // Fetch methods

  fetchTrendingAll=() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          trendingAll: data,
        })
      );
  }

  fetchAction = () =>{
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&include_adult=false&sort_by=popularity.desc&include_video=false&language=en-US&page=1&vote_average.gte=8&with_genres=28`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          discoverActionAll: data,
        })
      );
  }
  

  fetchComedy = () =>{
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&include_adult=false&sort_by=popularity.desc&language=en-US&include_video=false&page=1&with_genres=35`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          discoverComedyAll: data,
        })
      );
  }

  fetchDramaTV = () =>{
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&include_null_first_air_dates=false`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          discoverDramaTV: data,
        })
      );
  }
  

  componentDidMount() {
    this.setState({ loading: true });
      this.fetchTrendingAll();
      this.fetchAction();
      this.fetchComedy();
      this.fetchDramaTV();
  }

  render() {
    
    return (
      <div>
        <Banner movie={this.state.trendingAll.results} />
        <h4 className='carousel-title'>Trending Now</h4>
        <Carousel movies={this.state.trendingAll.results} />
        <h4 className='carousel-title'>Action</h4>
        <Carousel movies={this.state.discoverActionAll.results} />
        <h4 className='carousel-title'>Comedy</h4>
        <Carousel movies={this.state.discoverComedyAll.results} />
        <h4 className='carousel-title'>Drama TV Shows</h4>
        <Carousel movies={this.state.discoverDramaTV.results} />
      </div>
    );
  }
}

export default Home;

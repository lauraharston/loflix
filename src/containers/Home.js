import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import Banner from '../components/Banner'

SwiperCore.use([Navigation]);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      trendingMovies: {},
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  // Fetching data from API
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

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  
  // Render banner elements + modal 
 
  

  // Creating carousel with swiper

  renderCarousel = () => {
    let trendingMovies = this.state.trendingMovies.results;
    const slides = [];

    if (trendingMovies) {
      for (let i = 0; i < trendingMovies.length; i++) {
        let imgSrc = `http://image.tmdb.org/t/p/w185/${trendingMovies[i].poster_path}`;
        slides.push(
          <SwiperSlide key={`slide-${i}`} wrapperTag="li">
            <img
              src={imgSrc}
              style={{ listStyle: "none" }}
              alt={`Slide ${i}`}
            />
          </SwiperSlide>
        );
      }
    }
    return (
      <React.Fragment>
        <Swiper
          tag="section"
          wrapperTag="ul"
          id="main"
          navigation
          spaceBetween={5}
          slidesPerView={8}
          slidesPerGroup={3}
        >
          {slides}
        </Swiper>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
         <Banner trendingMovies={this.state.trendingMovies.results} />
        <h4 style={{ color: "rgba(255, 255, 255, 0.5)" }}>Trending Now</h4>
        {this.renderCarousel()}
      </div>
    )
    
  
    
  }
}

export default Home;

import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { GiTomato } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./index.css";

SwiperCore.use([Navigation]);

class Home extends Component {
  constructor() {
    super();
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
  renderBanner = () => {
    let trendingMovies = this.state.trendingMovies.results;
    //let a = Math.floor(Math.random() * 20)
    if (this.state.trendingMovies.results) {
      const backDrop = trendingMovies[3].backdrop_path;
      const prefix = "http://image.tmdb.org/t/p/original/";
      const prefixModal = "http://image.tmdb.org/t/p/w342/";
      const posterPath = trendingMovies[3].poster_path;

      return (
        <div className="Home">
          <div className="movie-spotlight">
            <img
              src={prefix + backDrop}
              alt="hero"
              id="Hero"
              className="img-fluid"
            />
            <div className="container movie-spotlight-btn-title">
              <Row>
                <Col className="mt-5">
                  <h1 className="banner-title">{trendingMovies[3].title}</h1>
                </Col>
              </Row>
              <Row>
                <Col className="mt-2">
                  <button
                    className="btn btn-secondary banner-button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.toggleModal}
                  >
                    More info
                  </button>
                </Col>
              </Row>
            </div>
          </div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              <img
                src={prefixModal + posterPath}
                alt="modal pic"
                className="img-fluid"
                id="modal-pic"
              />
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <h5>{trendingMovies[3].title}</h5>
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <GiTomato size={25} className="rottenTomato" />
                  {trendingMovies[3].vote_average}/10
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{trendingMovies[3].overview}</p>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  };

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
          spaceBetween={50}
          slidesPerView={5}
        >
          {slides}
        </Swiper>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        {this.renderBanner()}
        <h2 style={{ color: "rgba(255, 255, 255, 0.5)" }}>Trending Now</h2>
        {this.renderCarousel()}
      </div>
    );
  }
}

export default Home;

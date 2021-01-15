import React, { Component } from "react";
import { Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiTomato } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

class Carousel extends Component {
 
  renderCarousel = () => {
    if (this.props.movies) {
      return (
        <Swiper
          tag="section"
          wrapperTag="ul"
          id="main"
          navigation
          spaceBetween={5}
          slidesPerView={8}
          slidesPerGroup={3}
        >
          {this.props.movies.map((movie, i) => {
            return (
              <SwiperSlide key={movie.id} wrapperTag="li">
              <Slide movie={movie} i={i} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      );
    }
  };

  render() {
    return <div>{this.renderCarousel()}</div>;
  }
}

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    console.log("Click!!!!");
  }

  render() {
    const { movie, i } = this.props;
    return (
      <>
        <img
          src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
          onClick={this.toggleModal}
        />
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <img
              src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
              alt="modal pic"
              className="img-fluid"
            />
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <h5>{movie.title}</h5>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <GiTomato size={25} className="rottenTomato" />
                {movie.vote_average}/10
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{movie.overview}</p>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
        </>
    );
  }
}
export default Carousel;

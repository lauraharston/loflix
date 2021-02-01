import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiTomato } from "react-icons/gi";

class Banner extends Component {
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
  }

  renderBanner = () => {
    //let a = Math.floor(Math.random() * 20)
    if (this.props.movie) {
      const backDrop = this.props.movie[0].backdrop_path;
      const prefix = "http://image.tmdb.org/t/p/original/";
      const prefixModal = "http://image.tmdb.org/t/p/w342/";
      const posterPath = this.props.movie[0].poster_path;

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
                  <h1 className="banner-title">
                    {this.props.movie[0].title}
                  </h1>
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
                  <h5>{this.props.movie[0].title}</h5>
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <GiTomato size={25} className="rottenTomato" />
                  {this.props.movie[0].vote_average}/10
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{this.props.movie[0].overview}</p>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderBanner()}</div>;
  }
}

export default Banner;

import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";



SwiperCore.use([Navigation]);

class Carousel extends Component {

    renderCarousel = () => {
        const slides = [];
    
        if (this.props.trendingMovies) {
          for (let i = 0; i < this.props.trendingMovies.length; i++) {
            let imgSrc = `http://image.tmdb.org/t/p/w185/${this.props.trendingMovies[i].poster_path}`;
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
                    {this.renderCarousel()}
              </div>
              
              )
      }

}

export default Carousel;
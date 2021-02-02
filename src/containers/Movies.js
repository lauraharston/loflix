import React, { Component } from "react";
import Carousel from "../components/Carousel";


class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            classicMovies: {},
            animationMovies: {},
            musicMovies: {},
            adventureMovies: {},
            documentaries: {}
        }
    }

      // Fetch methods

    fetchClassicMovies = () =>{
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1960-01-01&primary_release_date.lte=1985-12-31&vote_average.gte=8`
        )
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              loading: false,
              classicMovies: data,
            })
          );
      }

      fetchAnimationMovies = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=16`
          )
            .then((response) => response.json())
            .then((data) =>
              this.setState({
                loading: false,
                animationMovies: data,
              })
            );
      }

      fetchMusicMovies = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&page=2&include_adult=false&include_video=false&vote_average.gte=7&with_genres=10402`
          )
            .then((response) => response.json())
            .then((data) =>
              this.setState({
                loading: false,
                musicMovies: data,
              })
            );
      }


      fetchAdventureMovies = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&page=2&include_adult=false&include_video=false&vote_average.gte=7&with_genres=12`
          )
            .then((response) => response.json())
            .then((data) =>
              this.setState({
                loading: false,
                adventureMovies: data,
              })
            );
      }

      fetchDocumentaries = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_adult=false&include_video=false&vote_average.gte=7&with_genres=99`
          )
            .then((response) => response.json())
            .then((data) =>
              this.setState({
                loading: false,
                documentaries: data,
              })
            );
      }
    
      componentDidMount() {
        this.setState({ loading: true });
        
        this.fetchClassicMovies();
        this.fetchAnimationMovies();
        this.fetchMusicMovies();
        this.fetchAdventureMovies();
        this.fetchDocumentaries();
      }

      render(){
          return(
              <div>
                <h4 className='carousel-title'>Classic</h4>
                <Carousel movies={this.state.classicMovies.results}/>
                <h4 className='carousel-title'>Animation</h4>
                <Carousel movies={this.state.animationMovies.results}/>
                <h4 className='carousel-title'>Music</h4>
                <Carousel movies={this.state.musicMovies.results}/>
                <h4 className='carousel-title'>Adventure</h4>
                <Carousel movies={this.state.adventureMovies.results}/>
                <h4 className='carousel-title'>Documentaries</h4>
                <Carousel movies={this.state.documentaries.results}/>
                
              </div>
          )
      }
}

export default Movies;
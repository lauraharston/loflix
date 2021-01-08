import React, {Component} from 'react'; 
import { Container, Row, Col} from 'reactstrap';




class Home extends Component {
    constructor(){
        super()
            this.state = {
                loading : false, 
                trendingMovies : {}
            }
    }
    componentDidMount() {
        this.setState({loading : true})
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_LOFLIX_API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({
            loading : false,
            trendingMovies : data
        }))
        
    }

    

    renderBanner = () => {
        let trendingMovies = this.state.trendingMovies.results
        let a = Math.floor(Math.random() * 20)
        if(this.state.trendingMovies.results) {
            const backDrop = trendingMovies[a].backdrop_path
            const prefix = 'http://image.tmdb.org/t/p/original/'
            return (
                <Container className="Home" fluid={true}>
                    <h1>{trendingMovies[a].title}</h1>
                    <button className="btn">More info</button>
                    <img src={prefix+backDrop} alt='hero' id='Hero' className="img-fluid"/>
                </Container>
                
            )
        }
    }



        render() {   
            return(
                <div>
                    {this.renderBanner()}          
                </div>
            ) 
        }
    }
    
   
    


export default Home 

import React, {Component} from 'react'; 
import { Container, Row, Col } from 'reactstrap';



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
        let a = Math.floor(Math.random() * 20)
        if(this.state.trendingMovies.results) {
            const backDrop = this.state.trendingMovies.results[a].backdrop_path
            const prefix = 'http://image.tmdb.org/t/p/w1280/'
            return <img src={prefix+backDrop} alt='hero'/>
        }
    }


        render() {   
            return(
                <Container className="Home" fluid={true}>
                <Row>
                    <Col>
                    {this.renderBanner()}
                    </Col>
                </Row>   
                </Container>
            ) 
        }
    }
    
   
    


export default Home 

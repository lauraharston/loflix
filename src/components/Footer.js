import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container className = 'footer'>

        <Row>
            <Col className='mb-2'>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook size={30} /></a> {' '}
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a> {' '}
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter size={30}/></a> {' '}
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube size={30}/></a>
            </Col>
        </Row>
        {
            // need to add social links
        }
            <Row>
                <Col xs='6' lg='3'>
                    <a href="/"><p>Audio and Subtitles</p></a>
                    <a href="/"><p>Media Center</p></a>
                    <a href="/"><p>Privacy</p></a>
                    <a href="/"><p>Contact Us</p></a>
                </Col>
                <Col xs='6' lg='3'>
                    <a href="/"><p>Audio Description</p></a>
                    <a href="/"><p>Investor Relations</p></a>
                    <a href="/"><p>Legal Notices</p></a>
                </Col>
                <Col xs='6' lg='3'>
                    <a href="/"><p>Help Center</p></a>
                    <a href="/"><p>Jobs</p></a>
                    <a href="/"><p>Cookie Preferences</p></a>
                </Col>
                <Col xs='6' lg='3'>
                    <a href="/"><p>Gift Cards</p></a>
                    <a href="/"><p>Terms of Use</p></a>
                    <a href="/"><p>Corporate information</p></a>
                </Col>
            </Row>
        </Container>
    )


}

export default Footer 
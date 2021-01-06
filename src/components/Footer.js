import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Container className = 'footer'>
        {
            // need to add social links
        }
            <Row>
                <Col xs='6' lg='3'>
                    <p>Audio and Subtitles</p>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                </Col>
                <Col xs='6' lg='3'>
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                </Col>
                <Col xs='6' lg='3'>
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                </Col>
                <Col xs='6' lg='3'>
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate information</p>
                </Col>
            </Row>
        </Container>
    )


}

export default Footer 
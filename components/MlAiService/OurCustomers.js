import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class OurCustomers extends Component {
    render() {
        return (
            <section className='features-area pt-70 pb-70'> 
                <div className='container'>
                    <div className='features-title' >
                        <h3>Our Services</h3>
                    </div>
                    <Container>
                        <Row className="justify-content-md-center ml-ai-ourcustomer-row ">
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image' /></Col>
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                            <Col md="auto" className='ml-ai-ourcustomer-col' ><img src='/images/ourcustomer.jpeg' alt='image'/></Col>
                        </Row>
                    </Container>
                </div>
            </section>
        );
    }
}

export default OurCustomers;










<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
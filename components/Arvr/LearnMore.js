import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class LearnMore extends Component {
    render() {
        return (
            <section className="pt-100" style={{background: "black" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span style={{color: "white" , fontFamily: "Montserrat, sans-serif" }} >OUR MISSION</span>
                                <h2 style={{color: "white", fontFamily: "Montserrat, sans-serif" }} ><strong >Location Based</strong> VR</h2>
                                <h2 style={{color: "white", fontFamily: "Montserrat, sans-serif" }} ><strong>Entertainment Platform</strong> </h2>
                                <p style={{color: "white" , fontFamily: "Montserrat, sans-serif"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className='default-btn-one' style={{marginTop: "1.5rem" ,color: "white" }} >Learn More</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/locationbasedvrbg.jpeg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container pt-100 pb-100' style={{ textAlign:"center", justifyContent:"center" }} >
                    <h2 style={{color: "white", fontFamily: "Montserrat, sans-serif"}} >Passionately designed for you</h2>
                    <p style={{color: "white", fontFamily: "Montserrat, sans-serif",maxWidth: "700px" ,textAlign:"center", justifyContent:"center", margin: "auto" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumesetting industry.</p>
                    <div className='container pb-70 pt-70'>
                    <Container >
                        <Row className="pb-100 pt-100 justify-content-md-center learn-more-row">
                            <Col md="auto" className='learn-more-grid' >
                                <div style={{margin: "20px"}}> 
                                    <div className='learn-more-grid'>
                                        <i className="fa fa-users learn-more-icon" aria-hidden="true"></i>
                                        <h1>10</h1>
                                        <p>Players</p>
                                        <p>Full body Mode</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="auto"className='learn-more-grid'>
                                <div style={{margin: "20px"}}> 
                                    <div className='learn-more-grid'>
                                        <i className="fa fa-users learn-more-icon" aria-hidden="true"></i>
                                        <h1>10</h1>
                                        <p>Players</p>
                                        <p>Full body Mode</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="auto" className='learn-more-grid' >
                                <div style={{margin: "20px"}}> 
                                    <div className='learn-more-grid'>
                                        <i className="fa fa-users learn-more-icon" aria-hidden="true"></i>
                                        <h1>10</h1>
                                        <p>Players</p>
                                        <p>Full body Mode</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="auto" className='learn-more-grid' >
                                <div style={{margin: "20px"}}> 
                                    <div className='learn-more-grid'>
                                        <i className="fa fa-users learn-more-icon" aria-hidden="true"></i>
                                        <h1>10</h1>
                                        <p>Players</p>
                                        <p>Full body Mode</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </div>
                <div className="container pt-100 pb-100 ">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/locationbasevrbg2.jpeg" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content" >
                                {/* <span style={{color: "white" }} >OUR MISSION</span> */}
                                <h2 style={{color: "white", fontFamily: "Montserrat, sans-serif" }} ><strong>Let's Hold The</strong> Future</h2>
                                <h2 style={{color: "white", fontFamily: "Montserrat, sans-serif" }} ><strong>together. Learn how</strong></h2>
                                <h2 style={{color: "white", fontFamily: "Montserrat, sans-serif" }} ><strong>to be an</strong> Investor</h2>
                                <p style={{color: "white", fontFamily: "Montserrat, sans-serif" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className='default-btn-one' style={{marginTop: "1.5rem" ,color: "white" }} >Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LearnMore;
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class LearnMore extends Component {
    render() {
        return (
            // <section className="pt-100" style={{background: "black" }}>
            <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></svg>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span style={{color: "black"  }} >OUR MISSION</span>
                                <h2 style={{color: "black" }} ><strong >Location Based</strong> VR</h2>
                                <h2 style={{color: "black" }} ><strong>Entertainment Platform</strong> </h2>
                                <p style={{color: "black" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,64L20,101.3C40,139,80,213,120,208C160,203,200,117,240,117.3C280,117,320,203,360,245.3C400,288,440,288,480,272C520,256,560,224,600,224C640,224,680,256,720,240C760,224,800,160,840,144C880,128,920,160,960,192C1000,224,1040,256,1080,229.3C1120,203,1160,117,1200,96C1240,75,1280,117,1320,144C1360,171,1400,181,1420,186.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
           
           </>
           // </section>
        );
    }
}

export default LearnMore;
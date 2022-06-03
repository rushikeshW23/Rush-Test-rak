import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-image.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span>About Us</span>
                                <h3>Who We Are</h3>
                                {/* <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong> */}
                                <p>Agumentik have a big vision, taking very small but smart steps to get toward success. We are humble, visionary and gigantic as well in terms of aspiration. In the Information and Technology Industry, “It’s not about a splendid innovation, it’s about a bunch of little innovations every day, every month and so on for carrying out something a slight better and efficient.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-6 col--6">
                                    <div className="single-fun-facts">
                                        <h3>
                                            1150
                                            <span className="sign-icon">+</span>
                                        </h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6 col-6">
                                    <div className="single-fun-facts">
                                        <h3>
                                            450
                                            <span className="sign-icon">+</span>
                                        </h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row pt-4'>
                                <button className='default-btn-one col-4'>Download Brochere</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default AboutContent;
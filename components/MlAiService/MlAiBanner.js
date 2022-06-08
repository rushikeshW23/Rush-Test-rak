import React, { Component } from 'react';

class MlAiBanner extends Component {
    render() {
        return (
            <section className="about-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span style={{fontFamily: "Orbitron, sans-serif" }} >OUR MISSION</span>
                                <h3 style={{fontFamily: "Orbitron, sans-serif" }} >We are Dynamic Team Developement</h3>
                                <strong  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image" style={{maxWidth: "75%"}} >
                                <img src="/images/ml-ai-banner.jpeg" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className='team-section team-item-area'>
                    <div className='team-content'>
                        <ul className="team-social">
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default MlAiBanner;
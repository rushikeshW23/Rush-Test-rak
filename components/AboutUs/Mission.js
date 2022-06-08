import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content">
                                <span>OUR MISSION</span>
                                <h3>We are Dynamic Team Developement</h3>
                                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/vision.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default AboutContent;
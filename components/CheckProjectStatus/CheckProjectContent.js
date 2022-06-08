import React, { Component }  from 'react'

class CheckProjectContent extends Component {
    render() {
        return (
            <>
                <div id="tab2" className="tabs_item mt-5 pt-5 container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="tab-image animate__animated animate__fadeIn">
                                <img src="/images/tab/2.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <h2>Project Status Support</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mt-4">
                                    <div className="tab-text-content">
                                        <i className="flaticon-analysis-2" style={{color:"#e3202d"}}></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                            <div className="col-lg-6 col-md-6 mt-4">
                                <div className="tab-text-content"><i className="flaticon-analysis-2" style={{color:"#e3202d"}}></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-btn mt-4">
                            <a className="default-btn-one" href="/support/#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="default-animation">
                <div class="shape-img1">
                    <img src="/images/shape/12.svg" alt="image" />
                </div>
                <div class="shape-img2">
                    <img src="/images/shape/13.svg" alt="image" />
                </div>
                <div class="shape-img3">
                    <img src="/images/shape/14.png" alt="image" />
                </div>
                <div class="shape-img4">
                    <img src="/images/shape/15.png" alt="image" />
                </div>
                <div class="shape-img5">
                    <img src="/images/shape/2.png" alt="image" />
                </div>
            </div>
            </>
        )
    }
};

export default CheckProjectContent;
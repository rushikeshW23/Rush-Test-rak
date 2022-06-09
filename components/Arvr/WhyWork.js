import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WhyWork extends Component {
    render() {
        return (
            <section className='pb-100 pt-100' style={{background: "black"}}>
                <div className='container whywork-container ' style={{background: "black"}} >
                    <h1 style={{color:"white"}} >Why Work With us</h1>
                    <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <p>demonstrate the visual form of a document or a typeface without relying on meaningful</p>
                    <div style={{display: "flex", justifyContent: "center", alignContent: "center", padding: "1rem" }} >
                       <div style={{justifyContent: "center", alignContent: "center"}} >
                            <div class="hexagon">
                                <span><FontAwesomeIcon icon="fa-dark fa-arrow-up-right-dots" /></span>
                            </div>
                            {/* <i className="fa-solid fa-arrow-up-right-dots" style={{color: "black"}}></i> */}
                            <strong>Massive Scale</strong>
                            <div>
                                <span style={{textAlign: "center"}} >In publishing and graphic design</span>
                            </div>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center"}} >
                            <div class="hexagon">
                                <span><FontAwesomeIcon icon="fa-dark fa-arrow-up-right-dots" /></span>
                            </div>
                            {/* <i className="fa-solid fa-arrow-up-right-dots" style={{color: "black"}}></i> */}
                            <strong>Massive Scale</strong>
                            <div>
                                <span style={{textAlign: "center"}} >In publishing and graphic design</span>
                            </div>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center"}} >
                            <div class="hexagon">
                                <span><FontAwesomeIcon icon="fa-dark fa-arrow-up-right-dots" /></span>
                            </div>
                            {/* <i className="fa-solid fa-arrow-up-right-dots" style={{color: "black"}}></i> */}
                            <strong>Massive Scale</strong>
                            <div>
                                <span style={{textAlign: "center"}} >In publishing and graphic design</span>
                            </div>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center"}} >
                            <div class="hexagon">
                                <span><FontAwesomeIcon icon="fa-dark fa-arrow-up-right-dots" /></span>
                            </div>
                            {/* <i className="fa-solid fa-arrow-up-right-dots" style={{color: "black"}}></i> */}
                            <strong>Massive Scale</strong>
                            <div>
                                <span style={{textAlign: "center"}} >In publishing and graphic design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyWork;
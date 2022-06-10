import React, { Component } from 'react';
import { GrOptimize } from 'react-icons/gr';
import {SiRoamresearch} from 'react-icons/si'
import { IconContext } from "react-icons";

class WhyWork extends Component {
    render() {
        return (
            <section className='pb-100 pt-100' style={{background: "black"}}>
                <div className='container whywork-container'>
                    <h1 style={{color:"white"}} >Why Work With us</h1>
                    <p>publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <p>demonstrate the visual form of a document or a typeface without relying on meaningful</p>

                    <div style={{display: "flex", justifyContent: "center", alignContent: "center", padding: "1rem" , flexWrap: "wrap" }} >
                       <div style={{justifyContent: "center", alignContent: "center", padding: "20px"}} >
                            <div style={{margin: "20px"}}>
                                <div class="hexagon">
                                    <span>
                                        <IconContext.Provider value={{ color: "black", size: "3rem", className: "global-class-name" }}>
                                            <div>
                                                <GrOptimize />
                                            </div>
                                        </IconContext.Provider>
                                    </span>
                                </div>
                            </div>
                            <div style={{paddingTop: "2rem"}}>
                                <strong style={{color: "white" }}  >Massive Scale</strong>
                                <div style={{textAlign: "center" , color: "white"}} >In publishing and graphic design</div>
                            </div>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center", padding: "20px"}} >
                            <div style={{margin: "20px"}}>
                                <div class="hexagon">
                                    <span>
                                        <IconContext.Provider value={{ color: "black", size: "3rem", className: "global-class-name" }}>
                                            <div>
                                                <GrOptimize />
                                            </div>
                                        </IconContext.Provider>
                                    </span>
                                </div>
                            </div>
                            <div style={{paddingTop: "2rem"}}>
                                <strong style={{color: "white" }}   >Massive Scale</strong>
                                <div style={{textAlign: "center" , color: "white"}} >
                                    In publishing and graphic design
                                </div>
                        </div>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center", padding: "20px"}} >
                        <div style={{margin: "20px"}}>
                            <div class="hexagon">
                                <span>
                                    <IconContext.Provider value={{ color: "black", size: "3rem", className: "global-class-name" }}>
                                        <div>
                                            <SiRoamresearch />
                                        </div>
                                    </IconContext.Provider>
                                </span>
                            </div>
                            </div>

                            <div style={{paddingTop: "2rem"}}>
                                <strong  style={{color: "white" }}  >Massive Scale</strong>
                                <div style={{textAlign: "center" , color: "white"}} >In publishing and graphic design</div>
                            </div>
                        </div>
                        <div style={{justifyContent: "center", alignContent: "center", padding: "20px"}} >
                        <div style={{margin: "20px"}}>
                            <div class="hexagon">
                                <span>
                                    <IconContext.Provider value={{ color: "black", size: "3rem", className: "global-class-name" }}>
                                        <div>
                                            <GrOptimize />
                                        </div>
                                    </IconContext.Provider>
                                </span>
                            </div>
                            </div>
                            <div style={{paddingTop: "2rem"}}>
                                <strong style={{color: "white" }}  >Massive Scale</strong>
                                <div style={{textAlign: "center" ,color: "white"}} >In publishing and graphic design</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyWork;
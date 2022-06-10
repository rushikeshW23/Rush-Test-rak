import React, { Component } from 'react';
import Link from 'next/link';
// import './MlAiOurServices.css';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { IconContext } from "react-icons";

class MlAiBanner extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className='header__socials'>
                        <a href='https://linkedin.com' rel="noreferrer" target="_blank">WATCH OUR VIDEO</a>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="mlai-area-content">
                                <span>OUR MISSION</span>
                                <h3>We are Dynamic Team Developement</h3>
                                <strong  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore  dolore magna aliqua.</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='banner-btn ml-ai-banner-btn'>
                                <Link href="/ml-ai-service">
                                    <a className="btn default-btn-one">More About Us</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="ml-ai-image">
                                <img src="/images/ml-ai-banner.jpeg" alt="image" />
                            </div>
                        </div>
                        <div id="section09" className="demo">
                        <a href="#connect" className='scroll__down'><span></span>scroll</a>
                    </div>
                    </div>
                    <div className='ml-ai-social'>
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
                                    <li >
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                         <strong>-----------------------</strong>
                                    </li>
                                    <li>
                                         <strong className='mlai-follow-us' >  FOLLOW US</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        );
    }
}

export default MlAiBanner;
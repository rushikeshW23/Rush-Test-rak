import React, { Component } from 'react';

class ArvrBanner extends Component {
    render() {
        return (
            <section className='pt-100 pb-100 arvr-banner-section' >
                <div className='container'>
                    <div className='arvr-banner-top'>
                        <h1 style={{color: "black" , fontFamily: "Montserrat, sans-serif", margin: "2rem"}}>We are TVR</h1>
                        <h1 style={{color: "black" , fontFamily: "Montserrat, sans-serif" , margin: "2rem"}}>Virtual Reality Systems</h1>
                        <p style={{color: "black" , fontFamily: "Montserrat, sans-serif" , margin: "2rem"}}>ublishing and graphic design, Lorem ipsum is a placeholder text commonly used to demon
                        stra. </p>
                        <button className='default-btn-one' style={{margin: "2rem"}} >Contact Us</button>
                    
                        <div id="section09" class="demo">
                            <a href="#" className='scroll-learn-more' ><span></span>LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ArvrBanner;
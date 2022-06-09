import React, { Component } from 'react';

class ArvrBanner extends Component {
    render() {
        return (
            <section className='pt-100 arvr-banner' >
                <div className='container' style={{color: "white"}} >
                    <h1 style={{color: "white" , fontFamily: "Montserrat, sans-serif"}}>We are TVR</h1>
                    <h1 style={{color: "white" , fontFamily: "Montserrat, sans-serif"}}>Virtual Reality Systems</h1>
                    <p style={{color: "white" , fontFamily: "Montserrat, sans-serif"}}>ublishing and graphic design, Lorem ipsum is a placeholder text commonly used to demon
                    stra. </p>
                    <button className='default-btn-one'>Contact Us</button>
                </div>
                <div className='arvr-learnmore' >LEARN MORE</div>
            </section>
        );
    }
}

export default ArvrBanner;
import React, { Component } from 'react';
import { ParallaxBanner  } from 'react-scroll-parallax';

class ArvrBanner extends Component {
    render() {
        return (
            <section className='pt-100 pb-100 arvr-banner-section' >
            {/* <div className="wrap"> */}
  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 1024" preserveAspectRatio="meet"><polygon points="163 0 0 0 0 88.61 34 121 163 0"/><polygon points="154 116 163 0 34 121 154 116"/><polygon points="413.05 0 163 0 348 67 413.05 0"/><polygon points="348 67 448 102 448 0 413.05 0 348 67"/><polygon points="312 231 448 210 448 102 348 67 312 231"/><polygon points="348 67 163 0 154 116 348 67"/><polygon points="312 231 348 67 154 116 312 231"/><polygon points="154 116 34 121 45.77 233.64 154 116"/><polygon points="48 231 312 231 154 116 48 231"/><polygon points="0 88.61 0 160 34 121 0 88.61"/><polygon points="34 121 0 157.86 0 330.37 62 389 34 121"/><polygon points="62 389 312 231 45.49 231 62 389"/><polygon points="201.18 411.36 312 231 209.23 295.95 201.18 411.36"/><polygon points="201.67 407.94 448 412 312 231 201.67 407.94"/><polygon points="448 412 448 210 312 231 448 412"/><polygon points="197 525 448 412 201.67 407.94 197 525"/><polygon points="62 389 197 525 209.23 295.95 62 389"/><polygon points="0 330.37 0 411.36 62 389 0 330.37"/><polygon points="27 605 197 525 62 389 27 605"/><polygon points="62 389 0 410.48 0 570.13 27 605 62 389"/><polygon points="122 786 197 525 27 605 122 786"/><polygon points="306.26 696.61 391 655.5 197 525 122 786 306.26 696.61"/><polygon points="391 655.5 448 412 197 525 391 655.5"/><polygon points="448 655.5 448 412 391 655.5 448 655.5"/><polygon points="448 837 448 655.5 391 655.5 448 837"/><polygon points="306.26 696.61 279 938 448 837 306.26 696.61"/><polygon points="306.26 696.61 448 837 391 655.5 306.26 696.61"/><polygon points="279 938 306.26 696.61 122 786 279 938"/><polygon points="122 786 0 740.91 0 861.44 16.25 913 122 786"/><polygon points="27 605 0 624.2 0 740.91 122 786 27 605"/><polygon points="0 570.13 0 624.2 27 605 0 570.13"/><polygon points="16.25 913 279 938 122 786 16.25 913"/><polygon points="0 952.43 0 1024 166 1024 16.25 913 0 952.43"/><polygon points="0 861.44 0 952.43 16.25 913 0 861.44"/><polygon points="16.25 913 162.7 1024 214.13 1024 279 938 16.25 913"/><polygon points="214.13 1024 448 1024 279 938 214.13 1024"/><polygon points="448 1024 448 837 279 938 448 1024"/></svg>
</div> */}
                {/* <ParallaxBanner
                layers={[
                    {
                    image: 'https://foo.com/foo.jpg',
                    speed: -20,
                    },
                ]}
                style={{ aspectRatio: '2 / 1' }}
                /> */}
                <div className='container'>
                    <div className='arvr-banner-top'>
                        <h1 style={{color: "white" , fontFamily: "Montserrat, sans-serif", margin: "2rem"}}  >We are <span className='fancy fancy--underline' >TVR</span></h1>
                        <h1 style={{color: "white" , fontFamily: "Montserrat, sans-serif" , margin: "2rem"}}>Virtual Reality Systems</h1>
                        <p style={{color: "white" , fontFamily: "Montserrat, sans-serif" , margin: "2rem"}}>ublishing and graphic design, Lorem ipsum is a placeholder text commonly used to demon
                        stra. </p>
                        <button className='default-btn-one' style={{margin: "2rem"}} >Contact Us</button>
                    
                        <div id="section09" class="demo">
                            <a href="#" className='scroll-learn-more' ><span></span>LEARN MORE</a>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            </section>
        );
    }
}

export default ArvrBanner;
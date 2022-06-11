import React, { Component } from 'react';
import NavbarFour from '../components/Layouts/NavbarFour';
import ArvrBanner from '../components/Arvr/ArvrBanner';
import WhyWork from '../components/Arvr/WhyWork';
import Footer from '../components/Layouts/Footer';
import ContactUs from '../components/Arvr/Contactus';
import LearnMore from '../components/Arvr/LearnMore';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import ArvrBanner2 from '../components/Arvr/ArvrBanner2';
import PassionatelyDesigned from '../components/Arvr/PassionatelyDesigned';
// import {arvrbanner} from '../public/images/arvrbanner.jpg';

class Arvr2 extends Component {
    
    render() {

        const divStyle = {
            // width: '100%',
            height: '100%',
            background: `url({'../public/images/arvrbanner.jpg'})`,
            backgroundSize: 'cover'  
          };
        
        const navStyle = {
            background: `url({'../public/images/arvrbanner.jpg'})`,
        }

        return (
            <>
                <NavbarTwo />

                {/* <ParallaxProvider> */}
                    <ArvrBanner2 style={navStyle} />
                {/* </ParallaxProvider> */}

                <WhyWork />

                <LearnMore />

                <PassionatelyDesigned />

                <ContactUs className='arvr' />

                <Footer />
            </>
        )
    }
};

export default Arvr2;
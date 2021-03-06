import React, { Component } from 'react';
import NavbarFour from '../components/Layouts/NavbarFour';
import ArvrBanner from '../components/Arvr/ArvrBanner';
import WhyWork from '../components/Arvr/WhyWork';
import Footer from '../components/Layouts/Footer';
import ContactUs from '../components/Arvr/Contactus';
import LearnMore from '../components/Arvr/LearnMore';
import NavbarTwo from '../components/Layouts/NavbarTwo';

class Arvr extends Component {
    
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
            <section className='arvr' style={divStyle} >
                {/* <NavbarFour style={navStyle} /> */}
                <NavbarTwo  />

                <ArvrBanner className='arvr' style={divStyle} />

                <WhyWork style={divStyle} />

                <LearnMore />
                
                <ContactUs className='arvr' />

                <Footer />

            </section>
        );
    }
}

export default Arvr;
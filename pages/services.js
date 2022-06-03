import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesContent from '../components/Common/ServicesContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import PartnerLogosCopy from '../components/Common/PartnerLogosCopy';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Services" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Services" 
                    breadcrumbUrl="/" 
                />

                <ServicesContent />

                <WhyChooseUs />

                <SubscribeStyleTwo />

                {/* <div className='pb-100'> */}
                    <PartnerLogosCopy />
                {/* </div> */}
                
                <Footer />
            </>
        );
    }
}

export default Services;
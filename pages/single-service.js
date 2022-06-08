import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import SingleServiceContent from '../components/SingleService/SingleServiceContent';
import Footer from '../components/Layouts/Footer';

class SingleService extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <SingleServiceContent />
                
                <Footer />
            </>
        );
    }
}

export default SingleService;
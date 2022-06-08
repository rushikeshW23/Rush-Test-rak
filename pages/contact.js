import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import SubscribeStyleTwo from '../components/Common/SubscribeStyleTwo';
import Footer from '../components/Layouts/Footer';
import WhyToContact from '../components/Contact/WhyToContact';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <WhyToContact />

                <ContactForm />

                <SubscribeStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Contact;
import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import FaqSection from '../components/Faq/FaqSection';
import SubscribeStyleOne from '../components/Common/SubscribeStyleOne'; 
import CheckProject from '../components/CheckProjectStatus/CheckProject';
import CheckProjectContent from '../components/CheckProjectStatus/CheckProjectContent';

class ProjectStatus extends Component {
    render() {
        return (
            <>
                <Navbar />

                <CheckProjectContent />

                <CheckProject />

                <FaqSection />

                <SubscribeStyleOne />

                <Footer />
            </>
        );
    }
};

export default ProjectStatus;
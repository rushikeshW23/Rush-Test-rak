import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';
import NavbarThree from '../components/Layouts/NavbarThree';
import DownloadDocs from '../components/MlAiService/DownloadDoc';
import MlAiBanner from '../components/MlAiService/MlAiBanner';
import MlAiOurServices from '../components/MlAiService/MlAiOurServices';
import OurCustomers from '../components/MlAiService/OurCustomers';


class MlAiService extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <MlAiBanner />

                <MlAiOurServices/>
                
                <OurCustomers />

                <DownloadDocs />

                <Footer />
            </>
        );
    }
}

export default MlAiService;
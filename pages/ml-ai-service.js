import React, { Component } from 'react';
import Footer from '../components/Layouts/Footer';
import NavbarThree from '../components/Layouts/NavbarThree';
import MlAiBanner from '../components/MlAiService/MlAiBanner';
import MlAiOurServices from '../components/MlAiService/MlAiOurServices';


class MlAiService extends Component {
    render() {
        return (
            <>
                <NavbarThree />

                <MlAiBanner />

                <MlAiOurServices/>

                <Footer />
            </>
        );
    }
}

export default MlAiService;
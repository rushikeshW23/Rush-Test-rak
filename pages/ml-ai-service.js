import React, { Component } from 'react';
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
            </>
        );
    }
}

export default MlAiService;
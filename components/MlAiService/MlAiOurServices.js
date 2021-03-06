import React, { Component } from 'react';
import Create from './Create';
import Connect from './Connect';
import Secure from './Secure';
import Readi from './Readi';
import Grow  from './Grow';

class MlAiOurService extends Component {
    render() {
        return (
            <section className='features-area pt-70 pb-70'>
                <div className='container'>
                    <div className='features-title' >
                        <h3>Our Services</h3>
                    </div>
                    <div>
                        <div className='nav-ml-ai-div' >
                            <ul className="nav justify-content-center nav-ml-ai-service">
                                <li className="nav-item">
                                    <a className="nav-link active ml-ai-navlink" aria-current="page" href="#create">Create</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ml-ai-navlink" href="#connect">Connect</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ml-ai-navlink" href="#secure">Secure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ml-ai-navlink" href="#grow">Grow</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ml-ai-navlink" href="#secure">Readi</a>
                                </li>
                            </ul>
                        </div>
                        <div id="create">
                            <Create/>
                        </div>
                        <div id='connect'>
                            <Connect/>
                        </div>
                        <div id='secure'>
                            <Secure/>
                        </div>
                        <div id='grow'>
                            <Grow/>
                        </div>
                        <div id='readi'>
                            <Readi/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MlAiOurService;
import React, { Component } from 'react';
import Create from './Create';
import Connect from './Connect';
import Secure from './Secure';
import Readi from './Readi';

class MlAiOurService extends Component {
    render() {
        return (
            <section className='features-area pt-70 pb-70'>
                <div className='container'>
                    <div className='features-title' >
                        <h3>Our Services</h3>
                    </div>
                    <div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#create">Create</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#connect">Connect</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#secure">Secure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#secure">Readi</a>
                            </li>
                        </ul>
                        <div id="create">
                            <Create/>
                        </div>
                        <div id='connect'>
                            <Connect/>
                        </div>
                        <div id='secure'>
                            <Secure/>
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
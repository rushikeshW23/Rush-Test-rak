import React, { Component } from 'react';

class WhyToContact extends Component {
    render() {
        return (
            <div className="container my-5 py-5 z-depth-1">
                <section className="px-md-5 mx-md-5 text-center dark-grey-text"></section>
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h3 className="font-weight-bold">Why To Connect ?</h3>
                            <p className="text-muted"> Let’s work together to create a changing experience that will turn your brand from bland to buzz worthy. We would love to hear from you whether you are curious about the features, a free quote or even need additional information, don’t hesitate to leave a message. We will get back to you as soon as possible, and we will be happy to answer your value question.</p>
                            <button className="btn btn-danger" type="submit">Call Us Now</button>
                        </div>
                        <div className="col-md-5 mb-4 mb-md-0">
                            <img src="/images/contact-hero.svg" className="mb-4" alt="" />
                        </div>
                    </div>
                </div>
        )
    }
};

export default WhyToContact;
import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        
        const ArvrFromGroup = {
            borderTop: "0px",
            borderLeft: "0px",
            borderRight: "0px",
            backgroundColor: "white",
            height: "50px",
            fontSize: "16px",
            padding: "10px 20px",
            borderTop: "0px",
            borderLeft: "0px",
            borderRight: "0px",
            borderBottom: "1px solid white",
            outline: 0,
            borderRadius: "5px",
            transition: "all .3s ease",
            // backgroundImage: `url({'../public/images/arvrbanner.jpg'})`
            backgroundColor: "black"
          };

        return (
                <section style={{background: "black"}} >
                    <div className='container  arvr-contactform pt-100' style={{justifyContent: "center", alignItems: "center", textAlign: "center", margin: "auto"}} >
                        <h1 style={{color: "white" , fontFamily: "Montserrat, sans-serif"}} >Get <span className='fancy fancy--underline' >Started</span> Now</h1>
                        <p>Interested in Partner with us ? Then get in touch</p>

                        {/* <ContactForm /> */}<div></div>
                        <div className="col-lg-6 col-md-6 pb-100 "  style={{margin: "auto"}} >  
                        {/* //col-lg-6 col-md-6  */}
                        {/* <form onSubmit={handleSubmit} className="contact-form"> */}
                        <form className="contact-form" style={{justifyContent: "center", alighItems: "center", textAlign: "center"}} >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Name" 
                                            className="form-control" 
                                            style={ArvrFromGroup}
                                            // value={contact.name}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder="Email" 
                                            className="form-control" 
                                            style={ArvrFromGroup}
                                            // value={contact.email}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="number" 
                                            placeholder="Phone number" 
                                            className="form-control"
                                            style={ArvrFromGroup}
                                            // value={contact.number}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="Subject" 
                                            className="form-control arvr-form-group " 
                                            style={ArvrFromGroup}
                                            // value={contact.subject}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group arvr-form-group">
                                        <textarea 
                                            name="text" 
                                            cols="30" 
                                            rows="6" 
                                            placeholder="Write your message... " 
                                            className="form-control" 
                                            style={ArvrFromGroup}
                                            // value={contact.text}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="send-btn">
                                        <button type="submit"  className="send-btn-one">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    </div>
                </section>
        );
    }
}

export default ContactUs;
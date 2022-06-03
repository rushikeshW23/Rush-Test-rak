import React, { Component, useState } from 'react';
import Link from 'next/link';
import BackdropPopUp from '../Backdrop/BackdropPopUp';
import { Button } from '@mui/material';
import { Backdrop } from '@mui/material';
import { Modal } from 'react-bootstrap';

// function Example() {
//     // const [show, setShow] = useState(false);
  
//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);
  
//     return (
//       <>
//         {/* <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button> */}
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Body><BackdropPopUp /></Modal.Body>
//         </Modal>
//       </>
//     );
//   }


// class FeaturesContent extends Component {
function FeaturesContent () {

    // render() {
        // const [open, setOpen] = React.useState(false);
        // const handleClose = () => {
        //     setOpen(false);
        // };
        // const handleToggle = () => {
        //     setOpen(!open);
        // };
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // <Modal show={show} onHide={handleClose}>
    //     <Modal.Body><BackdropPopUp /></Modal.Body>
    // </Modal>
        return (
            <section className="features-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-content-area">
                                <span>QUICK SERVICES</span>
                                <h3>Services You Care About And We Excel At</h3>
                                <p>We strive to provide you with the best solutions to the needs of your business system. As a company, we value your obstacles and objectives and develop solutions that best satisfy your demands. We offer your business strong and adequate solutions with lasting impact.....</p>

                                <div className="features-btn">
                                    <Link href="/features">
                                        <a className="features-btn-one">Call Us Now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                            
                                <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShow}>
                                    <div className="single-features-item bg-f1eff8" >
                                        <div className="icon">
                                            <i className="flaticon-seo"></i>
                                        </div>
                                        <h3>Mobile App Development</h3>
                                        <p>Android was intended to be very customizable. And we welcome innovations.</p>
                                    </div>
                                </div>
                            
                            <Modal size='lg' show={show} onHide={handleClose}>
                                <BackdropPopUp />
                            </Modal>

                                <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShow}>
                                    <div className="single-features-item bg-fbe6d4">
                                        <div className="icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <h3>Website Development</h3>
                                        <p>Programs must be written for people to read and for machines to execute.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShow}>
                                    <div className="single-features-item bg-f0fffc">
                                        <div className="icon">
                                            <i className="flaticon-laptop"></i>
                                        </div>
                                        <h3>Software Development</h3>
                                        <p>A successful website contains sparkling elements, which attracts others.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShow}>
                                    <div className="single-features-item bg-f8e1eb">
                                        <div className="icon">
                                            <i className="flaticon-analysis-1"></i>
                                        </div>
                                        <h3>Digital Marketing</h3>
                                        <p>Three responses to a piece of design – yes, no, and WOW! Wow is what we aim for.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="features-animation">
                    <div className="shape-img1">
                        <img src="/images/shape/8.png" alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src="/images/shape/5.png" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
// }

export default FeaturesContent;
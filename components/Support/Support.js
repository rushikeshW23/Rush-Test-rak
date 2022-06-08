import React from 'react';

const Support = () => {
  return (
    <section className="about-section" style={{marginTop: "70px", marginBottom: "30px", overflow: "hidden", position: "relative"}}>
        <div className="container">
            <div className="section-title">
            <span>Support</span>
            <h3>Inquiry and Support</h3>
            </div>
            <div className="row d-flex justify-content-evenly">
                <div className="col-lg-5 col-md-12 d-lg-flex justify-content-center align-items-center card-container"> 
              {/*style={{background: "rgb(246, 245, 251)", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", border:"2px solid white"} */}
                    <div className="single-features-item bg-f1eff8 rounded card card-front" >
                    {/* style={{margin: "0px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px", background: "rgb(246, 245, 251)", width: "95%", cursor: "pointer", opacity: "1", transform: "rotateY(0deg) translateZ(0px)"}} */}
                        <div className="icon">
                            <i className="flaticon-seo"></i>
                        </div>
                        <h3>Project Status</h3>
                        <p>Get latest status and previews of your project using project ID.</p>
                        <br />
                    </div>
                    {/*  */}
                    {/* <div className="single-features-item bg-f1eff8 rounded card card-back" >
                    style={{margin: "0px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px", background: "rgb(246, 245, 251)", width: "95%", cursor: "pointer", opacity: "1", transform: "rotateY(0deg) translateZ(0px)"}}
                        <p className="text-center mb-2">Enter Project Information</p>
                            <form style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                                <input type="text" className="form-control" placeholder="Project ID" style={{marginBottom: "10px"}} />
                                    <input className="form-control" type="text" placeholder="Phone Number" style={{marginBottom: "10px"}} />
                                        <button className="default-btn-one" style={{borderRadius: "4px", padding: "4px 10px"}}>Submit</button>
                            </form>
                    </div> */}
                </div>
                <div className="col-lg-5 col-md-12" style={{background: "rgb(254, 246, 238)",height: "300px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white ", cursor: "pointer"}}>
                    <div className="features-btn mt-2 d-flex justify-content-center align-items-center rounded card-container">
                        <div className="single-features-item bg-fbe6d4 card card-front" >
                        {/* style={{margin: "0px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px", background: "rgb(246, 245, 251)", width: "95%", cursor: "pointer", opacity: "1", transform: "rotateY(0deg) translateZ(0px)"}}> */}
                            <div className="icon">
                                <i className="flaticon-analytics"></i>
                            </div>
                            <h3>Support</h3>
                            <p>Raise a query to our support team using the Grievence board or Conatct Page. We will get back to you!</p>
                        </div>
                    </div>
                    {/*  */}
                    {/* <div className="single-features-item bg-fbe6d4" style={{margin: "0px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px", background: "rgb(254, 246, 238)", width: "424px", height: "242px", cursor: "pointer", opacity: "1", transform: "rotateY(0deg) translateZ(0px)"}}>
                        <div className="mt-4" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                            <a className="default-btn-one" href="/#" style={{padding: "8px"}}>New User Registered</a>
                        </div>
                        <div className="mt-3" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                            <a className="default-btn-one" href="/#" style={{padding: "8px"}}>Already Registered User</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="default-animation">
            <div className="shape-img1">
                <img src="/images/shape/12.svg" alt="image" />
            </div>
            <div className="shape-img2">             
                <img src="/images/shape/13.svg" alt="image" />
            </div>
            <div className="shape-img3">
                <img src="/images/shape/14.png" alt="image"/>
            </div>
            <div className="shape-img4">
                <img src="/images/shape/15.png" alt="image" />
            </div>
            <div className="shape-img5">
                <img src="/images/shape/2.png" alt="image" />
            </div>
        </div>
    </section>
  )
}

export default Support
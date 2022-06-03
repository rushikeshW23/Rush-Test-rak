import React from 'react'

const Backdrop = () => {
  return (
        <div className="backdrop" style={{overflow: "auto", opacity: "1"}}>
            <div className="jsx-c542a7f1da3b115e w-50 bg-white rounded">
                <div className="row d-flex justify-content-center align-items-center flex-wrap" style={{padding: "2px", width: "700px", height: "500px"}}>
                    <div className="about-area-content d-flex justify-content-center">
                        <h3 style={{margin: "0px", paddingBottom: "10px"}}>Leads Generation</h3>
                    </div>
                    <center>
                    <div className="col-lg-10 col-md-10 d-flex justify-content-center" style={{padding: "0px 12px", marginLeft: "15px"}}>
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Name" className="form-control" required="" style={{height: "38px"}} />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input type="text" name="email" placeholder="Email" class="form-control" required="" style={{height: "38px"}} />
                                    </div>
                                    </div>
                                        <div class="col-lg-4">
                                            <div class="form-group">
                                                <input type="text" name="number" placeholder="Phone number" class="form-control" required="" style={{height: "38px"}} />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group">
                                                <input type="text" name="name" placeholder="Company Name" class="form-control" required="" style={{height: "38px"}} />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                        <div class="form-group">
                                            <select class="form-control" style={{color: "gray", height: "38px"}}>
                                                <option value="select" disabled="" hidden="" selected="">Select Service</option>
                                                <option>Android App Development</option>
                                                <option>IOS App Development</option>
                                                <option>Cross Platform Development</option>
                                            </select>
                                        </div>
                                    </div>
                                <div class="col-lg-4">
                                    <div class="form-group" style={{height: "38px"}}>
                                        <input type="text" name="budget" placeholder="Budget Range" class="form-control" required="" style={{height: "38px"}} />
                                    </div>
                                </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <input type="datetime-local" name="dateTime" placeholder="Schedule an Appointment" class="form-control" required="" style={{height: "38px"}} />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="text" placeholder="Write your message..." class="form-control" required="">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-sm-12 d-flex justify-content-center">
                                        <div class="send-btn">
                                            <button type="submit" class="send-btn-one" style={{padding: "6px 8px"}}>Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </center>
                </div>    
            </div>
        </div>
  )
}

export default Backdrop
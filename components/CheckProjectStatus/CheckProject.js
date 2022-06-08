import React, { Component }  from 'react'

class CheckProject extends Component {
    render() {
        return (
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-left">
                            <div className="card shadow-sm" style={{width: "28rem" }}>
                                <div className="card-body">
                                    <div style={{color: "rgb(227, 32, 45)" }}>Check Your Project Status
                                    </div>
                                    <form>
                                        <div className="form-group mt-2">
                                            <label for="exampleInputEmail1">Contact No.</label>
                                            <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone no." />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your contact with anyone else.</small>
                                        </div>
                                        <div className="form-group mt-2">
                                            <label for="exampleInputPassword1">Project Id</label>
                                            <input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Enter Your Project ID" />
                                        </div>
                                        <button type="submit" className=" default-btn-one mt-4" style={{padding: "5px"}}>Check Status</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img src="/images/sitt.png" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default CheckProject;
import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import SidebarModal from './SidebarModal';

class NavbarTwo extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        const navLinkArvr = {
            color: "white"
        }

        return (
            <>
                <div id="navbar" className="navbar-area navbar-four">
                    <div className="neemo-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link" style={navLinkArvr} > 
                                                {/* onClick={e => e.preventDefault()} */}
                                                    Home 
                                                    {/* <i className="fa fa-plus"></i> */}
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>About us <i class="fa fa-angle-down"></i> </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/about-us" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr " style={navLinkArvr}>About Company</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/Gallery" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Gallery</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/Product" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Products</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/coming-soon" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Careers</a>
                                                    </Link>
                                                </li>
                                            </ul>

                                            {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 1</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/index2" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 2</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/index3" activeClassName="active">
                                                        <a className="nav-link">Home Demo - 3</a>
                                                    </Link>
                                                </li>
                                            </ul> */}

                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link nav-link-arvr" style={navLinkArvr} onClick={e => e.preventDefault()}>
                                                    Services <i class="fa fa-angle-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/service-details" style={navLinkArvr} activeClassName="active">
                                                        <a className="nav-link nav-link-arvr">Web Developement</a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Static Website</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Dynamic Website</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Landing Page</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-service" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Ecommerce Developement</a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Single Vendor</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Multivendor</a>
                                                            </Link>
                                                        </li>
                                                    </ul>

                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-service" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Mobile App Developement</a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Android App Development</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>IOS App Development</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Cross Platform Development</a>
                                                            </Link>
                                                        </li>
                                                    </ul>

                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-service" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Software Developement</a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Customised Software</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>ERP Software</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>SaaS Software</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-service" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>UI/UX Designing</a>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Graphic Designing</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>UI/UX Designing</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-service" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Emerging Technologies</a>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Artificial Intelligence</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>Machine Learning</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link nav-link-arvr" style={navLinkArvr}>AR & VR</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link nav-link-arvr" style={navLinkArvr} onClick={e => e.preventDefault()}>
                                                    Portfolio
                                                </a>
                                            </Link>

                                            {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/projects" activeClassName="active">
                                                        <a className="nav-link">Projects</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/projects-two" activeClassName="active">
                                                        <a className="nav-link">Projects Two</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-project" activeClassName="active">
                                                        <a className="nav-link">Project Details</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link nav-link-arvr" style={navLinkArvr} onClick={e => e.preventDefault()}>
                                                    Info <i class="fa fa-angle-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Blogs</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/media" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Media & Events</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/#" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>CSR</a>
                                                    </Link>
                                                </li>
                                            </ul>

                                            {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-blog" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link nav-link-arvr" style={navLinkArvr} onClick={e => e.preventDefault()}>
                                                    Support <i class="fa fa-angle-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Verify Employee</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-blog" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Verify Certificate</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/support" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Project Status</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/single-service" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Grievance Board</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/contact" activeClassName="active">
                                                        <a className="nav-link nav-link-arvr" style={navLinkArvr}>Contact</a>
                                                    </Link>
                                                </li>
                                            </ul>

                                            {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/features" activeClassName="active">
                                                        <a className="nav-link">Features</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a className="nav-link">FAQ</a>
                                                    </Link>
                                                </li>
 
                                                <li className="nav-item">
                                                    <Link href="/404" activeClassName="active">
                                                        <a className="nav-link">404 error</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/coming-soon" activeClassName="active">
                                                        <a className="nav-link">Coming Soon</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>
 
                                        {/* <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>

                                <div className="others-options">
                                    <div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn fa fa-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn fa fa-times ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="burger-menu" onClick={this.toggleModal}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Sidebar Modal */}
                <SidebarModal onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} />
            </>
        );
    }
}

export default NavbarTwo;
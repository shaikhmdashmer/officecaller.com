import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logoPicFooter from '/images/logo-footer.svg'
import ContactFormFooter from './Enquiryfooter';

export default function Footermain() {
  return (
    <>
        <div className="footer-section" id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <Link href="/">
                            <div className="footerlogo">
                                <Image
                                    src={logoPicFooter}
                                    width={219}
                                    height={77}
                                    alt="Office Caller"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <Link href="#">
                                <div  className="nav-link">
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about-section">
                                <div  className="nav-link">
                                        About Us
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services-section">
                                <div className="nav-link">
                                        Services
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact-us">
                                <div className="nav-link">
                                        Contact Us
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <h4>Contact Us</h4>
                        <div className="address-location">
                            <div>
                                <div><span><i className="fa fa-map-marker-alt"></i></span></div>
                                <div><p>Address- Software Technology Park of India. MIDC industrial area, Chikalthana, Aurangabad, Maharashtra.</p></div>
                            </div>
                            <div>
                                <div><span><i className="fa fa-phone"></i></span></div>
                                <div><p>Phone: +91 81138 62000, +1 92955 21900</p></div>
                            </div>
                            <div>
                                <div><span><i className="fa fa-envelope"></i></span></div>
                                <div><p>Email: <a href="mailto:info@redbytes.in">info@redbytes.in</a></p></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-12" >
                    
                    <ContactFormFooter/>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-section">
            <div className="container">
                <span>&copy; Copyright - 2022, Office Caller - All rights reserved</span>
            </div>
        </div>

        {/* download-btn-fixed */}
        {/* <a className="download-btn-fixed" href="#">Download Now <i className="fa fa-arrow-right"></i></a> */}

        {/* cta-strip-bottomfixed */}
        <div className="cta-strip-bottomfixed">
            <div className="container">
                <div className="cta-row">
                    {/* <div className="ctauser"></div> */}
                    <h3>Connect with Us Easily</h3>
                    <a href="https://play.google.com/store/apps/details?id=com.app.officecaller" className="btn btn-light btn-lg" target="_blank" rel="noreferrer">Download Now <i className="fa fa-download"></i></a>
                </div>
            </div>
        </div>

        {/* scroll-top-btn */}
        <a className="scroll-top-btn" href="#"><i className="fa fa-arrow-up"></i></a>
    </>
  )
}

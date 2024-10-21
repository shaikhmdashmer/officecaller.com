import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPicFooter from "/images/logo-footer.svg";
import ContactFormFooter from "./Enquiryfooter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useRouter } from "next/router";
import ChatBot from "@/chatbot/chatboot";


export default function Footermain() {
  const router = useRouter();
  const path = router.asPath;


  const [isOpen, setIsOpen] = useState(false);
    // Function to toggle chat box visibility
    const toggleChatBox = () => {
      setIsOpen(!isOpen);
    };
  
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
                    <div className="nav-link">Home</div>
                  </Link>
                </li>
                <li>
                  <Link href="#about-section">
                    <div className="nav-link">About Us</div>
                  </Link>
                </li>
                <li>
                  <Link href="#services-section">
                    <div className="nav-link">Services</div>
                  </Link>
                </li>
                <li>
                  <Link href="#contact-us">
                    <div className="nav-link">Contact Us</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Contact Us</h4>
              <div className="address-location">
                <div>
                  <div>
                    <span>
                      <i className="fa fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <div>
                    <p>
                      Address- Software Technology Park of India. MIDC
                      industrial area, Chikalthana, Aurangabad, Maharashtra.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <span>
                      <i className="fa fa-phone"></i>
                    </span>
                  </div>
                  <div>
                    <p>Phone: +91 81138 62000</p>
                  </div>
                </div>
                <div>
                  <div>
                    <span>
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <div>
                    <p>Email: info@redbytes.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-12">
              {path == "/thank-you/" ? <></> : <ContactFormFooter />}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="container">
          <span>
            &copy; Copyright - 2022, Office Caller - All rights reserved
          </span>
        </div>
      </div>
      <div className="responsivefooter-menu">
        <ul>
          <li>
            <Link href="tel:+918113863000">
              <i className="fa fa-phone rotate-icon"></i>
              <span>Call</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact-us">
              <i className="fa fa-envelope"></i>
              <span>Email</span>
            </Link>
          </li>
          <li>
            <Link href="https://calendly.com/cloudxperte">
              <i className="fas fa-desktop"></i>
              <span>Free Demo</span>
            </Link>
          </li>
          <li>
            <Link href="/#about-section">
              <i className="fas fa-info-circle"></i>
              <span>About us</span>
            </Link>
          </li>
        </ul>
      </div>

      
      {/* cta-strip-bottomfixed */}
      <div className="cta-strip-bottomfixed">
        <div className="container">
          <div className="cta-row">
            {/* <div className="ctauser"></div> */}
            <h3>Connect with Us Easily</h3>
            <Link
              href="https://play.google.com/store/apps/details?id=com.app.officecaller"
              className="btn btn-light btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              Download Now <i className="fa fa-download"></i>
            </Link>
          </div>
        </div>
      </div>


      <div id="whatsapp-chat-widget" className="whatsapp-chat-widget">
        <div id="wa-widget-send-button" onClick={toggleChatBox}>
          <i className="fab fa-whatsapp wa-messenger-svg-whatsapp wh-svg-icon"></i>
        </div>
        {isOpen && (
          <div id="wa-chat-box" className="wa-chat-box show">
            <div className="wa-chat-box-header">
              <img
                className="wa-chat-box-brand bg-light"
                src="/images/office-caller.png"
              />
              <div className="wa-chat-box-brand-text">
                <div className="wa-chat-box-brand-name">Office Caller</div>
                {/* <div className="wa-chat-box-brand-subtitle">
                  appify your Business
                </div> */}
              </div>
              <div className="wa-chat-bubble-close-btn" onClick={toggleChatBox}>
                <i
                  className="fas fa-times closeicon"
                  style={{ display: "table-row", cursor: "pointer" }}
                ></i>
              </div>
            </div>

            <div className="wa-chat-box-content">
              <div className="wa-chat-box-content-chat">
                <div className="wa-chat-box-content-chat-brand">
                  Office Caller
                </div>
                <div className="wa-chat-box-content-chat-welcome">
                  Hi there!
                  <br />
                  How can I help you today?
                </div>
              </div>
            </div>

            <div className="wa-chat-box-send">
              <a
                role="button"
                rel="noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=8113863000&amp;text=Hi, Office Caller Team"
                title="WhatsApp"
                className="wa-chat-box-content-send-btn"
              >
                <i className="fab fa-whatsapp wa-chat-box-content-send-btn-icon"></i>
                <span className="wa-chat-box-content-send-btn-text">
                  Start Chat
                </span>
              </a>
            </div>
          </div>
        )}
      </div>


      {/* scroll-top-btn */}
      <a className="scroll-top-btn" href="#">
        <i className="fa fa-arrow-up"></i>
      </a>

      <ChatBot/>
    </>
  );
}

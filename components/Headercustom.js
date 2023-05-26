import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '/images/logo.svg'

export default function Headercustom() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">
                    <Image
                        src={logoPic}
                        width={219}
                        height={77}
                        alt="Office Caller"
                    />
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <Link href="#">
                            <a className="nav-link">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="#about-section">
                            <a className="nav-link">
                                About Us
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="#services-section">
                            <a className="nav-link">
                                Services
                            </a>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href="#contact-us">
                            <a className="nav-link">
                                Contact Us
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

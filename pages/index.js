import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/script'
import Headercustom from '../components/Headercustom'
import Footermain from '../components/Footermain'
import ServicesSlider from '../components/ServicesSlider'
import { getPosts } from '../utils/wordpress';
import BannerPost from '../components/BannerPost'

export default function Home({posts}) {
    const jsxPosts = posts.map((post) => {
    //const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    //const featuredMedia = post['images'][0];
    return <BannerPost post={post} key={post.id} />;
});
  return (
    <>
      <Head>
        <title>Office Caller</title>
        <meta name="description" content="Office Caller App, The Great Business Communication platform that is easy to use and flexible, Office caller is an easy-to-manage business phone app that allows users to make or receive business calls. Users can work from anywhere and manage their business lines and hours without any hassle. The app allows users to make phone calls, transfer and forward calls, and much more at ease using any device, be it Android or iOS mobile devices or PC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headercustom />

      {/* officecaller-banner-section */}
      <div className="officecaller-banner-section">
          <div className="container">
              {jsxPosts}
          </div>
      </div>

      {/* abt section 1 */}
      <div className="section officecaller-cont-wrapper no-padtop">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="cont-wrapper-imgblock">
                        <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                        <img src="/images/home_recent_contacts.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="officecaller-heading">
                        <h2><small>What is</small> Office Caller?</h2>
                    </div>
                    <p>Office caller is an easy-to-manage business phone app that allows users to make or receive business calls. Users can work from anywhere and manage their business lines and hours without any hassle. The app allows users to make phone calls, transfer and forward calls, and much more at ease using any device, be it Android or iOS mobile devices or PC.</p>
                    <p>Users can make unlimited domestic, international and bulk calls using the app. Apart from phone calls, the app allows communication via emails and messages, and much more, all at one place.</p>
                    <p>The app is great business communication platform that is easy to use and flexible. Users can communicate with prospects, customers, vendors, and more using the Office Caller app.</p>
                    <div className="space10"></div>
                    <div className="officecaller-heading">
                        <h2>Our Aim</h2>
                    </div>
                    <p>The main purpose of Office Caller app is not only to make business calls, but also record details regarding leads and candidates.</p>
                </div>
            </div>
        </div>
      </div>

      {/* services-section */}
      <div className="section officecaller-cont-wrapper" id="services-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center col-sm-12">
                    <div className="officecaller-heading">
                        <h2>Our Services</h2>
                    </div>
                    <p>The Office Caller app offer Business Lead management via call and Recruitment management. </p>
                </div>
            </div>

            <div className="row flex-top">
                <div className="col-md-4 col-sm-12 text-center svgblock">
                    <div className="svg-vector-imgcircle">
                        <img src="/images/feat-call.svg" alt="" />
                    </div>
                    <div className="officecaller-heading">
                        <h4>Call</h4>
                    </div>
                    <p>Users receive inquiry calls from prospects or clients. The details of the calls will be recorded in the app.</p>
                </div>
                <div className="col-md-4 col-sm-12 text-center svgblock">
                    <div className="svg-vector-imgcircle">
                        <img src="/images/feat-email.svg" alt="" />
                    </div>
                    <div className="officecaller-heading">
                        <h4>E-mail</h4>
                    </div>
                    <p>The users receive inquiries sent by the clients via e-mail.</p>
                </div>
                <div className="col-md-4 col-sm-12 text-center svgblock">
                    <div className="svg-vector-imgcircle">
                        <img src="/images/feat-message.svg" alt="" />
                    </div>
                    <div className="officecaller-heading">
                        <h4>Messages</h4>
                    </div>
                    <p>Clients can also send inquiries via messages in the Office Caller app. </p>
                </div>
            </div>
        </div>
      </div>

      {/* servicetwo-section */}
      <div className="section officecaller-cont-wrapper servicetwo-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="officecaller-heading">
                        <h4>Business/Lead Management via Call</h4>
                    </div>
                    <p>Business leads are people who might be interested in a product or service offered by your company.</p>
                    <p>The Office Caller app allows business lead generation and management through calls.</p>
                    <p>It is a common practice to generate leads through calls. When an inquiry call happens through the office caller app, the details of the caller and important information with regard to the call are recorded. These details can be used in the future in case the prospect becomes a qualified lead.</p>
                    <div className="space10"></div>

                    <nav className="custom-nav-tabs">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                <div className="iconblock">
                                    <span><i className="fa fa-handshake"></i></span>
                                </div>
                                Recruitment
                            </button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                <div className="iconblock">
                                    <span><i className="fa fa-comment-alt"></i></span>
                                </div>
                                Enquiries
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <h4>Recruitment Management</h4>
                            <p>Another service that Office Caller app offers is recruitment management. </p>
                            <p>Recruiters can attend inquiry calls by the candidate and assist them through the recruitment process using the app. The candidate call details will be recorded in the app for further use.</p>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <h4>Multiple Source Enquiries Management</h4>
                            <p>Clients or participants can contact the user using the Office Caller app.<br />There are three inquiry source types.</p>
                        </div>
                    </div>
                    <div className="space10"></div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="cont-wrapper-imgblock">
                        <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                        <img src="/images/10_home.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <ServicesSlider />

      {/* about us section */}
      <div className="section officecaller-cont-wrapper" id="about-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="officecaller-heading">
                        <h2>About Us</h2>
                    </div>
                    <p>Office Caller is an Indian company founded in 2009 in Pune, India by Mr. Sameer Kutty. The brilliant concept behind Office caller is such that any organization could manage their business calls using one single Application. We offer you an all-in-one toolkit that combines chat, calling, meetings, and collaborations for you to work smarter. Our aim is to provide employees with a modern day calling solution within an easy-to-use platform.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="cont-wrapper-imgblock">
                        <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                        <img src="/images/business_deal.svg" alt="" className='abtimg' />
                    </div>
                </div>
            </div>
        </div>
        <div id="particle-conatiner">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
      </div>

      <Footermain />
    </>
  )
}

export async function getStaticProps({ params }) {
    const posts = await getPosts();
    // const media = await getMedia();
    return {
        props: {
        posts,
        // media
    },
    revalidate: 10, // In seconds
    };
}
import React from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        //style={{ ...style, display: "block", background: "#0b7377" }}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        //style={{ ...style, display: "block", background: "#0b7377" }}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
}


export default function ServicesSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <div className="section officecaller-cont-wrapper wave-section" id="how-it-works">
        <div className="container slidercontainer">
            <Slider {...settings}>
                <div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="cont-wrapper-imgblock">
                                <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                                <img src="/images/26_sales_home_minimize.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 slidecontent">
                            <div className="officecaller-heading">
                                <h2>How this works?</h2>
                            </div>
                            <div className="space10"></div>
                            <div className="iconblock">
                                <span><i className="fa fa-check"></i></span>
                            </div>
                            <div className="icondescription">
                                <h4>Leads and Lead Management</h4>
                                <p>Leads are the prospects who may eventually become clients.</p>
                                <p>Prospects can be converted to leads based on follow up calls by users. Users can look through prospect details stored in the Office Caller app, contact them again. They can then communicate with them and motivate them to become clients.</p>
                                <p>Users can prioritise the leads at this stage. </p>
                                <p>The leads are categorised as:</p>
                                <ul>
                                    <li>Won leads- Leads who have been converted into clients</li>
                                    <li>Hot leads –High priority</li>
                                    <li>Warm leads –Medium priority</li>
                                    <li>Cold leads – Low priority</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="cont-wrapper-imgblock">
                                <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                                <img src="/images/27_lead_home.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 slidecontent">
                            <div className="officecaller-heading">
                                <h2>How it Works?</h2>
                            </div>
                            <div className="space10"></div>
                            <div className="iconblock">
                                <span><i className="fa fa-check"></i></span>
                            </div>
                            <div className="icondescription">
                                <h4>Sales Inquiries</h4>
                                <p>The sales agent receives the inquiry call transferred to them by the recruiter. They can send an “About Us” mail to the clients to let them know more about the organization.</p>
                                <p>Depending on the location of the client, domestic or international calls can be assigned for communicating with the client. The sales agent provides them forms to fill up details.</p>
                                <p>The sales agent then gathers the details and identifies the prospects, who would be communicated further for follow up. </p>
                                <p>The qualified prospects will then be converted to leads and will be lead through the development process. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="cont-wrapper-imgblock">
                                <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                                <img src="/images/candidate-details.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="officecaller-heading">
                                <h2>How it Works?</h2>
                            </div>
                            <div className="space10"></div>
                            <div className="iconblock">
                                <span><i className="fa fa-check"></i></span>
                            </div>
                            <div className="icondescription">
                                <h4>Recruitment Inquiries</h4>
                                <p>The recruiter attends the requirement inquiry calls. </p>
                                <p>The candidates are given forms to fill up their details and they go through the recruitment process.  </p>
                                <p>The qualified candidates would then be recruited to join the project. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="cont-wrapper-imgblock">
                                <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                                <img src="/images/54_email_details_settings.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="officecaller-heading">
                                <h2>How this works?</h2>
                            </div>
                            <div className="space10"></div>
                            <div className="iconblock">
                                <span><i className="fa fa-check"></i></span>
                            </div>
                            <div className="icondescription">
                                <h4>Candidate Management</h4>
                                <p>The Office Caller app stores call details of the candidates. All the information regarding the candidates can be gathered from there after the inquiry stage and stored into the database.</p>
                                <h5>Schedule Meetings</h5>
                                <p>Users can schedule meeting with the candidates using the Office Caller app.</p>
                                <h5>Manage Candidates</h5>
                                <p>Users can access candidate information, categorize them based on required skills and guide them through the recruitment process.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="cont-wrapper-imgblock">
                                <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                                <img src="/images/prospect-screen.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="officecaller-heading">
                                <h2>How this works?</h2>
                            </div>
                            <div className="space10"></div>
                            <div className="iconblock">
                                <span><i className="fa fa-check"></i></span>
                            </div>
                            <div className="icondescription">
                                <h4>Prospecting</h4>
                                <p>Identifying potential customers or prospects is an important step in the sales process. The idea is to gather information about potential customers and to communicate with them to convert them to leads.</p>
                                <p>Users can make use of the Office Caller app for this. They can collect basic information about the client and add filters to search prospects through e-mail and phone number. Users can then make calls with the prospects using the app.</p>
                                <p>Three kinds of calls are possible using the Office Caller app:</p>
                                <ul>
                                    <li>
                                        <strong>Domestic calls</strong><br />
                                        If the prospects are located within the country, users can make domestic calls.
                                    </li>
                                    <li>
                                        <strong>International calls</strong><br />
                                        Users can make international calls if the participants are located outside the country.
                                    </li>
                                    <li>
                                        <strong>Bulk calls</strong><br />
                                        Users can make calls with a maximum of 100 participants at a time using the app.
                                    </li>
                                </ul>
                                <p>Messages and emails are also methods to connect with the prospects.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="cont-wrapper-imgblock">
                                <div className="cont-wrapper-imgblock-shape"><img src="/images/lightshape.svg" alt="" /></div>
                                <img src="/images/stats.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="officecaller-heading">
                                <h2>How this works?</h2>
                            </div>
                            <div className="space10"></div>
                            <div className="iconblock">
                                <span><i className="fa fa-check"></i></span>
                            </div>
                            <div className="icondescription">
                                <h4>Statistics and Analytics</h4>
                                <p>Users can find statistics with regard to leads in the Office Caller app. There is information about monthly and yearly leads, and lead breakup details in the app.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
        <div className="wave-svg-section"></div>
    </div>
  )
}

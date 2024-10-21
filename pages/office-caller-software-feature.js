import Head from 'next/head';
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Headercustom from '@/components/Headercustom';
import axios from "axios";
import Footermain from '@/components/Footermain';

export default function OfficecallerSoftwareFeature({moduleFeatures}) {

    const router = useRouter();
    //const [moduleFeatures, setModuleFeatures] = useState([]);
   const [selectedFeatures, setSelectedFeatures] = useState({});
   
   const [setLoader , getLoader ]= useState();


  return (
    <>
    <Head>
         <title>#1 Office Caller  software in terms of features and funtionality</title>
        <meta name="description" content="Office Caller App, The Great Business Communication platform that is easy to use and flexible, Office caller is an easy-to-manage business phone app that allows users to make or receive business calls. Users can work from anywhere and manage their business lines and hours without any hassle. The app allows users to make phone calls, transfer and forward calls, and much more at ease using any device, be it Android or iOS mobile devices or PC." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.officecaller.com/office-caller-software-feature/" />
    </Head>
      
      <Headercustom />
      


      <div className="container" id="webapp-cost-calculator-container">
        <div className="appdeveloper-main-wrapper ">
          <div className="row appdeveloper-wrapper-row vt-soft">
               <h1 className='text-center'>Office Caller Software Feature</h1>
              <div className="app-right-column-inner">
                <div className="app-right-column-inner-form">
                  <div
                    className="accordion custom-accordion"
                    id="accordionExample"
                  >
                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                      
                        <div>
                          {moduleFeatures.map((module) => {

                            return (
                              <div
                                className="accordion-item mb-3"
                                key={module.id}
                              >
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${module.id}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse-${module.id}`}
                                  >

                                    <div className="accordion-button-btn-info">
                                      <span className="fw-600 ms-1">
                                        {module.module} {""}
                                        (
                                        {module.basic_features.length +
                                          module.advanced_features.length}
                                        )
                                      </span>


                                    </div>
                                  </button>
                                </h2>
                                <div
                                  id={`collapse-${module.id}`}
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                     {/* <h5>Features List for {module.module}</h5> */}

                                  <div className="tab-content" id="myTabContent">
                                      <div
                                        className="tab-pane show active"
                                        id={`basic-tab-pane-${module.id}`}
                                        role="tabpanel"
                                        aria-labelledby={`basic-tab-${module.id}`}
                                        tabIndex="0"
                                      >
                                        <div className="checkbox-wrapper feture-list">
                                          {module.basic_features.map((item) => (
                                            <>
                                              <ul>
                                                <li> {" "} {" "} {item.feature}</li>
                                              </ul>
                                            </>
                                          ))}
                                          
                                          {module.advanced_features.map((item) => (
                                            <>
                                              <ul>
                                                <li> {" "} {" "} {item.feature}</li>
                                              </ul>
                                            </>
                                          ))}
                                          
                                        </div>
                                      </div>
                                     
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>


                      </div>
                    </div>
                  </div>
                </div>

                
              </div>

          </div>
        </div>
      </div>


      <Footermain />
    </>
    
  )
}




export async function getStaticProps() {
    const selected_domain_id = 25;
    const selected_category_id = 73;
  
    try {
      const response = await axios.get(`https://admin.officecaller.com/api/modules_features/?domain_id=${selected_domain_id}&category_id=${selected_category_id}`);
      const moduleFeatures = response?.data?.modules_features || [];
      
      return {
        props: {
          moduleFeatures
        },
        revalidate: 60 // Adjust the revalidation period as needed
      };
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return {
        props: {
          moduleFeatures: []
        },
        revalidate: 60
      };
    }
  }
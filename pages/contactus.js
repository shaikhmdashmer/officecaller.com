
import Head from 'next/head'
import Image from 'next/image'
import Headercustom from '../components/Headercustom'
import Footermain from '../components/Footermain'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";
import PhoneInput from 'react-phone-input-2'



export default function Contact() {
  const router = useRouter();
  const QuryUrl = useRouter();
  
  const UTM = router.query.utm_source;
  const liveUrl = QuryUrl.query.pageslug;
 
  const liveUrlinital = QuryUrl.pathname;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [message, setMessage] = useState("");
  const [getLoader, setLoader] = useState(false);
  const [userMsg, setuserMsg] = useState("");
  const [userLive, setLiveLocation] = useState();
  const [Service, setService] = useState();
  const [subject , setSubject] = useState();

  const [dropDownForm, setDropDown] = useState();

  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState('');


  const [selectedOption, setSelectedOption] = useState('');
  const [otherInputVisible, setOtherInputVisible] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (value === 'Other') {
      setOtherInputVisible(true);
    } else {
      setOtherInputVisible(false);
      setOtherInputValue(e.target.value);
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInputValue(e.target.value);
  };

  
  // const [recaptchaToken, setRecaptchaToken] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Fetch IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();

        // Fetch location data using the IP address
        const response = await fetch(`https://api.ipstack.com/${ipData.ip}?access_key=82ef51789ae7b253f10d71b6885bade5`);
        const userIP = await response.json();

        // Update state with location data
        setLiveLocation(userIP);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();
  }, [])

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    setLoader(true);
    setuserMsg("Loading...........")
    console.log("Sending");
    await fetch("https://phonebook.redbytes.in/api/create_email_inquiry/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: name,
        user_mail: email,
        user_location: userLive ? userLive.city: "Na",
        page_location: liveUrl ? liveUrl : liveUrlinital,
        country_code: userLive ? userLive.location.calling_code : "Na",
        user_mobile: phoneField,
        user_message: message,
        user_subject:  subject,
        inquiry_through: UTM ? UTM : "No UTM",
        website_source: "officecaller.com",
        apikey: "7dac0fcac909b349",
        // recaptchaToken: recaptchaToken,
        Service:Service
      }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        mailFunction()
      } else {
        console.log("Something went wrong...please check");
        setLoader(false);
      }
    });
  };


  const mailFunction = async () => {
    const requestData = {
      name: name,
      email: email,
      pageURL: "officecaller.com",
    };

    try {
      const response = await fetch('https://costcalculator.redbytes.in:3012/send-feedback-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      setuserMsg("Check You Email");
      router.push("/thank-you"); 
      // console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://wp.redbytes.in/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query NewQuery {
              contactformdropdowns(first: 50) {
                nodes {
                  title
                  contacformdropdownredio {
                    contacformdropdownredio
                  }
                }
              }
            }
            `,
          }),
        });

        const responseData = await response.json();
        const fiterDRArray = responseData?.data?.contactformdropdowns?.nodes?.filter(data => data.title == 'officecaller.com')
        console.log("fiterDRArray", fiterDRArray)
        setDropDown(fiterDRArray[0].contacformdropdownredio);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <Head>
        <title>Contact Office Caller</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headercustom />

    <>
      <div className="contact-form">
        <form
          onSubmit={(e) => {
            handleSubmit3(e);
          }}
          
        >
          <div className="container">
            <h4 className="text-center">QUICK CONTACT</h4>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="form-group my-2 has-validation">
                  <input
                    required
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control  mb-3"
                    placeholder="Enter your name"
                  />
                  <div className="invalid-feedback">Please type your Name</div>
                </div>
                <div className="form-group my-2 has-validation">
                  <input
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control  mb-3"
                    placeholder="Enter your email address"
                  />
                  <div className="invalid-feedback">
                    Please enter valid email address
                  </div>
                </div>
                <div className="form-group my-2 has-validation">
                <PhoneInput
                     country={userLive ? userLive.country_code.toLowerCase() : ''}
                      enableSearch={true}
                      type="text"
                      id="phonefield"
                      name="phonefield"
                      aria-describedby="inputGroupPrepend"
                      onChange={(e) => setPhoneField(e)}
                      placeholder="Phone Number"
                      required
                    />
                </div>

                <div className="form-group my-2 has-validation">
                <select className="form-control mediaWay mb-3" onChange={handleSelectChange}>
                    <option selected disabled>Subject</option>
                    {dropDownForm?.contacformdropdownredio.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {otherInputVisible && (
                    <input
                      type="text"
                      className="form-control other-sbj form-group my-2 has-validation"
                      placeholder="Enter other subject"
                      value={otherInputValue}
                      onChange={handleOtherInputChange}
                    />
                  )}
                </div>

                <div className="form-group my-2 has-validation">
                  <textarea
                    required
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control mb-3"
                    rows="5"
                    placeholder="Enter your Message..."
                  ></textarea>
                  <div className="invalid-feedback">Please enter message</div>
                </div>

              

                <div className="submitBtn">
                  <button
                    type="submit"
                    className="btn btn-primary btn-rounded edsys-btn "
                    disabled={getLoader}
                  >
                    Submit 
                  </button>
                </div>
                <br />
                {getLoader && <div className="loader"></div>}
                <strong className="text-center">{userMsg}</strong>
                <br />
              </div>

            </div>
          </div>
        </form>
      </div>
    </>



      <Footermain />
    </>
  )
}

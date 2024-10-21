import React, { useEffect, useState } from "react";
import BackSvg from '@/public/chat-icon/assets/icons/back.svg'
import PhoneInput from "react-phone-input-2";
import ErrorMsg from "./ErrorMsg";

export default function Enquirychat({ handleBack,setShowHeader,setShowChatApi,showChatScreen, setIsChatLoginPresent}) {

  const [TypeData, setType] = useState()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [hideData , setHideData] = useState(false);
  const [getOTP, setOtp] = useState();
  const [colorSettings, setColorSettings] = useState(null);


  useEffect(()=>{
   const ThemeData = JSON.parse(localStorage.getItem("ColorTheme"));
   console.log("Theme-data" , ThemeData)
   setColorSettings(ThemeData)
  },[])



  const handleSubmit3 = async (e) => {

    e.preventDefault();

    if (!name.trim()) {
      setUserMsg("Please enter your name.");

      return;
    }
    if (!email.trim()) {
      setUserMsg("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setUserMsg("Please enter a valid email address.");
      return;
    }
    if (!phoneField.trim()) {
      setUserMsg("Please enter your mobile number.");
      return;
    }


    setLoading(true);
    setUserMsg("Loading...");


    const url = 'https://costcalculator.redbytes.in:3012/chatbot-verification/send-otp';
    const requestBody = {
      number: `+${phoneField}`,
      domain: 'vehicletracking.qa'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      setUserMsg(data.message);
      setHideData(true)
     
    } catch (error) {
      console.error('Error:', error);
    }

  };



  const handleSubmitOTP = async (e) => {
    e.preventDefault();
   
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const response = await fetch(`https://api.ipstack.com/${ipData.ip}?access_key=82ef51789ae7b253f10d71b6885bade5`);
    var userIP = await response.json();

  
    setUserMsg("Loading......");
    const url = 'https://costcalculator.redbytes.in:3012/chatbot-verification/verify-otp';
    const requestBody = {
      name: name,
      email: email,
      number: `+${phoneField}`,
      otp: getOTP,
      domain: 'vehicletracking.qa',
      utmSource: 'VT_Chat_Bot',
      country: userIP ? userIP?.country_name  : "NA",
      city: userIP ? userIP?.city : "NA"
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
          // console.log('Success:', data);
            setUserMsg(data.message);
            setShowHeader(false)
            setShowChatApi(true)
            showChatScreen(true);
            setIsChatLoginPresent(true)
            // const UserLogin = data.message
            const userNumber = `+${phoneField}`;
            localStorage.setItem("chatLogin", true);
            localStorage.setItem("UserMobile" ,userNumber)

      // alert("sussefully")
    } catch (error) {
      console.error('Error:', error);
      setUserMsg(error.message);
    }
  }










  // Email validation function
  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };



  return (
    <>
      <div className="paddingRigth-20px" style={{paddingTop:"70px"}}>
          <div className="container">
             <div className="backbtn" onClick={handleBack} style={{backgroundColor:colorSettings?.data?.primary_background_color }}>
               <i class="fa fa-arrow-left" aria-hidden="true"></i>
             </div>
           <div>
      {hideData == false && (
        <>
        <p className='user-txt-one'>How would you like us to call you</p>
        <form onSubmit={handleSubmit3} noValidate>
          <div className="mt-3">
            <input
              className="rounded-pill input_placeholder w-100 p-inputtext p-component p-variant-filled"
              required
              placeholder="Name*"
              data-pc-name="inputtext"
              data-pc-section="root"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="rounded-pill input_placeholder w-100 p-inputtext p-component p-variant-filled"
              type="email"
              placeholder="Email*"
              data-pc-name="inputtext"
              data-pc-section="root"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3 select-form rounded-pill">
            <PhoneInput
              className="rounded-pill input_placeholder w-100 no-spinner p-inputtext p-component p-variant-filled"
              country={"in"}
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

          <div className="d-flex justify-content-center send-otp">
            <button
              aria-label="Send OTP"
              className="button w-75 p-button p-component btn-chat "
              style={{ height:'35px',backgroundColor:colorSettings?.data?.primary_background_color ,border: `1px solid ${colorSettings?.data?.primary_background_color}`}}
              data-pc-name="button"
              data-pc-section="root"
            >
              <span className="p-button-label p-c" data-pc-section="label">Send OTP</span>
            </button>
          </div>
        </form>
        </>
      )}
    </div>



        {/* OTP Verification */}
        {hideData == true && (
        <form onSubmit={handleSubmitOTP} noValidate>
          <div className="mt-3">
            <input className="rounded-pill input_placeholder w-100 p-inputtext p-component p-variant-filled"
              type="number"
              placeholder="Enter otp*"
              data-pc-name="inputtext"
              data-pc-section="root"
              value={getOTP}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center send-otp">
            <button type="submit" className="button w-75 p-button p-component btn-chat" style={{backgroundColor:colorSettings?.data?.primary_background_color ,border: `1px solid ${colorSettings?.data?.primary_background_color}` ,height:"35px"}}>
              <span className="p-button-label p-c" data-pc-section="label">Submit OTP </span>
            </button>
          </div>
        </form>
         )}
        
        <p className="txt-fdbck"
        style={{color:colorSettings?.data?.primary_background_color }}
        >{userMsg}</p>

      </div>
      </div>
    </>
  )
}

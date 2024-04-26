
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ContactFormFooter() {
    const QuryUrl = useRouter();
    const router = useRouter();
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
    
    // const [recaptchaToken, setRecaptchaToken] = useState(null);
  
    useEffect(() => {
      fetch("https://api.testreveal.com:3013/api/get-client-location")
        .then((response) => response.json())
        .then((data) => {
          console.log("UserLocation", data);
          setLiveLocation(data);
        })
        .catch((error) => console.log(error));
    }, []);
  
    const handleSubmit3 = async (e) => {
      e.preventDefault();
      setLoader(true);
  
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
          inquiry_through: UTM ? UTM : "No UTM",
          website_source: "Office Caller",
          apikey: "7dac0fcac909b349",
          // recaptchaToken: recaptchaToken,
          Service:Service
        }),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setuserMsg(
            ""
          );
          setLoader(false);
           router.push("/thank-you"); // Replace "/next-page-url" with your actual next page URL
        } else {
          console.log("Something went wrong...please check");
          setLoader(false);
        }
      });
    };
  

  return (
    <>
      <div className="">
        <form
          onSubmit={(e) => {
            handleSubmit3(e);
          }}
        >
          <div className="container">
            <h4 className="text-center">QUICK CONTACT</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group my-2 has-validation ">
                  <input
                    required
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control   mb-3"
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
                    className="form-control   mb-3"
                    placeholder="Enter your email address"
                  />
                  <div className="invalid-feedback">
                    Please enter valid email address
                  </div>
                </div>
                <div className="form-group my-2 has-validation">
                  <input
                    required
                    name="text"
                    onChange={(e) => setPhoneField(e.target.value)}
                    type="tel"
                    inputMode="numeric"
                    minLength="9"
                    maxLength="13"
                    className="form-control mediaWay mb-3"
                    placeholder="Enter your Phone No."
                  />
                  <div className="invalid-feedback">Please enter phone no.</div>
                </div>

                <div className="form-groupcon">
                <select
                  className="form-control form_bgnd "
                  onChange={(e) => setService(e.target.value)}
                >
                  <option>Subject</option>
                  <option>NO Subject</option>
                  <option>Subject</option>
               
                </select>
                <RiArrowDropDownLine className="caret-icon" />
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
                  >
                    Submit <i className="fa fa-arrow-right"></i>
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
  );
}

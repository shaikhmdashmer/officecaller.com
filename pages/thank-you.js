import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const thankyou = () => {
  return (
    <>
      <div className="innerpages-maintop-banner pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center ">
              <h1>Thank You</h1>
              <p>
                We appreciate you taking the time. Our team will promptly reply
                to your inquiry.
              </p>

              <div className="submitBtnz-div">
                <Link
                  href="/"
                  className="submitBtnz-thank align-items-center text-decoration-none"
                >
                  <FaArrowLeft className="me-2 thank-white" />
                  <span className="thank-white"> Back</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 pt-4">
              <div className="innerpages-maintop-banner-imgwith-mask">
                <img
                src="/images/callillustrator.svg" alt="StrippedString"
                
                  className="thanks-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default thankyou;

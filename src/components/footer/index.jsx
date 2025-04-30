import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import refImage from "../../assets/ref.avif";
import safeImage from "../../assets/safe.svg";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-4 border-top mt-20">
      <hr className="border-gray-100 mt-5" />
      <div
        className="container"
        style={{ maxWidth: "1500px", padding: "0 50px" }}
      >
        <div className="row">
          <h2 className="text-danger fw-bold mb-4 pt-4">B O X T</h2>
          <div className="col-md-8 mb-4">
            <p className="mb-3 font-size-12 text-muted font-weight-small">
              ©2025 BOXT Limited. All rights reserved.
            </p>
            <p
              className="small text-muted"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              BOXT Limited is authorised and regulated by the Financial Conduct
              Authority. FCA register No. 767308. Finance is offered through
              Novuna Consumer Finance and HomeServe Finance; in some cases we
              also lend with Propensio Finance Limited. Finance available
              subject to status. Terms and conditions apply. BOXT Limited acts
              as a credit broker and is not a lender. Any credit is subject to
              status, affordability and a credit check. Registered in England &
              Wales company No. 08086606 VAT No. 257059782. BOXT Limited, 3320
              Century Way, Thorpe Park, Leeds, West Yorkshire, LS15 8ZB.
            </p>
            <div className="d-flex gap-3 mt-4 flex-wrap">
              {[
                { Icon: FaFacebookF, color: "#1877F2" }, // Facebook Blue
                { Icon: FaInstagram, color: "#E4405F" }, // Instagram Pink
                { Icon: FaLinkedinIn, color: "#0077B5" }, // LinkedIn Blue
                { Icon: FaXTwitter, color: "#000000" }, // Twitter (X) Black
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className="d-flex align-items-center justify-content-center border border-dark rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    color,
                    textDecoration: "none",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                {[
                  "FAQs",
                  "Contact us",
                  "BOXT Trustpilot",
                  "Terms & Conditions",
                  "Complaints",
                  "Finance",
                  "Careers",
                ].map((item, idx) => (
                  <p key={idx} className="mb-2" style={{ lineHeight: "2.0" }}>
                    <a
                      href="#"
                      className="text-decoration-none text-dark small d-block"
                    >
                      {item}
                    </a>
                  </p>
                ))}
              </div>
              <div className="col-12 col-md-4 mb-4">
                {[
                  "Refer a friend",
                  "Cookies policy",
                  "Privacy policy",
                  "Modern Slavery Statement",
                  "Become an engineer",
                ].map((item, idx) => (
                  <p key={idx} className="mb-2" style={{ lineHeight: "2.0" }}>
                    <a
                      href="#"
                      className="text-decoration-none text-dark small d-block"
                    >
                      {item}
                    </a>
                  </p>
                ))}
              </div>
              <div className="col-12 col-md-4 d-flex flex-column align-items-start mt-2">
                <img src={safeImage} alt="Gas Safe" style={{ width: "80px" }} />
                <img
                  src={refImage}
                  alt="Refcom"
                  className="mt-3"
                  style={{ width: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

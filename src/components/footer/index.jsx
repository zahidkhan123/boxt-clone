import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import refImage from '../../assets/ref.avif';
import safeImage from '../../assets/safe.svg';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5 border-top">
      <div className="container-fluid px-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-7 mb-4 text-start gap-3" style={{ minHeight: '400px' }}>
            <h2 className="text-danger fw-bold">BOXT</h2>
            <p className="mb-1">©2025 BOXT Limited. All rights reserved.</p>
            <p className="small text-muted" style={{ maxWidth: '900px' }}>
              BOXT Limited is authorised and regulated by the Financial Conduct Authority. FCA register No. 767308.
              Finance is offered through Novuna Consumer Finance and HomeServe Finance; in some cases we also lend with
              Propensio Finance Limited. Finance available subject to status. Terms and conditions apply. BOXT Limited
              acts as a credit broker and is not a lender. Any credit is subject to status, affordability and a credit
              check. Registered in England & Wales company No. 08086606 VAT No. 257059782. BOXT Limited, 3320 Century
              Way, Thorpe Park, Leeds, West Yorkshire, LS15 8ZB.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaLinkedinIn size={20} /></a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5 d-flex flex-column flex-md-row justify-content-between">
            {/* Links Block 1 */}
            <div className="mb-4 text-start">
              <p><a href="#" className="text-decoration-none text-dark">FAQs</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Contact us</a></p>
              <p><a href="#" className="text-decoration-none text-dark">BOXT Trustpilot</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Terms & Conditions</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Complaints</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Finance</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Careers</a></p>
            </div>

            {/* Links Block 2 & Images */}
            <div className="text-start">
              <p><a href="#" className="text-decoration-none text-dark">Refer a friend</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Cookies policy</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Privacy policy</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Modern Slavery Statement</a></p>
              <p><a href="#" className="text-decoration-none text-dark">Become an engineer</a></p>
            </div>

            {/* Images Section - Now Vertical */}
            <div className="d-flex flex-column gap-3">
              <img
                src={refImage}
                alt="illustration"
                className="img-fluid" 
                style={{ maxWidth: '80px' }}
              />
              <img
                src={safeImage}
                alt="illustration"
                className="img-fluid" 
                style={{ maxWidth: '80px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

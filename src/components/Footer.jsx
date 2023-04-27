import React from "react";
import footerLogo from "../assets/img/footer_logo.png";
import { LineArrow } from "./Icons";
const Footer = () => {
  return (
    <>
      <div className=" container">
      <div className="row justify-content-between pt-5">
        <div className="col-6 col-sm-auto">
          <img className="footer_logo" src={footerLogo} alt="footerLogo" />
          <a
            className="text_white fs_sm text-decoration-none fw-semibold d-block mt-2"
            href="mailto:info@catalyzeai.com"
          >
            info@catalyzeai.com
          </a>
          <a
            className="text_white fs_sm text-decoration-none fw-semibold"
            href="tel:+941 867-1761"
          >
            (941) 867-1761
          </a>
        </div>
        <div className="col-6 col-sm-auto">
          <p className="text_white fs_sm fw-semibold mb-xl-4">
            Financial Services
          </p>
          <a
            className="text_white fs_sm fw-normal mb-2 pb-xl-1 d-block text-decoration-none"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="fw-normal text_white fs_sm text-decoration-none"
            href="#blog"
          >
            Blog
          </a>
        </div>
        <div className="col-6 mt-4 mt-sm-0 col-sm-auto">
          <p className="text_white fs_sm fw-semibold mb-xl-4">Real Estate </p>
          <a
            className="text_white fs_sm fw-normal mb-2 pb-xl-1 d-block text-decoration-none"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="fw-normal text_white fs_sm text-decoration-none"
            href="#blog"
          >
            Blog
          </a>
        </div>
        <div className="col-6 mt-4 mt-sm-0 col-sm-auto">
          <a
            className="fs_sm fw-semibold text-decoration-none text_white"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
          <div className="col-6 col-sm-auto col-xl-2 text-end text-md-start mt-3 mt-sm-0 vert-move">
         
              <LineArrow />
          
        </div>
        <div className="row text-center text-sm-start gap-3 gap-sm-0 justify-content-between mt-4 mt-sm-5">
          <div className="col-sm-4 col-lg-auto">
            <p className="fs_xs fw-normal text_white opacity_07 mb-0">
              All rights reserved.©20022 Catalyze AI
            </p>
          </div>
          <div className="col-sm-3 col-lg-auto text-nowrap">
            <p className="fs_xs fw-normal text_white opacity_07 mb-0">
              Do not sell my data{" "}
            </p>
          </div>
          <div className="col-sm-5 col-md-auto col-lg-auto col-xl-5 d-flex justify-content-center gap-4 gap-xl-5 text-nowrap">
            <a
              className="fs_xs text_white text-decortion-none opacity_07"
              href="/terms-conditions"
            >
              Terms & Conditions
            </a>
            <a
              className="fs_xs text_white text-decortion-none opacity_07"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        </div>
        </div>
    </>
  );
};
export default Footer;












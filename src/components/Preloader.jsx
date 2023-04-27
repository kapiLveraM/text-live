import React from "react";
import logo from "../assets/img/header_logo.png";

const PreLoader = () => {
  return (
    <>
      <div className="loading d-flex justify-content-center align-items-center page_logo">
        <img src={logo} alt="logo" className=" preloder_logo" />
      </div>
    </>
  );
};

export default PreLoader;

import React from "react";
import InputForm from "../../component/inputForm";

import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://uploads-ssl.webflow.com/63ec206c5542613e2e5aa784/6406cfe73156a7b6c19856ea_bg%20contact-transcode.webm" type="video/webm" />
      </video>
      
      <div className="grid grid-cols-2 gap-4 px-0 backdrop-blur-md ">
      <div className="h-full w-full p-6 ">
        <div className="h-full w-full rounded-md flex items-center justify-center p-4 text-white font-poppins text-4xl">
          <h1>We're here to support your credit needs.</h1>
        </div>
      </div>
      <div className=" w-3/4 item bg-slate-900   flex flex-col gap-8  backdrop-blur-md rounded-2xl mt-12 p-8  text-white text-xl">
        <InputForm label="Name" isiInput="Enter your name" />
        <InputForm label="Age" isiInput="Enter Your age" />
        <InputForm label="Your Job" isiInput="Enter Your job" />
        <InputForm label="Electric Bill" isiInput="Monthly Electricity Bill Amount." />
        <InputForm label="Credit History" isiInput="Enter your Credit" />
        <InputForm label="Debt" isiInput="If you have Debt" />
        <div>
          <button className="rounded-full bg-sky-800 w-32 h-8 mt-5">Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default index;

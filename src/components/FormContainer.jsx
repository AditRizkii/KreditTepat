import React from "react";

import GetStarted from "./GetStarted";
import { logoBlack, robot } from "../assets";
import styles from "../style";
import Form from "./Form";

const FormContainer = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col font-poppins ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 hidden md:flex`}
      >
        <img
          src={robot}
          alt="robot-hand"
          className="w-11/12 h-auto md:w-11/12 md:h-auto rounded-3xl"
        />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="w-full h-fit bg-white absolute z-10 mt-[650px] mr-5 xs:mt-[600px] ss:mt-[500px] md:mt-0 rounded-3xl">
          <div className="w-full flex justify-center my-4">
            <img
              src={logoBlack}
              alt="kredittepat-logo"
              className="w-[124px] h-[32px]"
            />
          </div>

          {/* formnya */}
          <Form />
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default FormContainer;

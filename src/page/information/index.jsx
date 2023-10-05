import React from "react";

import { FormContainer, Navbar } from "../../components";
import styles from "../../style";

const index = () => {
  return (
    <div className=" bg-transparent w-full h-screen">
      <video
        className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://uploads-ssl.webflow.com/63ec206c5542613e2e5aa784/6406cfe73156a7b6c19856ea_bg%20contact-transcode.webm"
          type="video/webm"
        />
      </video>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-transparent ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default index;

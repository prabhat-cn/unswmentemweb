import React, { Fragment } from "react";
import ScrollAnimation from 'react-animate-on-scroll';


const OurVision = ({ visionData, id }) => {
  return (
    <>
      <section className="we_do_sec1">
        <div className="container">
          <div className="row m-0 justify-content-center align-items-center">
            <div className="col-12 col-lg-5 col-md-6 we_do_text">
              <ScrollAnimation animateIn="fadeInDown">
                <h1 style={{ textTransform: "uppercase" }}>
                  {visionData?.ourVisionHead}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p>{visionData?.ourVisionDetails?.ourVisionDetails}</p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-5 col-md-6">
            <ScrollAnimation animateIn="fadeInRight">
              <img
                src={visionData?.ourVisionImage?.file?.url}
                alt={visionData?.ourVisionHead}
                className="w-100"
              />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;

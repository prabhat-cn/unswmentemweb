import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const MentemInsights = ({ mentemInsData }) => {
  return (
    <>
      <section className="men_teme">
        <div className="container">
          <div className="row page_title justify-content-center">
            <ScrollAnimation animateIn="fadeInDown">
              <h1 style={{ textTransform: "uppercase" }}>
                {mentemInsData?.mentemsInsightsTitle}
              </h1>
            </ScrollAnimation>
          </div>
          <div className="row m-0 justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-5 mentem_sec">
              <ScrollAnimation animateIn="fadeInDown">
                <img alt="" src={mentemInsData?.insightImage1?.file?.url} />
                <p>{mentemInsData?.insightImageDetails1?.insightImageDetails1}</p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-5 mentem_sec">
              <ScrollAnimation animateIn="fadeInRight" delay="100">
                <img alt="" src={mentemInsData?.insightImage2?.file?.url} />
                <p>{mentemInsData?.insightImageDetails2?.insightImageDetails2}</p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-5 mentem_sec">
              <ScrollAnimation animateIn="fadeInLeft" delay="500">
                <img alt="" src={mentemInsData?.insightImage3?.file?.url} />
                <p>{mentemInsData?.insightImageDetails3?.insightImageDetails3}</p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-5 mentem_sec">
              <ScrollAnimation animateIn="fadeInUp" delay="200">
                <img alt="" src={mentemInsData?.insightImage4?.file?.url} />
                <p>{mentemInsData?.insightImageDetails4?.insightImageDetails4}</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentemInsights;

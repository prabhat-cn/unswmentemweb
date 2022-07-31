import React, { Fragment } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const UnswAwards = ({ homeAwards }) => {
  const { awardHead, awardImages } = homeAwards;
  return (
    <>
      <section className="unsw_award">
        <div className="container">
          <div className="row m-0 page_title justify-content-center">
            {awardHead?.nodes?.map(adData => (
              <Fragment key={adData?.id}>
                <ScrollAnimation animateIn="fadeInDown">
                <h1>{adData?.awardTitle}</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown">
                <p>{adData?.awardsDescription?.awardsDescription}</p>
                </ScrollAnimation>
              </Fragment>
            ))}
          </div>
          <ScrollAnimation animateIn="zoomIn">
            <div className="hz_border"></div>
          </ScrollAnimation>
          <div className="row m-0">
            {awardImages?.nodes?.map(imgData => (
              <Fragment key={imgData.id}>
                <div className="col-12 col-lg-3 col-md-6 awar_text">
                  <ScrollAnimation animateIn="zoomIn">
                  <div className="Aws_div">
                    <h1><ScrollAnimation animateIn="zoomIn" delay="500">{imgData?.awardTitle}</ScrollAnimation></h1>
                  </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInDown" delay="1000">
                  <p>{imgData?.awardDescription?.awardDescription}</p>
                  </ScrollAnimation>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UnswAwards;

import React, { Fragment } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const WhySection = ({ homePageWhyData }) => {
  const whyData = homePageWhyData?.allContentfulHomeBannerBottom?.nodes;
  return (
    <>
      <section className="why_sec">
        <div className="container">
          <div className="row m-0 justify-content-between align-items-center">
            {whyData?.map(wData => (
              <Fragment key={wData?.id}>
                <div className="col-12 col-lg-4 page_title">
                  <ScrollAnimation animateIn="fadeInDown">
                    <h2>{wData?.thisIsWhy}...</h2>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <p>{wData?.thisWhyDescription?.thisWhyDescription}</p>
                  </ScrollAnimation>
                </div>
                <div className="col-12 col-lg-7 counter_sec">
                    <div className="count_tex">
                      <ScrollAnimation animateIn="fadeInLeft" delay="500">
                        <h3>{wData?.counter1Name}</h3>
                        <p>{wData?.counter1Description?.counter1Description}</p>
                      </ScrollAnimation>
                    </div>
                  <div className="count_tex">
                    <ScrollAnimation animateIn="fadeInLeft" delay="1000">
                      <h3>{wData?.counter2Name}</h3>
                      <p>{wData?.counter2Description?.counter2Description}</p>
                    </ScrollAnimation>
                  </div>
                  <div className="count_tex">
                    <ScrollAnimation animateIn="fadeInLeft" delay="1500">
                      <h3>{wData?.counter3Name}</h3>
                      <p>{wData?.counter3Description?.counter3Description}</p>
                    </ScrollAnimation>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySection;

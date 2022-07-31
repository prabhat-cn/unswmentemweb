import React, { Fragment } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const BannerAction = ({ bannerData, id }) => {
  return (
    <>
      <section className="banner_sec inner_banner pb-1">
        <div className="container">
          <div className="row m-0">
            <div className="col-12 text-center">
              <Fragment key={id}>
                <ScrollAnimation animateIn="fadeInDown">
                  <h1>{bannerData?.whoAreWe}</h1>
                </ScrollAnimation>
              </Fragment>
              <ScrollAnimation animateIn="zoomIn">
                <div className="hz_border"></div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAction;

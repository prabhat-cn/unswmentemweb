import { Link } from "gatsby";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const SolBanner = ({ solBanData }) => {
  return (
    <>
      <section className="banner_sec inner_banner">
        <div className="container">
          <div className="row m-0">
            <div className="col-12 text-center">
              <ScrollAnimation animateIn="fadeInDown">
                <h1>{solBanData?.solutionBannerTitle}</h1>
              </ScrollAnimation>
            </div>
            <div className="drop_scroll">
              <a href="javascript:void(0)"
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: 200,
                  behavior: "smooth",
                })
              }>
              <ScrollAnimation animateIn="zoomIn">
                <img
                  alt=""
                  src="/assets/img/drop_cercle.png"
                  className="bounce"
                />
                </ScrollAnimation>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolBanner;

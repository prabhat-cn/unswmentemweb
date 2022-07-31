import { Link } from "gatsby";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const MeetBannerAction = ({ teamBannerTitle }) => {
  return (
    <>
      <section className="banner_sec inner_banner">
        <div className="container">
          <div className="row m-0">
            <div className="col-12 text-center">
              <ScrollAnimation animateIn="fadeInDown">
                <h1>{teamBannerTitle?.meetTheTeamTitle}</h1>
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
                <img
                  alt=""
                  src="/assets/img/drop_cercle.png"
                  className="bounce"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetBannerAction;

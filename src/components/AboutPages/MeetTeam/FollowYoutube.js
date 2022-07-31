import { Link } from "gatsby";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const FollowYoutube = () => {
  return (
    <>
      <div className="row m-0 page_title justify-content-center">
        <ScrollAnimation animateIn="fadeInUp">
          <h1>FOLLOW OUR YOUTUBE CHANNEL</h1>
        </ScrollAnimation>
      </div>

      <div className="row blog_card">
        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <Link to="">
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
            </ScrollAnimation>
          </Link>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <Link to="">
          <ScrollAnimation animateIn="fadeInLeft" delay="500">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
            </ScrollAnimation>
          </Link>
        </div>
        <div className="col-12 col-lg-4 col-md-6 mb-4">
          <Link to="">
          <ScrollAnimation animateIn="fadeInLeft" delay="1000">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
            </ScrollAnimation>
          </Link>
        </div>

        <div className="d-flex justify-content-center">
          <ScrollAnimation animateIn="zoomIn">
            <Link className="demo_btn3 btn" to="#">
              Request a demo today
            </Link>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default FollowYoutube;

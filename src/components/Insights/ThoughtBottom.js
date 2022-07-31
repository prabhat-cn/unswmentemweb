import { Link } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./thumbSwiperStyle.css";
import { Navigation, Thumbs, FreeMode } from "swiper";
import ScrollAnimation from "react-animate-on-scroll";
import YoutubeSlide from "./YoutubeSlide";

const ThoughtBottom = ({ insightsData }) => {
  return (
    <>
      {/* end */}
      <section className="blog_sec">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            <div className="row justify-content-center">
              <img
                alt=""
                src="/assets/img/insight_pic.png"
                className="insight_pic"
              />
            </div>
          </ScrollAnimation>
          <div className="row m-0 page_title justify-content-center">
            <ScrollAnimation animateIn="fadeInDown">
              <h1>FOLLOW OUR YOUTUBE CHANNEL</h1>
            </ScrollAnimation>
          </div>

          <div className="row video_section">
            <YoutubeSlide />
          </div>

          {/* Linkedin Blog */}
          <div className="row blog_card">
            <div className="col-12 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInLeft" delay="100">
                <Link to="">
                  <div className="card">
                    <img alt="" src="/assets/img/hw1.png" />
                    <div className="card-body">
                      <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est eopksio
                        laborum.
                      </p>
                      <span>
                        <small>linkedin.com</small>{" "}
                        <small className="ps-4">
                          <img alt="" src="/assets/img/clock.png" /> 1h ago
                        </small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInLeft" delay="500">
                <Link to="">
                  <div className="card">
                    <img alt="" src="/assets/img/hw1.png" />
                    <div className="card-body">
                      <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est eopksio
                        laborum.
                      </p>
                      <span>
                        <small>linkedin.com</small>{" "}
                        <small className="ps-4">
                          <img alt="" src="/assets/img/clock.png" /> 1h ago
                        </small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInLeft" delay="1000">
                <Link to="">
                  <div className="card">
                    <img alt="" src="/assets/img/hw1.png" />
                    <div className="card-body">
                      <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est eopksio
                        laborum.
                      </p>
                      <span>
                        <small>linkedin.com</small>{" "}
                        <small className="ps-4">
                          <img alt="" src="/assets/img/clock.png" /> 1h ago
                        </small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInLeft" delay="1500">
                <Link to="">
                  <div className="card">
                    <img alt="" src="/assets/img/hw1.png" />
                    <div className="card-body">
                      <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est eopksio
                        laborum.
                      </p>
                      <span>
                        <small>linkedin.com</small>{" "}
                        <small className="ps-4">
                          <img alt="" src="/assets/img/clock.png" /> 1h ago
                        </small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInLeft" delay="2000">
                <Link to="">
                  <div className="card">
                    <img alt="" src="/assets/img/hw1.png" />
                    <div className="card-body">
                      <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est eopksio
                        laborum.
                      </p>
                      <span>
                        <small>linkedin.com</small>{" "}
                        <small className="ps-4">
                          <img alt="" src="/assets/img/clock.png" /> 1h ago
                        </small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-4 mb-4">
              <ScrollAnimation animateIn="fadeInLeft" delay="2500">
                <Link to="">
                  <div className="card">
                    <img alt="" src="/assets/img/hw1.png" />
                    <div className="card-body">
                      <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est eopksio
                        laborum.
                      </p>
                      <span>
                        <small>linkedin.com</small>{" "}
                        <small className="ps-4">
                          <img alt="" src="/assets/img/clock.png" /> 1h ago
                        </small>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
          <div className="d-flex justify-content-center col-12">
            <ScrollAnimation animateIn="fadeInUp">
              <Link className="demo_btn3 btn" to="">
                Show More
              </Link>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn="zoomIn">
            <div className="hz_border"></div>
          </ScrollAnimation>
          <div className="col-12 text-center">
            <ScrollAnimation animateIn="fadeIn">
              <img alt="" src="/assets/img/univ_logo1.png" />
            </ScrollAnimation>
            <div className="col-12">
              <ScrollAnimation animateIn="fadeInUp">
                <Link className="demo_btn3 btn" to="">
                  Visit UNSW website
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      {/* Video Modal */}
      <div
        className="modal fade"
        id="video_modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube-nocookie.com/embed/liAsT4DqalQ?start=5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThoughtBottom;

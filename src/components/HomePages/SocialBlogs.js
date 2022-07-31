import { Link } from "gatsby";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const SocialBlogs = () => {
  return (
    <>
      <section className="blog_sec">
        <div className="container">
          <div className="row m-0 page_title justify-content-center">
          <ScrollAnimation animateIn="fadeInDown">
            <h1>LATEST FROM LINKEDIN</h1>
            </ScrollAnimation>
          </div>
          <div className="row blog_card">
            <div className="col-12 col-lg-4 col-md-6 mb-3">
              <Link to="">
              <ScrollAnimation animateIn="fadeInLeft">
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
                </ScrollAnimation>
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-3 col-md-6">
              <Link to="">
              <ScrollAnimation animateIn="fadeInLeft" delay="500">
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
                </ScrollAnimation>
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-3 col-md-6">
              <Link to="">
              <ScrollAnimation animateIn="fadeInLeft" delay="1000">
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
                </ScrollAnimation>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialBlogs;

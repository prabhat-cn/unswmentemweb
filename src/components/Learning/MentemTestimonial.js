import { Link } from "gatsby";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollAnimation from 'react-animate-on-scroll';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./swiperstyle.css";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";

const MentemTestimonial = ({
  mentemAccessHead,
  mentemClient,
  specialiseHead,
  specialiseList,
}) => {
  const allSpecialiseList =
    specialiseList?.nodes?.length > 0
      ? [...specialiseList?.nodes].reverse()
      : [];
  return (
    <>
      <section className="testimonial_sec">
        <div className="container">
          <div className="row mb-5 page_title justify-content-center">
            {mentemAccessHead?.nodes?.map((data, indx) => {
              return (
                <Fragment key={indx}>
                  <ScrollAnimation animateIn="fadeIn">
                  <h1>{data?.mentemAccessHead}</h1>
                  </ScrollAnimation>
                </Fragment>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7">
            <ScrollAnimation animateIn="fadeIn">
              <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation, Keyboard]}
                keyboard={{
                  enabled: true,
                }}
                className="mySwiper"
              >
                {mentemClient?.nodes?.length > 0 &&
                  mentemClient?.nodes?.map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide">
                          <div className="slid_div">
                            <div>
                              <img
                                src={data.clientImage.file.url}
                                alt={data.clientName}
                              />
                            </div>
                            <div className="tt_text">
                              <h1>
                                {data.clientName}{" "}
                                <span>{data.clientDesignation}</span>
                              </h1>
                              <p>{data.clientDetails.clientDetails}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation animateIn="zoomIn">
          <div className="learning_border"></div>
          </ScrollAnimation>
          <div className="row mb-5 page_title justify-content-center">
            {specialiseHead?.nodes?.length > 0 &&
              specialiseHead?.nodes?.map((data, index) => {
                return (
                  <Fragment key={index}>
                    <ScrollAnimation animateIn="fadeInDown">
                    <h1>{data.weSpecialiseTitle}:</h1>
                    </ScrollAnimation>
                  </Fragment>
                );
              })}
            <ul className="we_sp_btn">
              {allSpecialiseList?.map((data, index) => {
                return (
                  <Fragment key={index}>
                    <li>
                    <ScrollAnimation animateIn="fadeIn"><Link to="#">{data.specialiseName}</Link></ScrollAnimation>
                    </li>
                  </Fragment>
                );
              })}
              <div className="we_step_btnImg">
              <ScrollAnimation animateIn="fadeIn">
                <img alt="" src="/assets/img/list_pic.png" />
                <Link to="#">SOCIAL LEARNING</Link>
                </ScrollAnimation>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentemTestimonial;

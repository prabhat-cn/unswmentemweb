import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperstyle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import Button from "react-bootstrap/Button";
import FormModal from "../Modal/FormModal";
import ScrollAnimation from "react-animate-on-scroll";

const Testimonials = ({ homeTestimonial, homeShow, learningShow }) => {
  const { testiTitle, testiIcon, testiDescription } = homeTestimonial;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <section className="testimonial_sec"> */}
      <section
        className={
          learningShow === true ? "testimonial_sec bg_light" : "testimonial_sec"
        }
      >
        <div className="container">
          <div className="row m-0 page_title justify-content-center">
            {testiTitle?.nodes?.map(data => (
              <Fragment key={data.id}>
                <ScrollAnimation animateIn="fadeInDown">
                  <h1 style={{ textTransform: "uppercase" }}>
                    {data.titleHead}
                  </h1>
                </ScrollAnimation>
              </Fragment>
            ))}
          </div>
          <div className="row">
            <ul className="provider_logo">
              {testiIcon?.nodes?.map(data => (
                <li key={data.id}>
                  <ScrollAnimation animateIn="fadeInDown">
                    <img alt="" src={data.icons.file.url} />
                  </ScrollAnimation>
                </li>
              ))}
            </ul>
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
                  {testiDescription?.nodes?.map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="swiper-slide">
                          <div className="slid_div">
                            <div>
                              <img alt="" src={data.clientImage.file.url} />
                            </div>
                            <div className="tt_text">
                              <h1>
                                {data.clientName}
                                <span>
                                  {data.jobTitle} {data.companyName}
                                </span>
                              </h1>
                              <p>{data.clientDescription.clientDescription}</p>
                              {/* <Link className="testi_btn btn" to="#">
                              Request a demo
                            </Link> */}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </ScrollAnimation>
            </div>

            {homeShow == true && (
              <div className="d-flex justify-content-center">
                <ScrollAnimation animateIn="fadeInDown">
                  <Button
                    className="demo_btn3 btn custom_btn"
                    onClick={handleShow}
                  >
                    Request a demo
                  </Button>
                </ScrollAnimation>
              </div>
            )}

            {learningShow == true && (
              <div className="d-flex justify-content-center">
                <ScrollAnimation animateIn="fadeInDown">
                  <Button
                    className="demo_btn3 btn custom_btn"
                    onClick={handleShow}
                  >
                    How can we help you?
                  </Button>
                </ScrollAnimation>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Modal Start */}
      <FormModal
        handleShow={handleShow}
        handleClose={handleClose}
        setShow={setShow}
        show={show}
      />
      {/* Modal End */}
      <style>{customCss}</style>
    </>
  );
};

export default Testimonials;
const customCss = `
.custom_btn {
  border-color: #BA61FF;
}
.custom_btn:focus{
  background: #BA61FF;
  border-color: #BA61FF;
  color: #fff;
}
.custom_btn:hover{
  background: #fff;
  border-color: #BA61FF;
  color: #000;
}
`;

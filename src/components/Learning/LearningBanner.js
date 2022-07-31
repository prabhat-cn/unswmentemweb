import { Link } from "gatsby";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormModal from "../Modal/FormModal";
import ScrollAnimation from 'react-animate-on-scroll';

const LearningBanner = ({ bannData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="banner_sec inner_banner">
        <div className="container">
          <div className="row m-0">
            <div className="col-12 text-center">
            <ScrollAnimation animateIn="fadeInDown">
              <h1>{bannData?.learnBannerTitle}</h1>
              </ScrollAnimation>
              {/* <Link className="get_btn btn" to="#">
                Get in touch
              </Link> */}
              <ScrollAnimation animateIn="zoomIn">
              <Button className="get_btn btn custom_btn" onClick={handleShow}>
                Get in touch
              </Button>
              </ScrollAnimation>
            </div>
            <div className="drop_scroll">
              <a href="javascript:void(0)"
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: 285,
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

export default LearningBanner;
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

import { Link } from "gatsby";
import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "react-bootstrap/Button";
import FormModal from "../../Modal/FormModal";

const OurValues = ({ valuesData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="unsw_award">
        <div className="container">
          <div className="row m-0 page_title justify-content-center">
            <ScrollAnimation animateIn="fadeInDown">
              <h1 style={{ textTransform: "uppercase" }}>
                {valuesData?.ourValues}
              </h1>
            </ScrollAnimation>
            {/* <Link className="demo_btn3 btn" to="#">
              {valuesData?.speakToUs}
            </Link> */}

            <div className="col-auto">
              <ScrollAnimation animateIn="fadeInDown">
                <Button
                  className="demo_btn3 btn custom_btn"
                  onClick={handleShow}
                >
                  {valuesData?.speakToUs}
                </Button>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row m-0">
            <ul className="we_doStep">
              <li>
                <div className="step_div">
                  <ScrollAnimation animateIn="fadeInLeft">
                    <img
                      alt={valuesData?.discover}
                      src={valuesData?.discoverImage?.file?.url}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="zoomIn">
                    <h6 style={{ textTransform: "uppercase" }}>
                      <span>01.</span>
                      {valuesData?.discover}
                    </h6>
                  </ScrollAnimation>
                </div>
              </li>
              <li>
                <div className="step_div">
                  <ScrollAnimation animateIn="fadeInRight">
                    <img
                      alt={valuesData?.design}
                      src={valuesData?.designImage?.file?.url}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="zoomIn">
                    <h6 style={{ textTransform: "uppercase" }}>
                      <span>02.</span>
                      {valuesData?.design}
                    </h6>
                  </ScrollAnimation>
                </div>
              </li>
              <li>
                <div className="step_div">
                  <ScrollAnimation animateIn="fadeInLeft">
                    <img
                      alt={valuesData?.develop}
                      src={valuesData?.developImage?.file?.url}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="zoomIn">
                    <h6 style={{ textTransform: "uppercase" }}>
                      <span>03.</span>
                      {valuesData?.develop}
                    </h6>
                  </ScrollAnimation>
                </div>
              </li>
              <li>
                <div className="step_div">
                  <ScrollAnimation animateIn="fadeInRight">
                    <img
                      alt={valuesData?.deliver}
                      src={valuesData?.deliverImage?.file?.url}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="zoomIn">
                    <h6 style={{ textTransform: "uppercase" }}>
                      <span>04.</span>
                      {valuesData?.deliver}
                    </h6>
                  </ScrollAnimation>
                </div>
              </li>
              <li>
                <div className="step_div">
                  <ScrollAnimation animateIn="fadeInLeft">
                    <img
                      alt={valuesData?.evaluate}
                      src={valuesData?.evaluateImage?.file?.url}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="zoomIn">
                    <h6 style={{ textTransform: "uppercase" }}>
                      <span>05.</span>
                      {valuesData?.evaluate}
                    </h6>
                  </ScrollAnimation>
                </div>
              </li>
            </ul>
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

export default OurValues;
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

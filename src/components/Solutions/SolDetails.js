import { Link } from "gatsby";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormModal from "../Modal/FormModal";
import ScrollAnimation from 'react-animate-on-scroll';

const SolDetails = ({ solBottomDetail }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="solutions_sec">
        <div className="container">
          <div className="row align-items-center s1_sec">
            <div className="col-12 col-lg-6 text-center">
              <ScrollAnimation animateIn="fadeInLeft">
                <img alt="" src="/assets/img/s_1.png" />
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6">
            <ScrollAnimation animateIn="fadeInRight">
              <p>{solBottomDetail?.bannerBottomDetails?.bannerBottomDetails}</p>
              <Button
                className="demo_btn3 btn mt-4 custom_btn"
                onClick={handleShow}
              >
                {solBottomDetail?.speakToUsButton}
              </Button>
              </ScrollAnimation>
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

export default SolDetails;
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

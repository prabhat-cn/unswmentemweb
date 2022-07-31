import { Link } from "gatsby";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormModal from "../Modal/FormModal";
import ScrollAnimation from 'react-animate-on-scroll';

const MentemCustomers = ({ mentemCustomerData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="solution_2">
        <div className="container-fluid p-0">
          <div className="row mb-5 m-0 page_title justify-content-center">
            <ScrollAnimation animateIn="fadeInDown">
              <h1 style={{ textTransform: "uppercase" }}>
                {mentemCustomerData?.mentemHeadTitle}
              </h1>
            </ScrollAnimation>
          </div>
          <div className="row m-0">
            <div className="col-12 col-lg-6 p-0 ">
            <ScrollAnimation animateIn="fadeIn">
              <img
                alt={mentemCustomerData?.suncorpTitle}
                src={mentemCustomerData?.suncorpImage?.file?.url}
                className="sl_image"
              />
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6 sol_2">
            <ScrollAnimation animateIn="fadeIn">
              <h5>{mentemCustomerData?.suncorpTitle}</h5>
              <p>{mentemCustomerData?.suncorpDetails?.suncorpDetails}</p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6 sol_2">
            <ScrollAnimation animateIn="fadeIn">
              <h5>{mentemCustomerData?.saneTitle}</h5>
              <p>{mentemCustomerData?.saneDetails?.saneDetails}​</p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6 p-0">
            <ScrollAnimation animateIn="fadeIn">
              <img
                alt={mentemCustomerData?.saneTitle}
                src={mentemCustomerData?.saneImage?.file?.url}
                className="sl_image"
              />
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6 p-0">
            <ScrollAnimation animateIn="fadeIn">
              <img
                alt={mentemCustomerData?.drnswTitle}
                src={mentemCustomerData?.drnswImage?.file?.url}
                className="sl_image"
              />
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6 sol_2">
            <ScrollAnimation animateIn="fadeIn">
              <h5>{mentemCustomerData?.drnswTitle}</h5>
              <p>{mentemCustomerData?.drnswDetails?.drnswDetails}</p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <ScrollAnimation animateIn="fadeInDown">
            <Button className="demo_btn3 btn custom_btn" onClick={handleShow}>
              Request a demo today
            </Button>
            </ScrollAnimation>
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

export default MentemCustomers;
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

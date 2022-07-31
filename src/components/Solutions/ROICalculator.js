import React, { useEffect, useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const ROICalculator = ({ roiData }) => {
  const [roiState, setRoiState] = useState({});

  const newRoiData = () => {
    roiData?.nodes?.map(data => {
      let newData = {
        roiTitleHead: data?.roiTitleHead,
        calculatorTitle: data?.calculatorTitle,
        calculatorDetails: data?.calculatorDetails,
      };
      setRoiState(newData);
    });
  };
  useEffect(() => {
    newRoiData();
  }, [roiData]);

  return (
    <>
      <section className="form_section">
        <div className="container">
          <div className="row page_title justify-content-center">
          <ScrollAnimation animateIn="zoomIn">
            <h1>{roiState?.roiTitleHead}</h1>
            </ScrollAnimation>
          </div>
          <div className="row align-items-center justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-9">
            <ScrollAnimation animateIn="flipInY">
              <form className="form-part">
                <div className="form_header">
                  <h1 style={{ textTransform: "uppercase" }}>
                    {roiState?.calculatorTitle}
                  </h1>
                  <p>{roiState?.calculatorDetails?.calculatorDetails}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">Ammount Invested</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    defaultValue="$ AUD"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Ammount Invested</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    defaultValue="$ AUD"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Ammount Invested</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    defaultValue="$ AUD"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name Last name"
                  />
                </div>
                <div className="form-group row align-items-end">
                  <div className="col-12 col-lg-6">
                    <label htmlFor="firstName">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <button className="btn calculate_btn">CALCULATE</button>
                  </div>
                </div>
              </form>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ROICalculator;

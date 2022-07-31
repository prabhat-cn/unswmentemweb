import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const JobAssessmentSteps = ({ jobAssessment }) => {
  return (
    <>
      {/* One */}
      <ScrollAnimation animateIn="fadeInDown">
      <section className="sl_step light-bg">
        <div className="container">
          <div className="row m-0 align-items-center justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-4">
              <img
                alt={jobAssessment?.assessmentTitle1}
                src={jobAssessment?.assessmentImage1?.file?.url}
              />
            </div>
            <div className="col-12 col-lg-5">
              <h1 style={{ textTransform: "uppercase" }}>
                1. {jobAssessment?.assessmentTitle1}
              </h1>
              <p>{jobAssessment?.assessmentDetails1?.assessmentDetails1}</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
      {/* Two */}
      <ScrollAnimation animateIn="fadeInDown">
      <section className="sl_step">
        <div className="container">
          <div className="row m-0 align-items-center justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-5">
              <h1 style={{ textTransform: "uppercase" }}>
                2. {jobAssessment?.assessmentTitle2}
              </h1>
              <p>{jobAssessment?.assessmentDetails2?.assessmentDetails2}</p>
            </div>
            <div className="col-12 col-lg-4">
              <img
                alt={jobAssessment?.assessmentTitle2}
                src={jobAssessment?.assessmentImage2?.file?.url}
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
      {/* Three */}
      <ScrollAnimation animateIn="fadeInDown">
      <section className="sl_step light-bg">
        <div className="container">
          <div className="row m-0 align-items-center justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-4">
              <img
                src={jobAssessment?.assessmentImage3?.file?.url}
                alt={jobAssessment?.assessmentTitle3}
              />
            </div>
            <div className="col-12 col-lg-5">
              <h1 className="p-0">3. {jobAssessment?.assessmentTitle3} </h1>
              <p>{jobAssessment?.assessmentDetails3?.assessmentDetails3}</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
      {/* Four */}
      <ScrollAnimation animateIn="fadeInDown">
      <section className="sl_step">
        <div className="container">
          <div className="row m-0 align-items-center justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-5">
              <h1 style={{ textTransform: "uppercase" }}>
                4. {jobAssessment?.assessmentTitle4}
              </h1>
              <p className="p-0">
                {jobAssessment?.assessmentDetails4?.assessmentDetails4}
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <img
                alt={jobAssessment?.assessmentTitle4}
                src={jobAssessment?.assessmentImage4?.file?.url}
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
      {/* Five */}
      <ScrollAnimation animateIn="fadeInDown">
      <section className="sl_step light-bg">
        <div className="container">
          <div className="row m-0 align-items-center justify-content-center ps-lg-5 pe-lg-5">
            <div className="col-12 col-lg-4">
              <img
                alt={jobAssessment?.assessmentTitle5}
                src={jobAssessment?.assessmentImage5?.file?.url}
              />
            </div>
            <div className="col-12 col-lg-5">
              <h1 className="p-0">5. {jobAssessment?.assessmentTitle5}</h1>
              <p>{jobAssessment?.assessmentDetails5?.assessmentDetails5}</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>
    </>
  );
};

export default JobAssessmentSteps;

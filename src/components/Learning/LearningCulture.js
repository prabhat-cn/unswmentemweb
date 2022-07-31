import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import FormModal from "../Modal/FormModal";
import ScrollAnimation from 'react-animate-on-scroll';

const LearningCulture = ({ cultureData, journeyHead, journeySteps }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const allJourneySteps =
    journeySteps?.nodes?.length > 0 ? [...journeySteps?.nodes].reverse() : [];

  return (
    <>
      <section id="culture" className="culture">
        <div className="container-fluid p-0">
          {cultureData?.nodes?.map((data, indx) => {
            return (
              <Fragment key={indx}>
                <div className="row m-0">
                  <div className="col-12 col-lg-6 p-0">
                  <ScrollAnimation animateIn="fadeIn">
                    <img
                      alt={data?.cultureTitle}
                      src={data?.cultureImage?.file?.url}
                      className="w-100"
                    />
                    </ScrollAnimation>
                  </div>
                  <div className="col-12 col-lg-6 culture_text">
                  <ScrollAnimation animateIn="fadeInRight">
                    <h1>{data?.cultureTitle}</h1>
                    <p>{data?.cultureDetail1?.cultureDetail1}</p>{" "}
                    <p>{data?.cultureDetail2?.cultureDetail2}</p>{" "}
                    <p>{data?.cultureDetail3?.cultureDetail3}</p>
                  </ScrollAnimation>
                  </div>
                </div>
              </Fragment>
            );
          })}
          <div className="row m-0">
            <div className="col-12 col-lg-6 culture_text2">
              {journeyHead?.nodes?.map((data, indx) => (
                <Fragment key={indx}>
                  <ScrollAnimation animateIn="fadeIn">
                  <h6 className="mb-4 mb-lg-5">
                    {data?.learningJourneyTitle?.learningJourneyTitle}{" "}
                    <span>{data?.journeySubTitle?.journeySubTitle}: </span>
                  </h6>
                  </ScrollAnimation>
                </Fragment>
              ))}
              {allJourneySteps?.map((data, index) => {
                return (
                  <Fragment key={index}>
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="culture_step">
                      <h6>{data.journeyCount}</h6>
                      <p>
                        <span>{data.journeyStepNote.journeyStepNote}:</span>{" "}
                        {data.journeyStepDetails.journeyStepDetails}
                      </p>
                    </div>
                    </ScrollAnimation>
                  </Fragment>
                );
              })}
            </div>
            <div className="col-12 col-lg-6 p-0 calture2_img">
              {journeyHead?.nodes?.map((data, indx) => (
                <Fragment key={indx}>
                  <ScrollAnimation animateIn="fadeIn">
                  <img
                    alt=""
                    src={data?.journeyImage?.file?.url}
                    className="w-100"
                  />
                  </ScrollAnimation>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center">
          <ScrollAnimation animateIn="fadeInDown">
            <Button className="demo_btn3 btn custom_btn" onClick={handleShow}>
              Request a demo
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

export default LearningCulture;
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

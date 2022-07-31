import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const OurMission = ({ id, missionData }) => {
  return (
    <>
      <section className="we_do_sec2">
        <div className="container">
          <div className="row m-0 justify-content-center align-items-center">
            <div className="col-12 col-lg-5 col-md-6">
              <ScrollAnimation animateIn="fadeInRight">
              <img
                src={missionData?.ourMissionImage?.file?.url}
                alt={missionData?.ourMissionHead}
                className="w-100"
              />
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-5 we_do_text col-md-6">
              <ScrollAnimation animateIn="fadeInDown">
              <h1 style={{ textTransform: "uppercase" }}>
                {missionData?.ourMissionHead}
              </h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
              <p>{missionData?.ourMissionDetails?.ourMissionDetails}</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;

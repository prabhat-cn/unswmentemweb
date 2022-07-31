import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Engagement = ({ engagementData }) => {
  return (
    <>
      <section className="solution_2 bg-black">
        <div className="container-fluid p-0">
          <div className="row m-0 align-items-center">
            <div className="col-12 col-lg-6 sol_2 col-md-6">
              <ScrollAnimation animateIn="fadeInRight">
                <h5 style={{ textTransform: "uppercase" }}>
                  {engagementData?.unswEngagementHead}
                </h5>
                <p>
                  {engagementData?.unswEngagementDetails?.unswEngagementDetails}
                </p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-lg-6 p-0 col-md-6">
              <ScrollAnimation animateIn="fadeInLeft">
                <img
                  alt={engagementData?.unswEngagementHead}
                  src={engagementData?.unswEngagementImage?.file?.url}
                  className="sl_image"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Engagement;

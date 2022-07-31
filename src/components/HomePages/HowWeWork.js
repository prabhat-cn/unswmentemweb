import React, { Fragment } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const HowWeWork = ({ homeHowWeWork, homeWorkCollaboration }) => {
  const { workImages, workList, workTitle } = homeHowWeWork;
  const allWorkList =
    workList?.nodes?.length > 0 ? [...workList?.nodes].reverse() : [];
  return (
    <>
      <section className="how_it_works">
        <div className="container">
          <div className="row m-0 page_title justify-content-center">
            {workTitle?.nodes?.map(data => (
              <Fragment key={data?.id}>
                <ScrollAnimation animateIn="fadeInDown">
                <h1>{data?.title}</h1>
                </ScrollAnimation>
              </Fragment>
            ))}
          </div>
          <div className="row align-items-center hw_itRow">
            <div className="col-12 col-lg-6 hw_it1">
              {workImages?.nodes?.reverse().map(data => (
                <Fragment key={data?.id}>
                  <h1></h1>
                  <ScrollAnimation animateIn="fadeInRight">
                  <img
                    alt={data?.howWeWork}
                    src={data?.image?.file?.url}
                    className="w-100"
                  />
                  </ScrollAnimation>
                </Fragment>
              ))}
            </div>
            <div className="col-12 col-lg-6 ps-0 ps-lg-5">
              {allWorkList?.map(data => {
                // console.log("map->", data);
                return (
                  <Fragment key={data.id}>
                    <ScrollAnimation animateIn="fadeInLeft">
                    <div className="step1">
                      <h1>
                        <span>0{data.count}</span>
                        {data.workTitle}
                      </h1>
                      <p>{data.workDescription.workDescription}</p>
                    </div>
                    </ScrollAnimation>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="arrow_img">
          <ScrollAnimation animateIn="zoomIn">
            <img alt="" src="/assets/img/arrow_h.png" />
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="how_it_works p-0 bg-light">
        <div className="container">
          <div className="row align-items-center hw_itRow mt-0">
            {homeWorkCollaboration?.nodes?.map(data => {
              return (
                <>
                  <div className="col-12 col-lg-6 ps-0 ps-lg-5">
                    <Fragment key={data.id}>
                    <ScrollAnimation animateIn="fadeInUp">
                      <div className="step1">
                        <h1>{data.title}</h1>
                        <p className="text-dark">{data.details.details}</p>
                      </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInUp" delay="100">
                      <div className="step1 step_2">
                        <h1>{data.formal}</h1>
                        <p>{data.formalDetails.formalDetails}</p>
                      </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInUp" delay="200">
                      <div className="step1 step_2">
                        <h1>{data.social}</h1>
                        <p>{data.socialDetails.socialDetails}</p>
                      </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInUp" delay="300">
                      <div className="step1 step_2">
                        <h1>{data.onTheJob}</h1>
                        <p>{data.onTheJobDetails.onTheJobDetails}</p>
                      </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="fadeInUp" delay="400">
                      <div className="step1">
                        <p className="text-dark">
                          {data.endDetails.endDetails}
                        </p>
                      </div>
                      </ScrollAnimation>
                    </Fragment>
                  </div>
                  <div className="col-12 col-lg-6 hw_it2">
                    <Fragment key={data.id}>
                    <ScrollAnimation animateIn="fadeInLeft">
                      <img
                        alt=""
                        src={data.collaborationImage.file.url}
                        className="w-100"
                      />
                      </ScrollAnimation>
                    </Fragment>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;

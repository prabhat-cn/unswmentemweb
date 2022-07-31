import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
import { saveAs } from "file-saver";
import ScrollAnimation from "react-animate-on-scroll";

const MentemApproach = ({ homePageMentemData }) => {
  const { mentemTitle, mentemImages } = homePageMentemData;
  const pdfClick = pdData => {
    saveAs(
      pdData?.downloadCaseStudyPdf?.file?.url,
      `case-study-${+new Date()}.pdf`
    );
  };

  return (
    <>
      <section className="py-4 py-lg-5 mentem_section">
        <div className="container">
          <div className="row m-0 page_title">
            {mentemTitle?.nodes?.map(mtData => (
              <ScrollAnimation animateIn="fadeInDown">
                <h1 key={mtData?.id}>
                  {mtData?.firstTitle} <span>{mtData?.middleTitle}</span>{" "}
                  {mtData?.lastTitle}
                </h1>
              </ScrollAnimation>
            ))}
          </div>
          <ul>
            {mentemImages?.nodes?.map(miData => (
              <li key={miData?.id}>
                <ScrollAnimation animateIn="fadeInDown">
                  <div className="card">
                    <p>{miData?.imageDescription?.imageDescription}</p>
                    <img
                      alt={miData?.imageDescription?.imageDescription}
                      src={miData?.image1?.file?.url}
                      className="w-100"
                    />
                  </div>
                </ScrollAnimation>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            {mentemTitle?.nodes?.map(mtData => (
              <Fragment key={mtData?.id}>
                <ScrollAnimation animateIn="fadeInDown">
                  <button
                    className="demo_btn3 btn"
                    onClick={() => pdfClick(mtData)}
                  >
                    {mtData.caseStudyTitleBtn}
                  </button>
                </ScrollAnimation>
                {/* <Link
                  className="demo_btn3 btn"
                  to={mtData?.file?.url}
                  target="_blank"
                  download
                >
                  {mtData.caseStudyTitleBtn}
                </Link> */}
              </Fragment>
            ))}
          </div>
          <ScrollAnimation animateIn="zoomIn">
            <div className="hz_border"></div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default MentemApproach;

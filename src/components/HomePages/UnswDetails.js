import React, { Fragment } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const UnswDetails = ({ homeUnswSydney }) => {
  const { univBackground, univDetailsList, univLogo } = homeUnswSydney;
  return (
    <>
      <section className="univ_section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {univLogo?.nodes?.map(logImg => (
              <Fragment key={logImg?.id}>
                <div className="col-12 col-lg-3 univ_s1">
                  <ScrollAnimation animateIn="fadeInDown">
                  <img alt="" src={logImg?.sydneyLogo?.file?.url} />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInUp">
                    <p>{logImg?.unswLogoTitle}</p>
                  </ScrollAnimation>
                </div>
              </Fragment>
            ))}
            <div className="col-12 col-lg-8">
              <ul>
                {univDetailsList?.nodes?.map(listData => (
                  <Fragment key={listData?.id}>
                    <li><ScrollAnimation animateIn="fadeInUp">{listData?.sydneyTextList?.sydneyTextList}</ScrollAnimation></li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnswDetails;

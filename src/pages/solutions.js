import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import Layout from "../components/layout";
import JobAssessmentSteps from "../components/Solutions/JobAssessmentSteps";
import MentemCustomers from "../components/Solutions/MentemCustomers";
import MentemInsights from "../components/Solutions/MentemInsights";
import ROICalculator from "../components/Solutions/ROICalculator";
import SolBanner from "../components/Solutions/SolBanner";
import SolDetails from "../components/Solutions/SolDetails";

const Solutions = () => {
  const [solutionDetatils, setSolutionDetatils] = useState({
    solBann: {},
    solMentemCustomer: {},
    solMentemINsight: {},
    solJobAssessment: {},
    solROICal: {},
  });
  const solutionsQuery = useStaticQuery(graphql`
    query {
      allContentfulSolution {
        nodes {
          id
          speakToUsButton
          solutionBannerTitle
          bannerBottomDetails {
            bannerBottomDetails
          }
          bannerBottomImage {
            file {
              url
            }
          }
        }
      }
      allContentfulSolutionMentemCustomer {
        nodes {
          id
          drnswTitle
          drnswDetails {
            drnswDetails
          }
          drnswImage {
            file {
              url
            }
          }
          saneTitle
          saneDetails {
            saneDetails
          }
          saneImage {
            file {
              url
            }
          }
          suncorpTitle
          suncorpDetails {
            suncorpDetails
          }
          suncorpImage {
            file {
              url
            }
          }
          mentemHeadTitle
        }
      }
      allContentfulSolutionMentemInsights {
        nodes {
          id
          mentemsInsightsTitle
          insightImage1 {
            file {
              url
            }
          }
          insightImageDetails1 {
            insightImageDetails1
          }
          insightImage2 {
            file {
              url
            }
          }
          insightImageDetails2 {
            insightImageDetails2
          }
          insightImage3 {
            file {
              url
            }
          }
          insightImageDetails3 {
            insightImageDetails3
          }
          insightImage4 {
            file {
              url
            }
          }
          insightImageDetails4 {
            insightImageDetails4
          }
        }
      }
      allContentfulSolutionJobAssessment {
        nodes {
          assessmentTitle1
          assessmentImage1 {
            file {
              url
            }
          }
          id
          assessmentDetails1 {
            assessmentDetails1
          }
          assessmentImage2 {
            file {
              url
            }
          }
          assessmentTitle2
          assessmentDetails2 {
            assessmentDetails2
          }
          assessmentTitle3
          assessmentImage3 {
            file {
              url
            }
          }
          assessmentDetails3 {
            assessmentDetails3
          }
          assessmentTitle4
          assessmentImage4 {
            file {
              url
            }
          }
          assessmentDetails4 {
            assessmentDetails4
          }
          assessmentTitle5
          assessmentImage5 {
            file {
              url
            }
          }
          assessmentDetails5 {
            assessmentDetails5
          }
        }
      }
      allContentfulRoiCalculator {
        nodes {
          id
          roiTitleHead
          calculatorTitle
          calculatorDetails {
            calculatorDetails
          }
        }
      }
    }
  `);
  useEffect(() => {
    setSolutionDetatils({
      solBann: solutionsQuery?.allContentfulSolution,
      solMentemCustomer: solutionsQuery?.allContentfulSolutionMentemCustomer,
      solMentemINsight: solutionsQuery?.allContentfulSolutionMentemInsights,
      solJobAssessment: solutionsQuery?.allContentfulSolutionJobAssessment,
      solROICal: solutionsQuery?.allContentfulRoiCalculator,
    });
  }, [!solutionsQuery ? {} : solutionsQuery]);
  return (
    <>
      <Layout>
        {solutionDetatils?.solBann &&
          solutionDetatils?.solBann?.nodes?.map(data => {
            return (
              <Fragment key={data?.id}>
                <SolBanner solBanData={data} />
                <SolDetails solBottomDetail={data} />
              </Fragment>
            );
          })}
        {solutionDetatils?.solMentemCustomer &&
          solutionDetatils?.solMentemCustomer?.nodes?.map(data => {
            return (
              <Fragment key={data?.id}>
                <MentemCustomers mentemCustomerData={data} />
              </Fragment>
            );
          })}
        {solutionDetatils?.solMentemINsight &&
          solutionDetatils?.solMentemINsight?.nodes?.map(data => {
            return (
              <Fragment key={data?.id}>
                <MentemInsights mentemInsData={data} />
              </Fragment>
            );
          })}
        {solutionDetatils?.solJobAssessment &&
          solutionDetatils?.solJobAssessment?.nodes?.map(data => {
            return (
              <Fragment key={data?.id}>
                <JobAssessmentSteps jobAssessment={data} />
              </Fragment>
            );
          })}

        {/* <ROICalculator roiData={solutionDetatils?.solROICal} /> */}
      </Layout>
    </>
  );
};

export default Solutions;

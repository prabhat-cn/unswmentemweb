import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import Testimonials from "../components/HomePages/Testimonials";
import Layout from "../components/layout";
import LearningBanner from "../components/Learning/LearningBanner";
import LearningCulture from "../components/Learning/LearningCulture";
import MentemTestimonial from "../components/Learning/MentemTestimonial";

const Learning = () => {
  const [homeTestimonial, setHomeTestimonial] = useState({
    testiTitle: {},
    testiIcon: {},
    testiDescription: {},
  });
  const [learningData, setLearningData] = useState({
    learnBann: {},
    learningCulture: {},
    journeyHead: {},
    journeySteps: {},
    mentemAccessHead: {},
    mentemClient: {},
    specialiseHead: {},
    specialiseList: {},
  });
  const homeInnerData = useStaticQuery(graphql`
    query {
      allContentfulTestimonialsTitle {
        nodes {
          id
          titleHead
        }
      }
      allContentfulTestimonialIcons {
        nodes {
          id
          icons {
            description
            file {
              url
            }
          }
          iconsName
        }
      }
      allContentfulTestimonialDescription {
        nodes {
          id
          clientName
          companyName
          jobTitle
          clientImage {
            file {
              url
            }
          }
          clientDescription {
            clientDescription
          }
        }
      }
      allContentfulLearningBanner {
        nodes {
          id
          learnBannerTitle
        }
      }
      allContentfulLearningCulture {
        nodes {
          id
          cultureTitle
          cultureDetail1 {
            cultureDetail1
          }
          cultureDetail2 {
            cultureDetail2
          }
          cultureDetail3 {
            cultureDetail3
          }
          cultureImage {
            file {
              url
            }
            id
          }
        }
      }
      allContentfulLearningJourneyHead {
        nodes {
          learningJourneyTitle {
            learningJourneyTitle
          }
          id
          journeySubTitle {
            journeySubTitle
          }
          journeyImage {
            file {
              url
            }
          }
        }
      }
      allContentfulLearningJourneySteps {
        nodes {
          id
          journeyStepNote {
            journeyStepNote
          }
          journeyStepDetails {
            journeyStepDetails
          }
          journeyCount
        }
      }
      allContentfulLearningMentemAccessHead {
        nodes {
          id
          mentemAccessHead
        }
      }
      allContentfulLearningMentemTestimonial {
        nodes {
          id
          clientName
          clientDesignation
          clientImage {
            file {
              url
            }
            id
          }
          clientDetails {
            clientDetails
          }
        }
      }
      allContentfulLearningWeSpecialise {
        nodes {
          id
          weSpecialiseTitle
        }
      }
      allContentfulLearningSpecialiseList {
        nodes {
          id
          specialiseNumber
          specialiseName
        }
      }
    }
  `);
  useEffect(() => {
    setHomeTestimonial({
      testiTitle: homeInnerData?.allContentfulTestimonialsTitle,
      testiIcon: homeInnerData?.allContentfulTestimonialIcons,
      testiDescription: homeInnerData?.allContentfulTestimonialDescription,
    });
    setLearningData({
      learnBann: homeInnerData?.allContentfulLearningBanner,
      learningCulture: homeInnerData?.allContentfulLearningCulture,
      journeyHead: homeInnerData?.allContentfulLearningJourneyHead,
      journeySteps: homeInnerData?.allContentfulLearningJourneySteps,
      mentemAccessHead: homeInnerData?.allContentfulLearningMentemAccessHead,
      mentemClient: homeInnerData?.allContentfulLearningMentemTestimonial,
      specialiseHead: homeInnerData?.allContentfulLearningWeSpecialise,
      specialiseList: homeInnerData?.allContentfulLearningSpecialiseList,
    });
  }, [homeInnerData]);

  return (
    <>
      <Layout>
        {learningData?.learnBann &&
          learningData?.learnBann?.nodes?.map((data, index) => {
            return (
              <Fragment key={data?.id}>
                <LearningBanner bannData={data} />
              </Fragment>
            );
          })}
        <LearningCulture
          cultureData={learningData?.learningCulture}
          journeyHead={learningData?.journeyHead}
          journeySteps={learningData?.journeySteps}
        />
        <MentemTestimonial
          mentemAccessHead={learningData?.mentemAccessHead}
          mentemClient={learningData?.mentemClient}
          specialiseHead={learningData?.specialiseHead}
          specialiseList={learningData?.specialiseList}
        />
        <Testimonials homeTestimonial={homeTestimonial} learningShow={true} />
      </Layout>
    </>
  );
};

export default Learning;

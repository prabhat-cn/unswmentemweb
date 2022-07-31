import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Banner from "../../components/HomePages/Banner";
import WhySection from "../../components/HomePages/WhySection";
import MentemApproach from "../../components/HomePages/MentemApproach";
import UnswDetails from "../../components/HomePages/UnswDetails";
import UnswAwards from "../../components/HomePages/UnswAwards";
import HowWeWork from "../../components/HomePages/HowWeWork";
import Testimonials from "../../components/HomePages/Testimonials";
import SocialBlogs from "../../components/HomePages/SocialBlogs";

const HomePage = props => {
  const { homePageData } = props;

  const [homePageWhyData, setHomePageWhyData] = useState();
  const [homePageMentemData, setHomePageMentemData] = useState({
    mentemTitle: {},
    mentemImages: {},
  });
  const [homeUnswSydney, setHomeUnswSydney] = useState({
    univLogo: {},
    univBackground: {},
    univDetailsList: {},
  });
  const [homeAwards, setHomeAwards] = useState({
    awardHead: {},
    awardImages: {},
  });
  const [homeHowWeWork, setHomeHowWeWork] = useState({
    workTitle: {},
    workImages: {},
    workList: {},
  });
  const [homeWorkCollaboration, setWorkCollaboration] = useState();
  const [homeTestimonial, setHomeTestimonial] = useState({
    testiTitle: {},
    testiIcon: {},
    testiDescription: {},
  });

  const homeInnerData = useStaticQuery(graphql`
    query {
      allContentfulHomeBannerBottom {
        nodes {
          thisIsWhy
          id
          counter1Name
          counter1Description {
            counter1Description
            id
          }
          counter2Name
          counter2Description {
            counter2Description
            id
          }
          counter3Name
          counter3Description {
            id
            counter3Description
          }
          thisWhyDescription {
            thisWhyDescription
            id
          }
        }
      }
      allContentfulTheMentemApproach {
        nodes {
          id
          firstTitle
          middleTitle
          lastTitle
          theMentemApproach
          downloadCaseStudyPdf {
            file {
              url
            }
          }
          caseStudyTitleBtn
        }
        totalCount
      }
      allContentfulTheMentemApproachImages {
        nodes {
          id
          image1 {
            file {
              url
            }
          }
          imageDescription {
            imageDescription
          }
        }
      }
      allContentfulUnswSydneyLogo {
        nodes {
          id
          unswLogoTitle
          sydneyLogo {
            file {
              url
            }
          }
        }
      }
      allContentfulUnswSydneyBackground {
        nodes {
          id
          sydneyImage {
            file {
              url
            }
            title
          }
        }
      }
      allContentfulUnswSydneyTextList {
        nodes {
          id
          sydneyTextList {
            id
            sydneyTextList
          }
        }
      }
      allContentfulUnswAwardsTitle {
        nodes {
          awardTitle
          awardsDescription {
            awardsDescription
          }
          id
        }
      }
      allContentfulUnswAwardsImages {
        nodes {
          id
          awardImage {
            id
            file {
              url
            }
          }
          awardTitle
          awardDescription {
            awardDescription
          }
        }
      }
      allContentfulHowWeWorkTitle {
        nodes {
          id
          title
        }
      }
      allContentfulHowWeWorkImage {
        nodes {
          howWeWork
          image {
            file {
              url
            }
            id
          }
          id
        }
      }
      allContentfulHowWeWorkList {
        nodes {
          id
          workTitle
          workDescription {
            workDescription
          }
          count
        }
      }
      allContentfulHowWeWorkCollaboration {
        nodes {
          id
          title
          details {
            details
          }
          formal
          formalDetails {
            formalDetails
          }
          social
          socialDetails {
            socialDetails
          }
          onTheJob
          onTheJobDetails {
            onTheJobDetails
          }
          endDetails {
            endDetails
          }
          collaborationImage {
            file {
              url
            }
            id
          }
        }
      }
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
    }
  `);
  useEffect(() => {
    setHomePageWhyData(!homeInnerData ? null : homeInnerData);
    setHomePageMentemData({
      mentemTitle: homeInnerData?.allContentfulTheMentemApproach,
      mentemImages: homeInnerData?.allContentfulTheMentemApproachImages,
    });
    setHomeUnswSydney({
      univLogo: homeInnerData?.allContentfulUnswSydneyLogo,
      univBackground: homeInnerData?.allContentfulUnswSydneyBackground,
      univDetailsList: homeInnerData?.allContentfulUnswSydneyTextList,
    });
    setHomeAwards({
      awardHead: homeInnerData?.allContentfulUnswAwardsTitle,
      awardImages: homeInnerData?.allContentfulUnswAwardsImages,
    });
    setHomeHowWeWork({
      workTitle: homeInnerData?.allContentfulHowWeWorkTitle,
      workImages: homeInnerData?.allContentfulHowWeWorkImage,
      workList: homeInnerData?.allContentfulHowWeWorkList,
    });
    setWorkCollaboration(homeInnerData?.allContentfulHowWeWorkCollaboration);
    setHomeTestimonial({
      testiTitle: homeInnerData?.allContentfulTestimonialsTitle,
      testiIcon: homeInnerData?.allContentfulTestimonialIcons,
      testiDescription: homeInnerData?.allContentfulTestimonialDescription,
    });
  }, [homeInnerData, homePageWhyData]);

  return (
    <>
      <Banner homePageData={homePageData} />
      <WhySection homePageWhyData={homePageWhyData} />
      <MentemApproach homePageMentemData={homePageMentemData} />
      <UnswDetails homeUnswSydney={homeUnswSydney} />
      <UnswAwards homeAwards={homeAwards} />
      <HowWeWork
        homeHowWeWork={homeHowWeWork}
        homeWorkCollaboration={homeWorkCollaboration}
      />
      <Testimonials homeTestimonial={homeTestimonial} homeShow={true} />
      <SocialBlogs />
    </>
  );
};

export default HomePage;

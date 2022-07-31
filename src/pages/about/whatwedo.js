import React, { Fragment, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BannerAction from "../../components/AboutPages/WhatWeDo/BannerAction";
import Engagement from "../../components/AboutPages/WhatWeDo/Engagement";
import OurMission from "../../components/AboutPages/WhatWeDo/OurMission";
import OurValues from "../../components/AboutPages/WhatWeDo/OurValues";
import OurVision from "../../components/AboutPages/WhatWeDo/OurVision";
import SocialBlogs from "../../components/HomePages/SocialBlogs";
import Layout from "../../components/layout";

const Whatwedo = () => {
  const [whatWeDoData, setWhatWeDoData] = useState({
    whoWeAre: {},
    ourValues: {},
    engagement: {},
  });
  const whatWeDoQuery = useStaticQuery(graphql`
    query {
      allContentfulAboutWhoWeAre {
        nodes {
          id
          whoAreWe
          ourVisionImage {
            id
            file {
              url
            }
          }
          ourVisionHead
          ourVisionDetails {
            ourVisionDetails
          }
          ourMissionHead
          ourMissionDetails {
            ourMissionDetails
          }
          ourMissionImage {
            file {
              url
            }
          }
        }
      }
      allContentfulAboutOurValues {
        nodes {
          id
          speakToUs
          discover
          discoverImage {
            file {
              url
            }
            id
          }
          design
          designImage {
            file {
              url
            }
            id
          }
          develop
          developImage {
            file {
              url
            }
            id
          }
          deliver
          deliverImage {
            id
            file {
              url
            }
          }
          evaluate
          evaluateImage {
            file {
              url
            }
            id
          }
          ourValues
        }
      }
      allContentfulAboutUnswEngagement {
        nodes {
          id
          unswEngagementHead
          unswEngagementImage {
            file {
              url
            }
            id
          }
          unswEngagementDetails {
            unswEngagementDetails
          }
        }
      }
    }
  `);
  // console.log("whatWeDoQuery->", whatWeDoQuery.allContentfulAboutOurValues);
  useEffect(() => {
    setWhatWeDoData({
      whoWeAre: whatWeDoQuery?.allContentfulAboutWhoWeAre,
      ourValues: whatWeDoQuery?.allContentfulAboutOurValues,
      engagement: whatWeDoQuery?.allContentfulAboutUnswEngagement,
    });
  }, [whatWeDoQuery]);

  return (
    <>
      <Layout>
        {whatWeDoData?.whoWeAre &&
          whatWeDoData?.whoWeAre?.nodes?.length > 0 &&
          whatWeDoData?.whoWeAre?.nodes?.map((bData, index) => {
            return (
              <Fragment key={index}>
                <BannerAction bannerData={bData} id={bData?.id} />
                <OurVision visionData={bData} id={bData?.id} />
                <OurMission missionData={bData} id={bData?.id} />
              </Fragment>
            );
          })}
        {whatWeDoData?.ourValues &&
          whatWeDoData?.ourValues?.nodes?.length > 0 &&
          whatWeDoData?.ourValues?.nodes?.map((vData, index) => {
            return (
              <Fragment key={index}>
                <OurValues valuesData={vData} id={vData?.id} />
              </Fragment>
            );
          })}
        {whatWeDoData?.engagement &&
          whatWeDoData?.engagement?.nodes?.length > 0 &&
          whatWeDoData?.engagement?.nodes?.map((egData, index) => {
            return (
              <Fragment key={index}>
                <Engagement engagementData={egData} id={egData?.id} />
              </Fragment>
            );
          })}
        <SocialBlogs />
      </Layout>
    </>
  );
};

export default Whatwedo;

import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import ThoughtBanner from "../components/Insights/ThoughtBanner";
import ThoughtBottom from "../components/Insights/ThoughtBottom";
import Layout from "../components/layout";

const Insights = () => {
  const [insightsData, setInsightsData] = useState({
    mainLeaderShip: {},
  });
  const insightsQuery = useStaticQuery(graphql`
    query {
      allContentfulThoughtLeadership {
        nodes {
          id
          leadershipBannerTitle
          unswImage {
            file {
              url
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    setInsightsData({
      mainLeaderShip: insightsQuery?.allContentfulThoughtLeadership,
    });
  }, []);

  return (
    <>
      <Layout>
        <ThoughtBanner insightsData={insightsData} />
        <ThoughtBottom insightsData={insightsData} />
      </Layout>
    </>
  );
};

export default Insights;

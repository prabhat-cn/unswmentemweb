import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import HomePage from "./main/home";

const HomeIndex = ({ data, location }) => {
  const [homePageData, setHomePageData] = useState();
  useEffect(() => {
    const homePageAllData = !data ? null : data;
    setHomePageData(homePageAllData);
  }, [data, homePageData]);
  return (
    <>
      <Layout>
        <HomePage homePageData={homePageData} />
      </Layout>
    </>
  );
};

export default HomeIndex;

export const pageQuery = graphql`
  query {
    allContentfulHomeBanner {
      nodes {
        bannerDescription {
          bannerDescription
          id
        }
        bannerImage {
          file {
            contentType
            fileName
            url
            details {
              size
              image {
                height
                width
              }
            }
          }
          filename
          filesize
          id
          title
        }
        bannerTitle
        id
      }
    }
  }
`;

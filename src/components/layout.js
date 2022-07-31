import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import Footer from "./footer";
import Head from "./head";
import Header from "./header";

const Layout = props => {
  const [metaHead, setMetaHead] = useState({
    siteMeta: {},
  });
  const layoutQuery = useStaticQuery(graphql`
    query {
      allSite {
        nodes {
          siteMetadata {
            author
            description
            image
            siteUrl
            title
          }
        }
      }
    }
  `);

  useEffect(() => {
    setMetaHead({
      siteMeta: layoutQuery?.allSite,
    });
  }, [layoutQuery]);
  return (
    <>
      {metaHead?.siteMeta?.nodes?.map((data, indx) => {
        return (
          <Fragment key={indx}>
            <Head siteMeta={data} {...props} />
          </Fragment>
        );
      })}
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

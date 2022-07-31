import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";

const LinkedinBlogs = () => {
  // const linkedinBlogQuery = useStaticQuery(graphql`
  //   query {
  //     site {
  //       proxy {
  //         prefix
  //         url
  //       }
  //     }
  //   }
  // `);
  // console.log("linkedinBlogQuery->", linkedinBlogQuery?.site);

  // const token =
  //   "AQV5c7gK8YUl9VXSl4D1qYV0p8DkXZAoutdSlTGJqi0sQ6fQdlczVx81quhLM89_FAiyPv8irAywCUlJCk7W9ecDVI11ILU9zBFBRL_UbT7oHfwoDTncVfOmRmirI9fV423hJ0uHLSEmbAgGChAdQrMGITpXg_yh7vU3g3GcokwCUdmjWWRO5FL9fBvNRDYdN_aSzz7l2WrH30EUBbQCRWhJCjpm0J-i4USxKS7kbxJ4c1YgFTs8r-eW-aGRt4Kdb9c6CCewYCBf5YHd-w71RQxqeGsxnBQ3D2vJEBbHUovbLEctf0hBYdwTfbl75zn2I0QRxc0IFOdyQ71eshP_P1UHSPyljA";

  // const linkedinFetch = async () => {
  //   const linkedinUrl = linkedinBlogQuery?.site?.proxy?.map(data => data?.url);
  //   console.log("linkedinUrl->", linkedinUrl[0]);
  //   try {
  //     const fetchResp = await fetch(linkedinUrl[0], {
  //       method: "GET",
  //       // mode: "cors",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     const resp = await fetchResp.json();
  //     console.log("linkedin->", resp);
  //   } catch (error) {
  //     console.log("error----->", error);
  //   }
  // };

  // useEffect(() => {
  //   linkedinFetch();
  // }, []);

  return (
    <>
      <div className="row blog_card">
        <div className="col-12 col-lg-4 mb-4">
          <Link to="">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <Link to="">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <Link to="">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <Link to="">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <Link to="">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <Link to="">
            <div className="card">
              <img alt="" src="/assets/img/hw1.png" />
              <div className="card-body">
                <h1>Excepteur sint occaecat cupidatat non proident.</h1>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est eopksio laborum.
                </p>
                <span>
                  <small>linkedin.com</small>{" "}
                  <small className="ps-4">
                    <img alt="" src="/assets/img/clock.png" /> 1h ago
                  </small>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center col-12">
        <Link className="demo_btn3 btn" to="">
          Show More
        </Link>
      </div>
    </>
  );
};

export default LinkedinBlogs;

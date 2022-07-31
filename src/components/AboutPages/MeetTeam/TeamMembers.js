import { Link } from "gatsby";
import React, { Fragment, useState } from "react";
import FollowYoutube from "./FollowYoutube";
import ScrollAnimation from "react-animate-on-scroll";

const TeamMembers = ({ teamMember }) => {
  const [memberBio, setMemberBio] = useState({});
  const clickDetails = mData => {
    setMemberBio(mData);
  };
  return (
    <>
      <section className="blog_sec">
        <div className="container">
          <div className="row blog_card team_list">
            {teamMember?.nodes?.map(data => (
              <Fragment key={data.id}>
                <div className="col-6 col-lg-3 col-md-4 mb-4">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#team_modal"
                    onClick={() => clickDetails(data)}
                  >
                    <div className="card">
                      <img
                        alt={data?.memberName}
                        src={data?.memberImage?.file?.url}
                      />
                      <div className="card-body">
                        <ScrollAnimation animateIn="fadeInUp">
                          <h1 style={{ textTransform: "uppercase" }}>
                            {data?.memberName}
                          </h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                          <p>{data?.designation}</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                          <span>
                            <small>
                              {data?.readBio}{" "}
                              <img
                                alt=""
                                src="/assets/img/tm_arrow.png"
                                className="ms-1"
                              />
                            </small>
                          </span>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="row mt-7 page_title justify-content-center">
            <ScrollAnimation animateIn="fadeInUp">
              <h1>LEARN MORE</h1>
            </ScrollAnimation>

            <div className="d-flex justify-content-center mb-8">
              <ScrollAnimation animateIn="zoomIn">
                <Link className="demo_btn4 btn me-2" to={"/solutions/"}>
                  Solutions
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animateIn="zoomIn">
                <Link
                  className="demo_btn4 btn me-2"
                  to={"/learning/"}
                  delay="100"
                >
                  Learning
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animateIn="zoomIn" delay="200">
                <Link className="demo_btn4 btn" to={"/insights/"}>
                  Insights
                </Link>
              </ScrollAnimation>
            </div>
          </div>

          {/* Youtube */}
          <FollowYoutube />
        </div>
      </section>

      {/* Modal  */}

      <div
        className="modal fade"
        id="team_modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="slid_div">
                <div>
                  <img
                    alt={memberBio?.memberName}
                    src={memberBio?.memberImage?.file?.url}
                  />
                </div>
                <div className="tt_text">
                  <h1 style={{ textTransform: "uppercase" }}>
                    {memberBio?.memberName}{" "}
                    <span style={{ textTransform: "uppercase" }}>
                      {memberBio?.designation}, {memberBio?.companyName}
                    </span>
                  </h1>
                  <p>{memberBio?.memberDetails?.memberDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;

import { graphql, Link, useStaticQuery } from "gatsby";
import React, { Fragment, useState } from "react";
import FormModal from "./Modal/FormModal";

import Button from "react-bootstrap/Button";
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const footerQuery = useStaticQuery(graphql`
    query {
      allContentfulFooterWidget1 {
        nodes {
          id
          widget1Title
          widget1 {
            widget1
          }
          footerLogo {
            file {
              url
            }
            id
          }
          widget3
        }
      }
      allContentfulFooterWidgetLinks {
        nodes {
          id
          linkNumber
          linkName
        }
      }
    }
  `);
  const allFooterLinks =
    footerQuery?.allContentfulFooterWidgetLinks?.nodes?.length > 0
      ? [...footerQuery?.allContentfulFooterWidgetLinks?.nodes].reverse()
      : [];
  return (
    <>
      <section className="backto_top">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-lg-2">
            <ScrollAnimation animateIn="fadeInDown">
              <Link to="#" id="toTop">
                Back to top <img alt="" src="/assets/img/up_arrow.png" />
              </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <ul>
              {footerQuery?.allContentfulFooterWidget1?.nodes?.length > 0 &&
                footerQuery?.allContentfulFooterWidget1?.nodes?.map(data => (
                  <Fragment key={data?.id}>
                    <li>
                    <ScrollAnimation animateIn="fadeInRight">
                      <img
                        alt="UNSW Footer Logo"
                        src={data.footerLogo.file.url}
                      />
                      </ScrollAnimation>
                    </li>
                    <li>
                    <ScrollAnimation animateIn="fadeIn">
                      {data.widget1Title}: ​<br />​<br />
                      {data.widget1.widget1}
                      </ScrollAnimation>
                    </li>
                  </Fragment>
                ))}

              <li>
              <ScrollAnimation animateIn="fadeIn">
                <ol>
                  {allFooterLinks?.map(data => (
                    <Fragment key={data?.id}>
                      <li>
                        <Link
                          to={
                            data.linkNumber === "1"
                              ? "/career/"
                              : data.linkNumber === "2"
                              ? "/contact/"
                              : data.linkNumber === "3"
                              ? "/privacy/"
                              : "#"
                          }
                        >
                          {data.linkName}
                        </Link>
                      </li>
                    </Fragment>
                  ))}
                </ol>
                </ScrollAnimation>
              </li>
              <li>
              <ScrollAnimation animateIn="fadeInUp">
                <Button
                  className="demo_btn btn custom_btn"
                  onClick={handleShow}
                >
                  Request a demo
                </Button>
                </ScrollAnimation>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Modal Start */}
      <FormModal
        handleShow={handleShow}
        handleClose={handleClose}
        setShow={setShow}
        show={show}
      />
      {/* Modal End */}
      <style>{customCss}</style>
    </>
  );
};

export default Footer;

const customCss = `
.custom_btn {
  border-color: #BA61FF;
}
.custom_btn:focus{
  background: #BA61FF;
  border-color: #BA61FF;
  color: #fff;
}
.custom_btn:hover{
  background: #fff;
  border-color: #BA61FF;
  color: #000;
}
`;

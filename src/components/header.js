import { Link } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import FormModal from "./Modal/FormModal";

import Button from "react-bootstrap/Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [headerLogo, setHeaderLogo] = useState();
  const headerQuery = useStaticQuery(graphql`
    query {
      allContentfulUnswMentemLogo {
        nodes {
          id
          unseMentemLogo {
            file {
              url
            }
            id
          }
          unswMentemHorizon
        }
      }
    }
  `);
  useEffect(() => {
    // logo
    setHeaderLogo(headerQuery?.allContentfulUnswMentemLogo);

    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.querySelector(".navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    }

    setLoader(false);
  }, [headerQuery]);

  return (
    <>
      {loader === true ? (
        <div id="overlay" className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : null}

      <header>
        <nav className="navbar navbar-expand-lg navbar-light pt-lg-0 pb-lg-0 header">
          <div className="container">
            {headerLogo?.nodes?.map(data => (
              <Fragment key={data?.id}>
                <Link className="navbar-brand p-lg-0" to="/">
                  <img
                    alt={data.unswMentemHorizon}
                    src={data.unseMentemLogo.file.url}
                  />
                </Link>
              </Fragment>
            ))}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="menu-toggle">
                <div className="menu-toggle__inner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    activeClassName="active"
                    className={
                      open
                        ? "nav-link dropdown-toggle open"
                        : "nav-link dropdown-toggle"
                    }
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                  >
                    About
                  </Link>
                  <ul
                    className={
                      open
                        ? "dropdown-menu dropdownMenu open"
                        : "dropdown-menu dropdownMenu"
                    }
                  >
                    <li>
                      <Link className="dropdown-item" to={"/about/whatwedo/"}>
                        What we do
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/about/ourteam/"}>
                        Meet the team
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    activeClassName="active"
                    className="nav-link"
                    to={"/solutions/"}
                  >
                    Solutions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClassName="active"
                    className="nav-link"
                    to={"/learning/"}
                  >
                    Learning{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClassName="active"
                    className="nav-link"
                    to={"/insights/"}
                  >
                    Thought Leadership
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link className="demo_btn btn" to="#">
              Request a demo
            </Link> */}
            <Button className="demo_btn btn custom_btn" onClick={handleShow}>
              Request a demo
            </Button>
          </div>
        </nav>
      </header>

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

export default Header;
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
body {
  overflow-x: hidden;
}
.loader-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #BA61FF;
  display: grid;
  z-index: 9999999;
  place-items: center;

}

.loader {
  border: 10px solid rgba(255,255,255,0.3);
  border-top: 10px solid #fff;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.dropdown-menu.dropdownMenu{
  display:block;
  opacity:0;
  visibility:hidden;
  transition:all 300ms ease-in-out;
}
.dropdown-menu.dropdownMenu.open{
  opacity:1;
  visibility:visible;
}

@media (max-width:767px){
  .loader{
    width:50px;
    height:50px;
    border-width: 5px;
  }
}
`;

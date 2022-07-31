import { Link } from "gatsby";
import React, { Fragment, useState } from "react";

import Button from "react-bootstrap/Button";
import FormModal from "../Modal/FormModal";

const Banner = ({ homePageData }) => {
  const bannerData = homePageData?.allContentfulHomeBanner?.nodes;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="banner_sec">
        <>
          {bannerData?.map(bData => (
            <Fragment key={bData?.id}>
              <video
                playsInline="playsinline"
                autoPlay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source
                  alt={bData?.bannerImage?.title}
                  src={bData?.bannerImage?.file?.url}
                  type="video/mp4"
                />
                <track
                  src="captions_en.vtt"
                  kind="captions"
                  srcLang="en"
                  label="english_captions"
                ></track>
              </video>
              <div className="banner_content">
                <div className="col-12 text-center">
                  <h1>{bData?.bannerTitle}</h1>
                  <p>{bData?.bannerDescription?.bannerDescription}</p>
                  <Button
                    className="demo_btn2 btn custom-btn"
                    onClick={handleShow}
                  >
                    Request a demo
                  </Button>
                </div>
              </div>

              <div className="drop_scroll" id="upClick">
                <a
                  to="javascript:void(0)"
                  onClick={() =>
                    window.scrollTo({
                      left: 0,
                      top: 200,
                      behavior: "smooth",
                    })
                  }
                >
                  <img
                    alt=""
                    src="/assets/img/drop_cercle.png"
                    className="bounce"
                  />
                </a>
              </div>
            </Fragment>
          ))}
        </>
      </section>
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

export default Banner;

const customCss = `
.custom-btn {
  border-color: #BA61FF;
}
.custom-btn:focus{
  background: #BA61FF;
  border-color: #BA61FF;
  color: #fff;
}
.custom-btn:hover{
  background: #fff;
  border-color: #BA61FF;
  color: #000;
}
`;

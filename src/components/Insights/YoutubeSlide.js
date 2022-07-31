import React, { useState, useEffect, Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./thumbSwiperStyle.css";
import { Navigation, Thumbs, FreeMode } from "swiper";
import axios from "axios";

const YoutubeSlide = () => {
  const APIKey = "AIzaSyCtFNtGAWiiyz_Dt8DfMV6QXpk7W5ppG-c";
  const channelID = "UCVCVE5qHZMHmdy7iuE_aR-A";
  const result = 10;

  const [youQData, setYouQData] = useState({});
  const [youVideoContentful, setYouVideoContentful] = useState();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [videoDataId, setVideoDataId] = useState([]);

  const youtubeQuery = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          items {
            etag
            kind
            id {
              channelId
              kind
              videoId
            }
          }
          pageInfo {
            resultsPerPage
            totalResults
          }
          regionCode
          etag
        }
      }
      allContentfulYoutubeVideos {
        nodes {
          id
          videoUrl
          serialNumber
        }
        totalCount
      }
    }
  `);
  const youtubeDevUrl = `https://www.googleapis.com/youtube/v3/search?channelId=${channelID}&key=${APIKey}&part=snippet,id&order=date&maxResults=${result}`;
  const fetchData = () => {
    axios
      .get(youtubeDevUrl)
      .then(res => {
        console.log("youtube->", res);
        const videoData = res?.data?.items?.map(yData => {
          console.log("videoData->", yData?.id);
          setVideoDataId(yData?.id);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();

    // json data
    // const videoIds = youtubeQuery?.allDataJson?.nodes?.map(vData => {
    //   setYouQData(vData);
    // });
    setYouVideoContentful(youtubeQuery?.allContentfulYoutubeVideos);
  }, [{}]);
  console.log("videoDataId->", videoDataId);
  return (
    <>
      <div className="col-sm-9">
        {/* Left */}
        <ScrollAnimation animateIn="fadeIn" delay="100">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            // className="mySwiper2"
            className="swiper_custom"
          >
            {videoDataId?.length > 0 ? (
              <>
                {videoDataId?.map((data, indx) => {
                  return (
                    <Fragment key={indx}>
                      <SwiperSlide className="swiperslide_custom">
                        <div className="video_wrapper">
                          <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${data?.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </SwiperSlide>
                    </Fragment>
                  );
                })}
              </>
            ) : (
              <>
                {youVideoContentful?.nodes?.map((data, indx) => {
                  return (
                    <Fragment key={data?.id}>
                      <SwiperSlide className="swiperslide_custom">
                        <div className="video_wrapper">
                          <iframe
                            width="560"
                            height="315"
                            src={data?.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </SwiperSlide>
                    </Fragment>
                  );
                })}
              </>
            )}
          </Swiper>
        </ScrollAnimation>
      </div>
      <div className="col-sm-3">
        {/* Right */}
        <ScrollAnimation animateIn="fadeInRight" delay="100">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={16}
            slidesPerView={4}
            freeMode={true}
            direction={"vertical"}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            // className="mySwiper"
            className="mySwiper custom_swipe"
          >
            {videoDataId?.length > 0 ? (
              <>
                {videoDataId?.map((data, indx) => {
                  return (
                    <Fragment key={indx}>
                      <SwiperSlide className="swiperslide_custom">
                        <div className="video_thumb_wrapper">
                          <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${data?.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </SwiperSlide>
                    </Fragment>
                  );
                })}
              </>
            ) : (
              <>
                {youVideoContentful?.nodes?.map((data, indx) => {
                  return (
                    <Fragment key={data?.id}>
                      <SwiperSlide className="swiperslide_custom">
                        <div className="video_thumb_wrapper">
                          <iframe
                            width="560"
                            height="315"
                            src={data?.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </SwiperSlide>
                    </Fragment>
                  );
                })}
              </>
            )}
          </Swiper>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default YoutubeSlide;

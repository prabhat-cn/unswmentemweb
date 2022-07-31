import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./thumbSwiperStyle.css";
import { Navigation, Thumbs, FreeMode } from "swiper";
import axios from "axios";

const APIKey = process.env.YOUTUBE_API_KEY;
const channelID = process.env.YOUTUBE_CHANNEL_ID;
const result = process.env.YOUTUBE_RESULT;

const YoutubeSlide = () => {
  const [youQData, setYouQData] = useState({});
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
    }
  `);
  // console.log("youtubeQuery->", youtubeQuery);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [videoDataId, setVideoDataId] = useState([]);
  const youtubeDevUrl = `https://www.googleapis.com/youtube/v3/search?channelId=${channelID}&key=${APIKey}&part=snippet,id&order=date&maxResults=${result}`;
  const fetchData = () => {
    axios
      .get(youtubeDevUrl)
      .then(res => {
        console.log("youtube->", res);
        // const videoData = res?.data?.items?.map(vData => vData?.id?.videoId);
        // console.log("videoData->", videoData);
        // setVideoDataId(videoData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    // fetchData();
    const videoIds = youtubeQuery?.allDataJson?.nodes?.map(vData => {
      setYouQData(vData);
    });
  }, [{}]);
  // console.log("videoDataId->", videoDataId);
  // console.log("youQData->", youQData);
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
            {youQData?.items?.map(data => {
              console.log("data->", data?.id?.videoId);
              return (
                <>
                  <SwiperSlide className="swiperslide_custom">
                    <div className="video_wrapper">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${data?.id?.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
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
            {youQData?.items?.map(data => {
              console.log();
              return (
                <>
                  <SwiperSlide className="swiperslide_custom">
                    <div className="video_thumb_wrapper">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${data?.id?.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default YoutubeSlide;

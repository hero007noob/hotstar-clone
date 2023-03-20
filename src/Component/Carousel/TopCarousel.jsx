import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Box, IconButton } from "@chakra-ui/react";
import BannerImage from "../BannerImage/BannerImage";
function TopCarousel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTrending();
    return () => {};
  }, []);
  const getTrending = async () => {
    let res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=939cb94eb1470cd3b74b2ec575a26449"
    );
    let results = res.data.results;
    console.log(results);
    setData(results);
  };
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 50,
    height: 50,
    cursor: "pointer",
    background: "transparent",
    border: "none",
  };
  return (
    <Box
      w={"100%"}
      borderRadius={"10px"}
      overflow="hidden"
      margin={"auto"}
      mt={"100px"}>
      <Carousel
        infiniteLoop
        autoPlay
        interval={3500}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={95}
        transitionTime={700}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <IconButton
              icon={
                <FiChevronLeft
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "white",
                  }}
                />
              }
              onClick={onClickHandler}
              title={label}
              style={arrowStyles}
              left={"10"}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <IconButton
              icon={
                <FiChevronRight
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "white",
                  }}
                />
              }
              onClick={onClickHandler}
              title={label}
              style={arrowStyles}
              right={"10"}
            />
          )
        }>
        {data.map((item) => (
          <BannerImage data={item} />
        ))}
      </Carousel>
    </Box>
  );
}
export default TopCarousel;

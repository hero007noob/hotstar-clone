import { IconButton } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerImage from "../BannerImage/BannerImage";
import VerticalCard from "../Cards/VerticalCard";
import styles from "../../CSS/CardCarousel.module.css";
export default function CardCarousel({ data }) {
  console.log("um", data);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <Box
      w={"100%"}
      h={"400px"}
      marginY={"30px"}
      alignItems={"center"}
      verticalAlign={true}
      justifyContent={"center"}
      mt="100px">
      <Carousel
        responsive={responsive}
        partialVisbile={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        slidesToSlide={7}
        containerClass={styles.carousel_container}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass={styles.carousel_item}
        customLeftArrow={<CustomLeft />}
        customRightArrow={<CustomRight />}>
        {data != undefined &&
          data.map((item) => {
            if (item.poster_path != undefined)
              return <VerticalCard data={item} />;
          })}
      </Carousel>
    </Box>
  );
}
const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
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
const CustomLeft = ({ onClick }) => (
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
    onClick={onClick}
    style={arrowStyles}
    left={"10"}
  />
);
const CustomRight = ({ onClick }) => (
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
    onClick={onClick}
    style={arrowStyles}
    right={"10"}
  />
);

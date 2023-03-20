import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { capitalize, round, upperCase } from "lodash";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../CSS/HorizontalCard.module.css";
import back from "../../images/bgMissing.jpg";
import {
  addToWishlist,
  checkWishlist,
  removeFromWishlist,
} from "../../Redux/movies/action";
export default function HorizontalCard({ data, type, handleChange }) {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  // console.log(data);
  const imagBaseUrl = "https://image.tmdb.org/t/p/original";
  const addWishlist = (data) => {
    console.log("addToWishlist", data);
    addToWishlist(data).then(() => {
      handleChange();
    });
  };
  const removeWishlist = (id) => {
    console.log("removeFromWishlist", id);
    removeFromWishlist(id).then(() => {
      handleChange();
    });
  };
  const isWishlisted = async () => {
    let exist = await checkWishlist(data.id);
    // console.log("exist: ", exist);
    // console.log(exist ? "exist: oh yea " : "what");
    if (exist) {
      setToggle(false);
    }
    return () => {};
  };
  useEffect(() => {
    isWishlisted(data.id);
  }, []);
  return (
    <div style={{ padding: "10px", height: "200px", width: "300px" }}>
      <div
        className={styles.container}
        style={{ height: "100%", marginTop: "20px" }}>
        <div
          className={styles.image_container}
          onClick={() => navigate(`/watch/${type}/${data.id}`)}
          style={{ cursor: "pointer" }}>
          <Image
            borderRadius={"8px"}
            src={data.backdrop_path ? imagBaseUrl + data.backdrop_path : back}
            width={"100%"}
            alt="banner"
            objectFit={"contain"}
          />
        </div>
        <div
          className={styles.text_container}
          style={{ textAlign: "left", padding: "0px 15px" }}>
          <Text
            color={"white"}
            fontSize={"10px"}
            fontWeight={"600"}
            m="0"
            noOfLines={1}>
            {data.title || data.original_title}
          </Text>
          {/* <Text color={"#ffffff99"} fontSize={"8px"} fontWeight={"500"} m="0">
            {capitalize(data.media_type)} • Rating {round(data.vote_average, 1)}
          </Text> */}
          <Text color={"#ffffffcc"} fontSize={"8px"} noOfLines={2}>
            {data.overview}
          </Text>
          <Button
            leftIcon={
              <Image
                src={
                  toggle
                    ? "https://www.hotstar.com/assets/316d889ad60190a1ae8948c13352ff9d.svg"
                    : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiMxRjgwRTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNzQyIDE3Ljk4NGwtLjA1My0uMDAxYy0uNDQ0LS4wMTYtLjg2LS4yMjEtMS4xNDItLjU2NGwtNC40Ni01LjQyMmMtLjUxNC0uNjI2LS41MzItMS41NjUuMDQtMi4xMzguNjU3LS42NiAxLjcyLS41OTUgMi4yOTYuMTA1bDMuMjE0IDMuOTA3Yy4wOTguMTIuMjguMTI2LjM4Ny4wMTNsNy44OS04LjM1MWMuNTU2LS41ODggMS40ODYtLjcyNSAyLjEyNy0uMjMuNzM3LjU2OC44MDcgMS42MzIuMTg0IDIuMjkxTDEwLjg2NyAxNy41Yy0uMjkzLjMxLS43LjQ4NS0xLjEyNS40ODUiLz4KPC9zdmc+Cg=="
                }
                w={"10px"}
              />
            }
            colorScheme="whiteAlpha"
            color={"rgba(255, 255, 255, 0.6)"}
            fontSize="7px"
            padding={"5px"}
            boxSizing={"border-box"}
            marginBottom="5px"
            borderRadius="3px"
            background={"transparent"}
            w={"100%"}
            _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            textAlign="left"
            justifyContent={"left"}
            h={"16%"}
            onClick={() => {
              toggle ? addWishlist(data) : removeWishlist(data.id);
              console.log("here", data.id);
              setToggle((tog) => !tog);
            }}>
            {toggle
              ? upperCase("Add to Watchlist")
              : upperCase("Remove from Watchlist")}
          </Button>
        </div>
      </div>
    </div>
  );
}

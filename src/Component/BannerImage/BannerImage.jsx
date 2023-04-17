import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { capitalize, round } from "lodash";
import React from "react";
import { useNavigate } from "react-router";
import styles from "../../CSS/banner.module.css";
export default function BannerImage({ data }) {
  const navigate = useNavigate();
  const imagBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div
      style={{ padding: "10px", cursor: "pointer" }}
      onClick={() => navigate(`/watch/movie/${data.id}`)}
    >
      <div className={styles.container} style={{ height: "560px" }}>
        <div
          className={styles.text_container}
          style={{ textAlign: "left", padding: "100px 50px" }}
        >
          <Text
            color={"white"}
            fontSize={{ base: "12px", sm: "12px", md: "24px", lg: "38px" }}
            fontWeight={"600"}
          >
            {data.title || data.original_title}
          </Text>
          <Text
            color={"#ffffff99"}
            fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "22px" }}
            fontWeight={"500"}
          >
            {capitalize(data.media_type)} • Rating {round(data.vote_average, 1)}
          </Text>
          <Text
            noOfLines={3}
            color={"#ffffffcc"}
            fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "20px" }}
            mt={3}
          >
            {data.overview}
          </Text>
        </div>
        <div className={styles.gradient}></div>
        <div className={styles.image_container}>
          <Image
            borderRadius={"14px"}
            src={imagBaseUrl + data.backdrop_path}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}

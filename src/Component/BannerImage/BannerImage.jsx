import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { capitalize, round } from "lodash";
import React from "react";
import styles from "./banner.module.css";
export default function BannerImage({ data }) {
  console.log(data);
  const imagBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div style={{ padding: "10px" }}>
      <div className={styles.container} style={{ height: "560px" }}>
        <div
          className={styles.text_container}
          style={{ textAlign: "left", padding: "10px 20px" }}>
          <Text color={"white"} fontSize={"38px"} fontWeight={"600"}>
            {data.title || data.original_title}
          </Text>
          <Text color={"#ffffff99"} fontSize={"22px"} fontWeight={"500"}>
            {capitalize(data.media_type)} • Rating {round(data.vote_average, 1)}
          </Text>
          <Text color={"#ffffffcc"} fontSize={"22px"}>
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
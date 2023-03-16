import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { capitalize, round } from "lodash";
import React from "react";
import styles from "../../CSS/verticalCard.module.css";
export default function VerticalCard({ data }) {
  console.log(data);
  const imagBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div style={{ padding: "10px", height: "100%" }}>
      <div
        className={styles.container}
        style={{ height: "100%", marginTop: "20px" }}>
        <div className={styles.image_container}>
          <Image
            borderRadius={"8px"}
            src={imagBaseUrl + data.poster_path}
            width={"100%"}
            alt="banner"
          />
        </div>
        <div
          className={styles.text_container}
          style={{ textAlign: "left", padding: "0px 15px" }}>
          <Text
            color={"white"}
            fontSize={"12px"}
            fontWeight={"600"}
            m="0"
            noOfLines={1}>
            {data.title || data.original_title}
          </Text>
          <Text color={"#ffffff99"} fontSize={"10px"} fontWeight={"500"} m="0">
            {capitalize(data.media_type)} • Rating {round(data.vote_average, 1)}
          </Text>
          <Text color={"#ffffffcc"} fontSize={"10px"} noOfLines={3}>
            {data.overview}
          </Text>
        </div>
      </div>
    </div>
  );
}

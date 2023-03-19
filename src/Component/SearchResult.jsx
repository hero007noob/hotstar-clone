import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import backup from "../images/bgMissing.jpg";
export default function SearchResult({ data, close }) {
  const imagBaseUrl = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  return (
    <Flex
      bg={"#192133"}
      m="3%"
      overflow={"hidden"}
      borderRadius="5px"
      onClick={() => {
        navigate(`/watch/movie/${data.id}`);
        close();
      }}>
      <Flex w={"100%"}>
        <Box w={"40%"}>
          <Image
            src={data.backdrop_path ? imagBaseUrl + data.backdrop_path : backup}
          />
        </Box>
        <Box ml={"4%"} mt="2%" w={"56%"} fontWeight="semibold">
          <Text>{data.title || data.original_title}</Text>
          <Text fontSize={"12px"} color={"rgba(255, 255, 255, 0.8)"}>
            Rated {data.vote_average}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

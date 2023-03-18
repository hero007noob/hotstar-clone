import { Box, Text, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HorizontalCard from "../Cards/HorizontalCard";

function RegionalLanguage() {
  const movies = useSelector((store) => {
    return store.movieReducer.RegionalLang;
  });

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const { ln } = useParams();

  return (
    <Box mt={"100px"}>
      <Text
        color={"white"}
        fontSize="26px"
        w={"95%"}
        m="0 auto"
        fontWeight={"500"}
      >
        {ln}
      </Text>
      <Flex
        flexWrap={"wrap"}
        alignContent={"flex-start"}
        justifyContent={{ base: "center", sm: "center", md: "left" }}
        w="95%"
        margin={"0 auto"}
        minH="500px"
      >
        {movies.map((item) => {
          return <HorizontalCard key={item.id} data={item} type={"movie"} />;
        })}
      </Flex>
    </Box>
  );
}

export default RegionalLanguage;

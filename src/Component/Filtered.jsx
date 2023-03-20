import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../CSS/genre.module.css";
import HorizontalCard from "./Cards/HorizontalCard";
import Loader from "./Loader";

export default function Filtered() {
  const { id } = useParams();
  const array = [10749, 18, 36];

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currGenere, setCurrGenere] = useState([]);

  const API_KEY = "939cb94eb1470cd3b74b2ec575a26449";
  const loading = useSelector((state) => state.movieReducer.loading);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}&with_original_language=hi`
      );
      const data = await response.json();
      setData(data.results);
      console.log("ele", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let genre = JSON.parse(localStorage.getItem("currGenre"));
    console.log("genre", genre);
    setCurrGenere(genre);
    fetchData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Box mt={"100px"}>
      <Text
        color={"white"}
        fontSize="26px"
        w={"95%"}
        m="0 auto"
        fontWeight={"500"}>
        {currGenere}
      </Text>
      <Flex
        flexWrap={"wrap"}
        alignContent={"flex-start"}
        justifyContent={{ base: "center", sm: "center", md: "left" }}
        w="95%"
        margin={"0 auto"}
        minH="500px">
        {data &&
          data.map((item) => {
            return <HorizontalCard key={item.id} data={item} type={"movie"} />;
          })}
      </Flex>
    </Box>
  );
}

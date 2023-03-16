import { Stack, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { Box } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/movies/action";
import CardCarousel from "../Carousel/CardCarousel";
import TopCarousel from "../Carousel/TopCarousel";
export default function Home() {
  const dispatch = useDispatch();
  const popular = useSelector((state) => state.movieReducer.popular);
  const latest = useSelector((state) => state.movieReducer.latest);
  useEffect(() => {
    dispatch(getMovies("popularity.desc", "popular"));
    dispatch(getMovies("release_date.desc", "latest"));
    return () => {};
  }, []);
  useEffect(() => {
    console.log("popular", popular);
    return () => {};
  }, [popular]);

  return (
    <Stack
      background={"linear-gradient(to bottom, #141b29, #0c111b 300px)"}
      spacing={"50px"}>
      <TopCarousel />
      <CardCarousel data={popular} />
      <Stack spacing={"1px"}>
        <Text color={"white"} align="left" pl={"20px"} margin={"0"}>
          Hey
        </Text>
      </Stack>
      <Stack spacing={"1px"}>
        <Text color={"white"} align="left" pl={"20px"} margin={"0"}>
          Hey
        </Text>
        <CardCarousel data={latest} />
      </Stack>
    </Stack>
  );
}

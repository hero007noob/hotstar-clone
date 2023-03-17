import { Flex, Stack, Text } from "@chakra-ui/layout";
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
  const grossing = useSelector((state) => state.movieReducer.grossing);
  const rated = useSelector((state) => state.movieReducer.rated);
  const viewed = useSelector((state) => state.movieReducer.viewed);
  useEffect(() => {
    dispatch(getMovies("popularity.desc", "popular"));
    dispatch(getMovies("release_date.desc", "latest"));
    dispatch(getMovies("revenue.desc", "grossing"));
    dispatch(getMovies("vote_average.desc", "rated"));
    dispatch(getMovies("vote_count.desc", "viewed"));
    return () => {};
  }, []);
  useEffect(() => {
    console.log("popular", popular);
    return () => {};
  }, [popular]);

  return (
    <Flex
      direction={"column"}
      background={"linear-gradient(to bottom, #141b29, #0c111b 300px)"}
      paddingBottom={"50px"}>
      <TopCarousel />
      <CardCarousel data={popular} title={"Popular Movies"} />
      <CardCarousel data={latest} title={"Latest & Trending"} />
      <CardCarousel data={grossing} title={"Top Grossing"} />
      <CardCarousel data={rated} title={"Top Rated"} />
      <CardCarousel data={viewed} title={"Most Viewed"} />
    </Flex>
  );
}

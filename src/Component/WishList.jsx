import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { getWishlistData } from "../Redux/movies/action";
import HorizontalCard from "./Cards/HorizontalCard";
import Loader from "./Loader";

export default function WishList() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const getWishlist = async () => {
    let wishlistData = await getWishlistData();
    console.log("x", wishlistData);
    setWishlist(wishlistData);
  };
  useEffect(() => {
    getWishlist();
    return () => {};
  }, []);
  function handleChange() {
    setLoading(true);
    setTimeout(() => {
      getWishlist();
      setLoading(false);
    }, 500);
  }
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
        Watchlist
      </Text>
      <Flex
        flexWrap={"wrap"}
        alignContent={"flex-start"}
        justifyContent={{ base: "center", sm: "center", md: "left" }}
        w="95%"
        margin={"0 auto"}
        minH="500px">
        {wishlist.map((item) => {
          return (
            <HorizontalCard
              key={item.id}
              data={item}
              type={"movie"}
              handleChange={handleChange}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

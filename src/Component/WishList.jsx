import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import HorizontalCard from "./Cards/HorizontalCard";

export default function WishList() {
  const [wishlist, setWishlist] = useState([]);
  const getWishlist = async () => {
    setWishlist([
      {
        adult: false,
        backdrop_path: "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
        genre_ids: [18, 36],
        id: 943822,
        original_language: "en",
        original_title: "Prizefighter: The Life of Jem Belcher",
        overview:
          "At the turn of the 19th century, Pugilism was the sport of kings and a gifted young boxer fought his way to becoming champion of England.",
        popularity: 2446.928,
        poster_path: "/x3PIk93PTbxT88ohfeb26L1VpZw.jpg",
        release_date: "2022-06-30",
        title: "Prizefighter: The Life of Jem Belcher",
        video: false,
        vote_average: 7,
        vote_count: 42,
      },
      {
        adult: false,
        backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
        genre_ids: [16, 12, 35, 10751],
        id: 315162,
        original_language: "en",
        original_title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        popularity: 1943.595,
        poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        release_date: "2022-12-07",
        title: "Puss in Boots: The Last Wish",
        video: false,
        vote_average: 8.4,
        vote_count: 4630,
      },
      {
        adult: false,
        backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
        genre_ids: [28, 12, 878],
        id: 505642,
        original_language: "en",
        original_title: "Black Panther: Wakanda Forever",
        overview:
          "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        popularity: 1671.218,
        poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        release_date: "2022-11-09",
        title: "Black Panther: Wakanda Forever",
        video: false,
        vote_average: 7.3,
        vote_count: 4111,
      },
      {
        adult: false,
        backdrop_path: "/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
        genre_ids: [18],
        id: 785084,
        original_language: "en",
        original_title: "The Whale",
        overview:
          "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
        popularity: 1635.863,
        poster_path: "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
        release_date: "2022-12-09",
        title: "The Whale",
        video: false,
        vote_average: 8.1,
        vote_count: 1262,
      },
      {
        adult: false,
        backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
        genre_ids: [27, 9648, 53],
        id: 631842,
        original_language: "en",
        original_title: "Knock at the Cabin",
        overview:
          "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
        popularity: 1514.423,
        poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
        release_date: "2023-02-01",
        title: "Knock at the Cabin",
        video: false,
        vote_average: 6.4,
        vote_count: 1021,
      },
      {
        adult: false,
        backdrop_path: "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
        genre_ids: [18, 36],
        id: 943822,
        original_language: "en",
        original_title: "Prizefighter: The Life of Jem Belcher",
        overview:
          "At the turn of the 19th century, Pugilism was the sport of kings and a gifted young boxer fought his way to becoming champion of England.",
        popularity: 2446.928,
        poster_path: "/x3PIk93PTbxT88ohfeb26L1VpZw.jpg",
        release_date: "2022-06-30",
        title: "Prizefighter: The Life of Jem Belcher",
        video: false,
        vote_average: 7,
        vote_count: 42,
      },
      {
        adult: false,
        backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
        genre_ids: [16, 12, 35, 10751],
        id: 315162,
        original_language: "en",
        original_title: "Puss in Boots: The Last Wish",
        overview:
          "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        popularity: 1943.595,
        poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        release_date: "2022-12-07",
        title: "Puss in Boots: The Last Wish",
        video: false,
        vote_average: 8.4,
        vote_count: 4630,
      },
      {
        adult: false,
        backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
        genre_ids: [28, 12, 878],
        id: 505642,
        original_language: "en",
        original_title: "Black Panther: Wakanda Forever",
        overview:
          "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        popularity: 1671.218,
        poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
        release_date: "2022-11-09",
        title: "Black Panther: Wakanda Forever",
        video: false,
        vote_average: 7.3,
        vote_count: 4111,
      },
      {
        adult: false,
        backdrop_path: "/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
        genre_ids: [18],
        id: 785084,
        original_language: "en",
        original_title: "The Whale",
        overview:
          "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
        popularity: 1635.863,
        poster_path: "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
        release_date: "2022-12-09",
        title: "The Whale",
        video: false,
        vote_average: 8.1,
        vote_count: 1262,
      },
      {
        adult: false,
        backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
        genre_ids: [27, 9648, 53],
        id: 631842,
        original_language: "en",
        original_title: "Knock at the Cabin",
        overview:
          "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
        popularity: 1514.423,
        poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
        release_date: "2023-02-01",
        title: "Knock at the Cabin",
        video: false,
        vote_average: 6.4,
        vote_count: 1021,
      },
    ]);
  };
  useEffect(() => {
    getWishlist();
    console.log("Wishlist");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("Wishlist", wishlist);
    return () => {};
  }, [wishlist]);

  return (
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
        margin={"0 auto"}>
        {wishlist.map((item) => {
          if (item.backdrop_path != undefined)
            return <HorizontalCard data={item} type={"movie"} />;
        })}
      </Flex>
    </Box>
  );
}

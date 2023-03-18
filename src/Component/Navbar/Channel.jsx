import { Box, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";

function Channel() {
  const channelPath = "./ChannelImage";

  const cArr = [
    {
      img: channelPath + "/661121-h.jpg",
    },
    {
      img: channelPath + "/661132-h.jpg",
    },
    {
      img: channelPath + "/661133-h.jpg",
    },
    {
      img: channelPath + "/661136-h.jpg",
    },
    {
      img: channelPath + "/661100-h.jpg",
    },
    {
      img: channelPath + "/661102-h.jpg",
    },
    {
      img: channelPath + "/661103-h.jpg",
    },
    {
      img: channelPath + "/661105-h.jpg",
    },
    {
      img: channelPath + "/661112-h.jpg",
    },
    {
      img: channelPath + "/661116-h.jpg",
    },
    {
      img: channelPath + "/661117-h.jpg",
    },
    {
      img: channelPath + "/661119-h.jpg",
    },
    {
      img: channelPath + "/661137-h.jpg",
    },
    {
      img: channelPath + "/661138-h.jpg",
    },
    {
      img: channelPath + "/661167-h.jpg",
    },
    {
      img: channelPath + "/661168-h.jpg",
    },
    {
      img: channelPath + "/661170-h.jpg",
    },
    {
      img: channelPath + "/661171-h.jpg",
    },
    {
      img: channelPath + "/661172-h.jpg",
    },
    {
      img: channelPath + "/661173-h.jpg",
    },
    {
      img: channelPath + "/661174-h.jpg",
    },
    {
      img: channelPath + "/661176-h.jpg",
    },
    {
      img: channelPath + "/661177-h.jpg",
    },
    {
      img: channelPath + "/661178-h.jpg",
    },
    {
      img: channelPath + "/661180-h.jpg",
    },
    {
      img: channelPath + "/776620-h.jpg",
    },
    {
      img: channelPath + "/836373-h.jpg",
    },
    {
      img: channelPath + "/956970-h.jpg",
    },
  ];

  return (
    <Box marginTop="100px">
      <Text
        fontSize={{ md: "20px", lg: "25px" }}
        fontWeight="bold"
        color={"white"}
        w="90%"
        margin={"20px auto"}
      >
        Channels
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap="15px"
        w="90%"
        margin={" auto"}
      >
        {cArr.map((elem, i) => {
          return (
            <Box
              key={i}
              position="relative"
              cursor="pointer"
              style={{ transition: "all 300ms ease " }}
              _hover={{ transform: "scale(1.3)", zIndex: "2" }}
            >
              <Image src={elem.img} alt={elem.name} borderRadius="10px" />
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Channel;

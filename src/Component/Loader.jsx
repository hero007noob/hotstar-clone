import { Image } from "@chakra-ui/image";
import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <Flex
      w={"100vw"}
      h="100vh"
      alignItems={"center"}
      justifyContent="center"
      direction={"column"}>
      <Image src="https://secure-media.hotstar.com/web-assets/prod/images/psp-lite/d-plus-h-vertical.svg" />
      <Spinner
        mt="15px"
        thickness="4px"
        speed="0.65s"
        emptyColor="transparent"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
}

import { Box, Flex, Text, IconButton, Spacer, Image } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { BiMovie } from "react-icons/bi";
import { CiBasketball } from "react-icons/ci";
import React from "react";

function MobileFooter() {
  return (
    <Box display={{ sm: "none", md: "none", lg: "none" }} zIndex={10}>
      <Flex
        p="2"
        alignItems="center"
        padding="20px"
        bg="#131927"
        color="white"
        w="100%"
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        zIndex={10}>
        <Box opacity={0.6}>
          <IconButton
            aria-label="Menu"
            icon={<AiOutlineHome />}
            size={32}
            variant="link"
            paddingBottom="5px"
          />
          <Text fontSize={"12px"}>Home</Text>
        </Box>
        <Spacer />
        <Box opacity={0.6}>
          <IconButton
            aria-label="Menu"
            icon={<RiComputerLine />}
            size={32}
            variant="link"
            paddingBottom="5px"
          />
          <Text fontSize={"12px"}>Tv</Text>
        </Box>
        <Spacer />
        <Box>
          <Image
            boxSize="3rem"
            w="70px"
            src="https://i0.wp.com/www.tech-wd.com/wd/wp-content/uploads/2019/03/1200px-Disney_logo.svg_.png?resize=1024%2C594&ssl=1"
            alt="Channel"
          />
        </Box>
        <Spacer />
        <Box opacity={0.6}>
          <IconButton
            aria-label="Menu"
            icon={<BiMovie />}
            size={32}
            variant="link"
            paddingBottom="5px"
          />
          <Text fontSize={"12px"}>Movies</Text>
        </Box>
        <Spacer />
        <Box opacity={0.6}>
          <IconButton
            aria-label="Menu"
            icon={<CiBasketball />}
            size={32}
            variant="link"
            paddingBottom="5px"
          />
          <Text fontSize={"12px"}>Sports</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default MobileFooter;

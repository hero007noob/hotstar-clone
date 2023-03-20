import React from "react";
import { Box, Flex, Text, Grid, Image } from "@chakra-ui/react";
import googleImg from "../../images/SocialMediaImg/googlePlay.png";
import appImg from "../../images/SocialMediaImg/AppStore.png";

function Footer(props) {
  return (
    // <Box
    //   as="footer"
    //   borderTop="1px solid"
    //   borderColor="gray.300"
    //   py="4"
    //   textAlign="center"
    // >
    //   <Text fontSize="sm" color="white">
    //     Hotstar - All rights reserved
    //   </Text>
    // </Box>
    <Grid
      color={"white"}
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap="20px"
      w="90%"
      margin={"auto"}
      marginTop="100px"
      fontSize="14px"
      opacity={0.9}
    >
      <Box>
        <Flex
          w="80%"
          justifyContent={"space-between"}
          marginBottom="10PX"
          flexWrap={"wrap"}
        >
          <Text marginRight="10px">About Disney+ Hotstar</Text>
          <Text marginRight="10px">Terms Of Use</Text>
          <Text marginRight="10px">Privacy Policy</Text>
          <Text marginRight="10px">FAQ</Text>
          <Text marginRight="10px">Feedback</Text>
          <Text>Careers</Text>
        </Flex>
        <Box>
          <Text fontSize={{ base: "12px", sm: "14px" }}>
            © 2023 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </Text>
        </Box>
      </Box>
      <Flex justifyContent="space-between">
        <Box paddingLeft={{ md: "20%" }}>
          <Box fontWeight={500}>Connect with us</Box>
          <Flex marginTop="10px">
            <Image
              src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png"
              alt="facebook"
              height={"40px"}
              width={"40px"}
              marginRight="5px"
            />
            <Image
              src="https://wie.ieee.org/wp-content/uploads/2019/06/twitter-logo-transparent-15.png"
              alt="twitter"
              height={"40px"}
              width={"50px"}
            />
          </Flex>
        </Box>
        <Flex>
          <Box>
            <Box fontWeight={500}>Disney+ Hotstar App</Box>
            <Grid
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                lg: "repeat(2,1fr)",
              }}
              marginTop="10px"
              gap="10px"
            >
              <Image
                src={googleImg}
                alt="googlePlay"
                height="40px"
                width="130px"
                bg={"#192133"}
                borderRadius="5px"
                _hover={{ bg: "#1f80e0" }}
              />
              <Image
                src={appImg}
                alt="AppStore"
                height="40px"
                width="130px"
                bg={"#192133"}
                borderRadius="5px"
                _hover={{ bg: "#1f80e0" }}
              />
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
}

export default Footer;

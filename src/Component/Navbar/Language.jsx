import { Box, Image, Text, Grid, Heading } from "@chakra-ui/react";
import React from "react";

function Language(props) {
  const imgVar = "./LanguageImg";
  const LangArr = [
    {
      img: imgVar + "/Hindi.jpg",
      name: "Hindi",
    },
    {
      img: imgVar + "/English.jpg",
      name: "English",
    },
    {
      img: imgVar + "/Telugu.jpg",
      name: "Telugu",
    },
    {
      img: imgVar + "/Tamil.jpg",
      name: "Tamil",
    },
    {
      img: imgVar + "/Bengali.jpg",
      name: "Bengali",
    },
    {
      img: imgVar + "/Malyalam.jpg",
      name: "Malayalam",
    },
    {
      img: imgVar + "/Marathi.jpg",
      name: "Marathi",
    },
    {
      img: imgVar + "/Kannada.jpg",
      name: "Kannada",
    },
    {
      img: imgVar + "/Korean.jpg",
      name: "Korean",
    },
    {
      img: imgVar + "/Japanese.jpg",
      name: "Japanese",
    },
    {
      img: imgVar + "/Odia.jpg",
      name: "Odia",
    },
  ];

  return (
    <Box marginTop="100px">
      <Text
        fontSize={"20px"}
        fontWeight="bold"
        color={"white"}
        w="90%"
        margin={"20px auto"}
      >
        Languages
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap="10px"
        w="90%"
        margin={" auto"}
      >
        {LangArr.map((elem, i) => {
          return (
            <Box
              key={i}
              position="relative"
              cursor="pointer"
              style={{ transition: "all 300ms ease " }}
              _hover={{ transform: "scale(1.3)", zIndex: "2" }}
            >
              <Image
                src={elem.img}
                alt={elem.name}
                borderRadius="10px"
                opacity={0.6}
                _hover={{ opacity: "1" }}
              />
              <Text
                color={"white"}
                fontSize="20px"
                fontWeight={500}
                position={"absolute"}
                top="50%"
                left={"50%"}
                transform="translate(-50%,-50%)"
                pointerEvents={"none"}
              >
                {elem.name}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Language;

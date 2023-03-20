import { Box, Image, Text, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMovies } from "../../Redux/movies/action";

function Language(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((store) => {
    return store.movieReducer.RegionalLang;
  });
  // const { ln } = useParams();
  // console.log(ln);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleLang = (lang) => {
    // console.log(lang);
    dispatch(getMovies({ language: lang, key: "RegionalLang" }));
  };

  const imgVar = "./LanguageImg";
  const LangArr = [
    {
      img: imgVar + "/Hindi.jpg",
      name: "Hindi",
      code: "hi",
    },
    {
      img: imgVar + "/English.jpg",
      name: "English",
      code: "en",
    },
    {
      img: imgVar + "/Telugu.jpg",
      name: "Telugu",
      code: "te",
    },
    {
      img: imgVar + "/Tamil.jpg",
      name: "Tamil",
      code: "ta",
    },
    {
      img: imgVar + "/Bengali.jpg",
      name: "Bengali",
      code: "ba",
    },
    {
      img: imgVar + "/Malyalam.jpg",
      name: "Malayalam",
      code: "ml",
    },
    {
      img: imgVar + "/Marathi.jpg",
      name: "Marathi",
      code: "mr",
    },
    {
      img: imgVar + "/Kannada.jpg",
      name: "Kannada",
      code: "kn",
    },
    {
      img: imgVar + "/Korean.jpg",
      name: "Korean",
      code: "ko",
    },
    {
      img: imgVar + "/Japanese.jpg",
      name: "Japanese",
      code: "ja",
    },
    {
      img: imgVar + "/Odia.jpg",
      name: "Odia",
      code: "or",
    },
  ];

  return (
    <Box marginTop="100px">
      <Text
        fontSize={"20px"}
        fontWeight="bold"
        color={"white"}
        w="90%"
        margin={"20px auto"}>
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
        margin={" auto"}>
        {LangArr.map((elem, i) => {
          return (
            <Link key={i} to={`/language/lang/${elem.name}`}>
              <Box
                position="relative"
                cursor="pointer"
                style={{ transition: "all 400ms ease " }}
                _hover={{ transform: "scale(1.3)", zIndex: "2" }}
                onClick={() => {
                  handleLang(elem.code);
                }}>
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
                  pointerEvents={"none"}>
                  {elem.name}
                </Text>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Language;

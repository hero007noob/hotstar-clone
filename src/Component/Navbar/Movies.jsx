import React from "react";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import navStyles from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { getMovies } from "../../Redux/movies/action";
import { useNavigate } from "react-router-dom";

function Movies(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const LangArr = [
    {
      name: "Hindi",
      code: "hi",
    },
    {
      name: "English",
      code: "en",
    },
    {
      name: "Telugu",
      code: "te",
    },
    {
      name: "Tamil",
      code: "ta",
    },
    {
      name: "Bengali",
      code: "ba",
    },
    {
      name: "Malayalam",
      code: "ml",
    },
    {
      name: "Marathi",
      code: "mr",
    },
    {
      name: "Kannada",
      code: "kn",
    },
    {
      name: "Korean",
      code: "ko",
    },
    {
      name: "Japanese",
      code: "ja",
    },
    {
      name: "Odia",
      code: "or",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLang = (lang) => {
    // console.log(lang);
    dispatch(getMovies({ language: lang, key: "RegionalLang" }));
  };

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Text
            display={{ sm: "none", md: "none", lg: "block" }}
            fontSize={{ base: "md", md: "lg" }}
            mr={{ base: "0", md: "8" }}
            className={navStyles.movieComp}
          >
            Movies
          </Text>
        </MenuButton>
        <MenuList
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          bg="#192133"
          border="none"
          minW="100px"
          borderRadius="5px"
        >
          {LangArr.map((elem, i) => {
            return (
              <MenuItem
                key={i}
                bg="#192133"
                px={5}
                py={3}
                color="white"
                fontSize="14px"
                fontWeight="600"
                _hover={{ bg: "#0c111b" }}
                onClick={() => {
                  console.log(elem.code);
                  handleLang(elem.code);
                  navigate(`/language/lang/${elem.name}`);
                }}
              >
                {elem.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
}

export default Movies;

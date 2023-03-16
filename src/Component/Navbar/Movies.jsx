import React from "react";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import navStyles from "./navbar.module.css";

function Movies(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
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
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Hindi
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            English
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Telugu
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Tamil
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Bengali
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Malyalam
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Marathi
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Kannada
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Korean
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Japanese
          </MenuItem>
          <MenuItem
            bg="#192133"
            px={5}
            py={3}
            color="white"
            fontSize="14px"
            fontWeight="600"
            _hover={{ bg: "#0c111b" }}
          >
            Odia
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Movies;

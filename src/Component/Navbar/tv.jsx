import React from "react";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import navStyles from "./navbar.module.css";

function Tv() {
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
            fontSize="md"
            mr={{ base: "0", md: "8" }}
            cursor="pointer"
            className={navStyles.tvComp}
          >
            TV
          </Text>
        </MenuButton>
        <MenuList
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          bg="#192133"
          border="none"
          minW="150px"
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
            Celebrating Women
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
            StarPlus
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
            Hotstar Specials
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
            Star Bharat
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
            Star Vijay
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
            Star Maa
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
            Star Jalsha
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
            Star Pravah
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
            More...
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Tv;

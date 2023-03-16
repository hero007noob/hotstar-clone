import React from "react";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import navStyles from "./navbar.module.css";

function Sports(props) {
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
            mr="8"
            className={navStyles.sportComp}
          >
            Sports
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
            Cricket
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
            Football
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
            Hockey
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
            Khelo India
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
            Formula E
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
            Kabaddi
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
            Mixed Martial Arts
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
            American Football
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
            Tennis
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
            Athletics
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Sports;

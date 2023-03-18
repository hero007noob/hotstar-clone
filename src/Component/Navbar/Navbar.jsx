import { useRef } from "react";
import {
  Flex,
  IconButton,
  Button,
  Spacer,
  Text,
  useColorMode,
  InputGroup,
  InputRightElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import navStyles from "./navbar.module.css";
import Tv from "./tv";
import Movies from "./Movies";
import Sports from "./Sports";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [inputWidth, setInputWidth] = useState("200px");
  const [isOpenMenu, setIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const handleClick = () => {
    setInputWidth("300px");
  };

  const handleBlur = () => {
    setInputWidth("200px");
  };

  const handleMouseEnter = () => {
    setIsOpen(!isOpenMenu);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Flex
      p="2"
      alignItems="center"
      padding="20px"
      bg="#131927"
      color="white"
      w="100%"
      position="fixed"
      zIndex={10}
    >
      <Menu isOpen={isOpenMenu}>
        <MenuButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="black"
          mr="4"
          display={{ sm: "block", md: "block", lg: "block" }}
          className={navStyles.menuBtn}
        />
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          size="lg"
          variant="ghost"
          mr="4"
          marginLeft={"-5"}
          display={{ sm: "none", md: "none", lg: "none" }}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#192133"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Box>
                <Text color={"white"} fontSize="16px">
                  {" "}
                  Log in
                </Text>
                <Text
                  color={"white"}
                  fontSize="16px"
                  fontWeight={400}
                  opacity={0.6}
                >
                  For a better experience
                </Text>
              </Box>
            </DrawerHeader>

            <Divider opacity={0.3} />
            <Box>
              <Text fontSize={"15px"} color={"white"} margin="20px">
                Watchlist
              </Text>
            </Box>
            <Divider opacity={0.3} />
            <DrawerBody>
              <Flex
                onClick={() => {
                  onClose();
                  navigate("/channels");
                }}
                color={"white"}
                opacity={0.8}
                margin="40px 0"
              >
                <Image
                  boxSize="1.4rem"
                  src="https://lh3.ggpht.com/MPndj4KtVlLgFC1IC2BE6e2Gbx_ylMCnWnbIUduAMhmQ3KZowrQtHq_BgaPGsH6onwrP=w1200-h630-p-k-no-nu"
                  alt="Channel"
                  mr="20px"
                />
                <span>Channels</span>
              </Flex>
              <Link to={"/language"}>
                <Flex
                  onClick={onClose}
                  color={"white"}
                  opacity={0.8}
                  margin="40px 0"
                >
                  <Image
                    boxSize="1.4rem"
                    src="https://ec.europa.eu/eurostat/cros/profiles/multisite_drupal_standard/modules/features/nexteuropa_multilingual/theme/language-icon.png"
                    alt="Lang."
                    mr="20px"
                  />
                  <span>Language</span>
                </Flex>
              </Link>
              <Link to={"/genre"}>
                <Flex
                  onClick={onClose}
                  color={"white"}
                  opacity={0.8}
                  margin="40px 0"
                >
                  <Image
                    boxSize="1.4rem"
                    src="https://cdn2.iconfinder.com/data/icons/movie-icons/512/Theatre_Masks-1024.png"
                    alt="Genres"
                    mr="20px"
                  />

                  <span>Genres</span>
                </Flex>
              </Link>
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
        {/* <MenuButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IconButton
            aria-label="Menu"
            icon={<HamburgerIcon />}
            size="lg"
            variant="ghost"
            mr="4"
          />
        </MenuButton> */}
        <MenuList
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          bg="#192133"
          border="none"
          minW="150px"
          borderRadius="0"
        >
          <MenuItem
            bg="#192133"
            opacity="0.8"
            color="white"
            _hover={{ bg: "#0c111b", opacity: "1" }}
            onClick={() => {
              navigate("/channels");
            }}
          >
            <Image
              boxSize="1.4rem"
              src="https://lh3.ggpht.com/MPndj4KtVlLgFC1IC2BE6e2Gbx_ylMCnWnbIUduAMhmQ3KZowrQtHq_BgaPGsH6onwrP=w1200-h630-p-k-no-nu"
              alt="Channel"
              mr="12px"
            />
            <span>Channels</span>
          </MenuItem>
          <MenuItem
            bg="#192133"
            color="white"
            opacity="0.8"
            _hover={{ bg: "#0c111b", opacity: "1" }}
          >
            <Image
              boxSize="1.4rem"
              src="https://ec.europa.eu/eurostat/cros/profiles/multisite_drupal_standard/modules/features/nexteuropa_multilingual/theme/language-icon.png"
              alt="Lang."
              mr="12px"
            />
            <span>
              <Link to={"/language"}>Language</Link>
            </span>
          </MenuItem>
          <MenuItem
            bg="#192133"
            color="white"
            opacity="0.8"
            _hover={{ bg: "#0c111b", opacity: "1" }}
            onClick={() => {
              navigate("/genre");
            }}
          >
            <Image
              boxSize="1.4rem"
              src="https://cdn2.iconfinder.com/data/icons/movie-icons/512/Theatre_Masks-1024.png"
              alt="Genres"
              mr="12px"
            />
            <span>Genres</span>
          </MenuItem>
        </MenuList>
      </Menu>
      <Image
        src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
        alt="logo"
        padding="0 0 10px 0"
        mr="6"
        cursor="pointer"
        className={navStyles.logo}
        onClick={() => {
          navigate("/");
        }}
      />
      <Button
        size="xs"
        fontWeight="bold"
        fontSize={{ sm: "10px", md: "12px" }}
        className={navStyles.subBtn2}
        display={{ sm: "none", md: "none", lg: "none" }}
        bg="#1f80e0"
        colorScheme="#1f80e0"
        w={{ sm: "60px", md: "80px" }}
      >
        SUBSCRIBE
      </Button>
      <Tv />
      <Movies />
      <Sports />
      <Text
        display={{ sm: "none", md: "none", lg: "block" }}
        fontSize={{ base: "md", md: "lg" }}
        mr={{ base: "0", md: "6" }}
        className={navStyles.disneyPlus}
      >
        Disney+
      </Text>
      <Spacer />
      <InputGroup
        w={inputWidth}
        mr="6"
        onClick={handleClick}
        onBlur={handleBlur}
        transition="width 0.2s ease-in-out"
        className={navStyles.searchBox}
        display={{ sm: "block", md: "block", lg: "block" }}
      >
        <Input
          type="text"
          placeholder="Search"
          _placeholder={{ opacity: 0.8, color: "white" }}
          size="md"
          variant="flushed"
        />
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
      </InputGroup>
      <Box
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
        className={navStyles.searchBtn}
        display={{ sm: "none", md: "none", lg: "none" }}
      ></Box>
      <Button
        size="xs"
        fontWeight="bold"
        fontSize={{ sm: "10px", md: "12px" }}
        display={{ sm: "block", md: "block", lg: "block" }}
        className={navStyles.subBtn}
        bg="#1f80e0"
        colorScheme="#1f80e0"
        w={{ sm: "70px", md: "80px" }}
        onClick={() => {
          navigate("/login");
        }}
      >
        SUBSCRIBE
      </Button>
      <Button
        bg="none"
        colorScheme="white"
        className={navStyles.loginBtn}
        display={{ sm: "block", md: "block", lg: "block" }}
        fontSize={{ sm: "12px", md: "16px" }}
        onClick={() => {
          navigate("/login");
        }}
      >
        LOGIN
      </Button>
      {/* <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        size="md"
        variant="ghost"
        onClick={toggleColorMode}
      /> */}
    </Flex>
  );
};

export default Navbar;

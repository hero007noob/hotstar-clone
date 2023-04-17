import { useEffect, useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "../SearchResult";
import { useDebounce } from "use-debounce";
import { Logoutfun } from "../../Redux/loginredux/action";
import { searchMovie } from "../../Redux/movies/action";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [inputWidth, setInputWidth] = useState("200px");
  const [isOpenMenu, setIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenAct, openAct, closeAct } = useDisclosure();
  const isAuth = useSelector((state) => state.loginReducer.Auth);
  const updated = useSelector((state) => state.loginReducer.updated);
  const searchResults = useSelector(
    (state) => state.movieReducer.searchResults
  );
  const btnRef = useRef();
  const searchRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedText] = useDebounce(searchQuery, 1000);
  const [plan, setPlan] = useState("base");
  const { name, phone } = JSON.parse(localStorage.getItem("userdetails")) || [];

  const handleClick = () => {
    // setInputWidth("400px");
    searchRef.current.style.display = "block";
  };

  const handleBlur = () => {
    // setInputWidth("200px");
    // setSearchQuery("");
    // closeSearch();
  };
  const closeSearch = () => {
    // searchRef.current.style.display = "none";
    // inputRef.current.value = "";
    setSearchQuery("");
    dispatch(searchMovie({ query: "", key: "searchResults" }));
  };
  const handleMouseEnter = () => {
    setIsOpen(!isOpenMenu);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleProfileMouseEnter = () => {
    setProfileOpen(!isOpenMenu);
  };

  const handleProfileMouseLeave = () => {
    setProfileOpen(false);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    // if (value !== "") {
    //   searchRef.current.style.display = "block";
    // } else {
    //   searchRef.current.style.display = "none";
    // }
    setSearchQuery(value);
    console.log("value changed", debouncedText);
  };
  useEffect(() => {
    console.log("debounced text changed", debouncedText);
    dispatch(searchMovie({ query: debouncedText, key: "searchResults" }));
    return () => {};
  }, [debouncedText]);
  useEffect(() => {
    const sub = JSON.parse(localStorage.getItem("subscription")) || [];
    const user = JSON.parse(localStorage.getItem("userdetails")) || [];
    const newPlan = sub?.package?.plan || user?.package?.plan || "base";
    setPlan(newPlan);
    return () => {};
  }, [updated]);

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
          _hover={{}}
          _active={{}}
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
                  {isAuth ? name : "Log In"}
                </Text>
                <Text
                  color={"white"}
                  fontSize="16px"
                  fontWeight={400}
                  opacity={0.6}
                >
                  {isAuth ? phone : "For a better experience"}
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
          </DrawerContent>
        </Drawer>

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
        ml="80px"
        w={{ sm: "60px", md: "80px" }}
        onClick={() => {
          navigate("/login");
        }}
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
        cursor="pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Disney+
      </Text>
      <IconButton
        bg={{}}
        display={{ base: "none", sm: "none", md: "block" }}
        icon={
          <Image src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" />
        }
      />
      <Spacer />
      <InputGroup
        w={searchQuery === "" ? "200px" : "400px"}
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
          ref={inputRef}
          value={searchQuery}
          variant="flushed"
          onChange={handleChange}
        />
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Box
          ref={searchRef}
          width={"100%"}
          maxH={"400px"}
          bg="#0c111b"
          display={"none"}
          position={"absolute"}
          minH={"0px"}
          overflow="hidden"
          overflowY="scroll"
          // onClose={closeAct}
          p="1%"
        >
          {searchResults &&
            searchResults.length > 2 &&
            searchResults.map((item, i) => (
              <SearchResult key={i} data={item} close={closeSearch} />
            ))}
        </Box>
      </InputGroup>
      <Box
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
        className={navStyles.searchBtn}
        display={{ sm: "none", md: "none", lg: "none" }}
      ></Box>
      {isAuth && plan ? (
        <Button
          variant={"ouline"}
          display={{ base: "none", sm: "none", md: "block" }}
          borderStyle="solid"
          borderWidth={"initial"}
          borderColor={plan == "base" ? "gray" : "#fedf7b"}
          color={plan == "base" ? "gray" : "#fedf7b"}
          onClick={() => {
            navigate("/login");
          }}
        >
          {plan == "SUPER" ? "Super" : plan == "base" ? "Basic" : "Premium"}
        </Button>
      ) : (
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
      )}

      <Flex
        display={{ base: "none", sm: "flex" }}
        w={"100px"}
        justifyContent="center"
      >
        {isAuth ? (
          <Menu isOpen={isProfileOpen}>
            <MenuButton
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
              borderRadius={"50%"}
              as={IconButton}
              backgroundColor="transparent"
              bg={"transparent"}
              _hover={{}}
              _active={{}}
              icon={
                <Image
                  backgroundColor={"transparent"}
                  src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg"
                />
              }
            />
            <MenuList
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
              bg="#192133"
              border="none"
              minW="100px"
              borderRadius="5px"
            >
              <MenuItem
                bg="#192133"
                opacity="0.9"
                fontSize="15px"
                color="white"
                _hover={{ bg: "#0c111b", opacity: "1" }}
                onClick={() => {
                  navigate("/wishlist");
                }}
              >
                Watchlist
              </MenuItem>
              <MenuItem
                bg="#192133"
                opacity="0.9"
                fontSize="15px"
                color="white"
                _hover={{ bg: "#0c111b", opacity: "1" }}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                My Account
              </MenuItem>
              <MenuItem
                bg="#192133"
                opacity="0.9"
                fontSize="15px"
                color="white"
                _hover={{ bg: "#0c111b", opacity: "1" }}
                onClick={() => {
                  dispatch(Logoutfun());
                  navigate("/");
                }}
              >
                Log Out
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            bg="none"
            colorScheme="white"
            className={navStyles.loginBtn}
            display={{ base: "none", sm: "block", md: "block", lg: "block" }}
            fontSize={{ sm: "12px", md: "16px" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </Button>
        )}
      </Flex>

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

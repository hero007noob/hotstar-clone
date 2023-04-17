import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Flex,
  Select,
  useDisclosure,
  Modal,
  FormLabel,
  Input,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
  InputGroup,
  InputLeftAddon,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

import { CheckIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import { RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { checkLogin, getAuth, Logoutfun } from "../Redux/loginredux/action";
import { useDispatch, useSelector } from "react-redux";
import { changeISAuthLogin } from "../Redux/loginredux/action";
import axios from "axios";
// const style={
//     // backgroundImage:("../Images/login-background.jpg")
// }

function Login() {
  const [selectedplan, setSelectedPlan] = useState("SUPER");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [changepin, setChangepin] = useState(false);
  const {
    isOpen: isDeviceOpen,
    onOpen: onDeviceOpen,
    onClose: onDeviceClose,
  } = useDisclosure();
  const isAuth = useSelector((state) => {
    return state.loginReducer.Auth;
  });

  const [inputNumber, setInputNumber] = useState("");

  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    console.log("effect", isAuth);
    // onDeviceOpen();
  }, [isAuth, changepin]);

  const handleSubmit = () => {
    getAuth({ input: inputNumber })
      .then((x) => {
        console.log("resolved", x);
        dispatch(checkLogin());
      })
      .catch((y) => {
        console.log("reject", y);
        onDeviceOpen();
      });
    setInputNumber("");
    onClose();
  };

  const handleUSer = (e) => {
    const val = e.target.value;

    if (val === "option3") {
      handleLogout();
      setChangepin(false);
    } else if (val === "option2") {
      navigate("/profile");
    } else if (val === "option1") {
      navigate("/wishlist");
    }
  };

  const handleLogout = () => {
    // setAuth(false);
    dispatch(Logoutfun());
  };

  const saveSubscription = () => {
    if (selectedplan === "SUPER") {
      let plan = {
        plan: "SUPER",
        price: "₹899/Year",
      };
      localStorage.setItem("subscription", JSON.stringify(plan));
    } else if (selectedplan === "PREMIUM") {
      let plan = {
        plan: "PREMIUM",
        price: "₹1499/Year",
      };
      localStorage.setItem("subscription", JSON.stringify(plan));
    } else if (selectedplan === "PREMIUM1") {
      let plan = {
        plan: "PREMIUM",
        price: "₹299/Year",
      };
      localStorage.setItem("subscription", JSON.stringify(plan));
    }
    navigate("/payment");
  };

  const ph = JSON.parse(localStorage.getItem("userdetails"));

  return (
    <Box w="100%">
      <Modal isOpen={isDeviceOpen} onClose={onDeviceClose} isCentered>
        <ModalOverlay />
        <ModalContent
          background={"linear-gradient(to bottom, #141b29, #0c111b 300px);"}
          color="white">
          {/* <ModalCloseButton /> */}
          <ModalHeader display={"flex"} justifyContent={"center"}>
            <Text>DeviceLimit Exceeded</Text>
          </ModalHeader>
          <ModalBody
            padding={"20px"}
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            fontSize={"18px"}
            flexDirection="column"
            fontWeight={"500"}
            textAlign="center">
            <Text color={"#fedf7b"} fontSize={"22px"}>
              Upgrade Plan To Continue{" "}
            </Text>
            <Text fontSize={"12px"} py="10px">
              OR
            </Text>
            <Text>Logout from Other Devices</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={onDeviceClose}
              w="100%"
              variant="outline">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box className="slide-background"></Box>
      <Box className="login-page">
        <Box className="dummy-header">
          <Flex
            minWidth="max-content"
            justify="space-between"
            alignItems="center"
            gap="2">
            <Box
              p="2"
              mx="20px"
              zIndex={3}
              onClick={() => navigate("/")}
              cursor="pointer">
              <img
                width="120px"
                height="25px"
                src="https://repository-images.githubusercontent.com/570267040/33dadd63-762d-47d7-a0da-812bd20a8d60"
                alt=""
                z-index="3"
                position="relative"
              />
            </Box>

            <ButtonGroup mx="20px" gap="2">
              <Select
                width={["80px", "150px"]}
                height="30px"
                fontSize="12px"
                color="white">
                <option value="option2" className="select-tags">
                  View in English
                </option>
                <option value="option2" className="select-tags">
                  हिंदी
                </option>
                <option value="option3" className="select-tags">
                  తెలుగు
                </option>
              </Select>

              {isAuth === true ? (
                <Select
                  placeholder={phone}
                  width={["80px", "150px"]}
                  height="30px"
                  fontSize="12px"
                  color="white"
                  onChange={(e) => handleUSer(e)}>
                  <option value="" className="select-tags">
                    {ph.phone}
                  </option>
                  <option value="option1" className="select-tags">
                    Watchlist
                  </option>
                  <option value="option2" className="select-tags">
                    My Account
                  </option>
                  <option value="option3" className="select-tags">
                    Log Out
                  </option>
                </Select>
              ) : (
                <Button
                  onClick={onOpen}
                  colorScheme="blue"
                  borderRadius="2px"
                  width="82px"
                  height="30px"
                  fontSize="12px">
                  Log in
                </Button>
              )}

              {/* <Button onClick={onOpen} colorScheme='blue' borderRadius="2px"  width="82px" height="30px" fontSize="12px">Log in</Button> */}
            </ButtonGroup>
          </Flex>
        </Box>
        {/* --------------------------------------------dummy header-------------------------- */}
        {/* --------------------------------------------subscription body starts--------------- */}

        <Box className="login-body">
          <Heading
            fontSize={["15px", "20px", "24px"]}
            mb={"20px"}
            fontWeight="normal">
            Subscribe to watch all content on Disney+ Hotstar
          </Heading>
          {/* -------------------subscription box-------------- */}
          <Box
            className="subscription-box"
            height={["80vh"]}
            w={["90%", "85%", "60%"]}
            my="20px">
            <Grid
              marginTop="10px"
              h="100%"
              templateRows="repeat(12, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}>
              <GridItem rowSpan={8} colSpan={6} p="5%" display="flex">
                {/* subscription top box */}
                <GridItem w="60%" colSpan={4} paddingY="15px">
                  <Box
                    w={"100%"}
                    marginLeft={["", ""]}
                    marginTop={["25", "20px"]}
                    textAlign="left"
                    fontSize={["8px", "9px", "16px"]}
                    fontWeight="500"
                    lineHeight={2.0}
                    color="B3B4BA">
                    <Box
                      p={["5px"]}
                      borderBottom="1px solid rgba(46,51,51,0.4)">
                      <Box my={["15px", "10px"]}>
                        All content <br />
                      </Box>
                      <Box
                        mt="-10px"
                        color="#1f80e0"
                        fontSize={["7px", "10px", "12px"]}>
                        Movies, live sports, TV, Specialst
                      </Box>
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "5px"]}>
                      Watch on TV or Laptop
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "5px"]}>
                      Ads free movies and shows (except sports)
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "5px"]}>
                      Number of devices that can be logged in
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "6px"]}>
                      Max video quality
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "6px"]}>
                      Max audio quality
                    </Box>
                  </Box>
                </GridItem>
                <GridItem
                  textAlign="center"
                  borderRadius={"5px"}
                  paddingY="15px"
                  w="20%"
                  colSpan={2}
                  lineHeight={2.0}
                  bg={selectedplan === "SUPER" ? "#1e2a48" : ""}>
                  <Box
                    fontSize={["12px", "14px", "16px"]}
                    fontWeight="bold"
                    color={
                      selectedplan === "SUPER" ? "#fedf7b" : "rgb(162,166,172)"
                    }>
                    <p>Super</p>
                  </Box>
                  <Box
                    w={"100%"}
                    marginTop={["8px", "15px", "12px"]}
                    fontSize={["8px", "9px", "16px"]}
                    color={
                      selectedplan === "SUPER" ? "white" : "rgb(162,166,172)"
                    }>
                    <Box
                      p={["5px"]}
                      borderBottom="1px solid rgba(46,51,51,0.4)">
                      <Box my={["5px", "10px"]}>
                        <CheckIcon /> <br />
                      </Box>
                      <Box
                        mt="-10px"
                        color="#3182CE"
                        fontSize={["7px", "10px", "12px"]}></Box>
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "5px"]}>
                      <CheckIcon />
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["12px", "5px"]}>
                      <CloseIcon />
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["12px", "5px"]}>
                      2
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "6%"]}
                      fontSize={["10px", "9px", "12px"]}>
                      Full HD(1080p)
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "6%"]}
                      fontSize={["10px", "9px", "12px"]}>
                      Dolby 5.1
                    </Box>
                  </Box>
                </GridItem>

                <GridItem
                  w="20%"
                  textAlign="center"
                  borderRadius={"5px"}
                  colSpan={2}
                  paddingY="15px"
                  lineHeight={2.0}
                  bg={
                    selectedplan === "PREMIUM" || selectedplan === "PREMIUM1"
                      ? "#1e2a48"
                      : ""
                  }>
                  <Box
                    fontSize={["12px", "14px", "16px"]}
                    fontWeight="bold"
                    color={
                      selectedplan === "PREMIUM1" || selectedplan === "PREMIUM"
                        ? "#fedf7b"
                        : "rgb(162,166,172)"
                    }>
                    <p>Premium</p>
                  </Box>
                  <Box
                    w={"100%"}
                    marginTop={["8px", "15px", "12px"]}
                    fontSize={["8px", "9px", "16px"]}
                    color={selectedplan === "SUPER" ? "#E2E8F0" : "white"}>
                    <Box
                      p={["5px"]}
                      borderBottom="1px solid rgba(46,51,51,0.4)">
                      <Box my={["5px", "10px"]}>
                        <CheckIcon /> <br />
                      </Box>
                      <Box
                        mt="-10px"
                        color="#3182CE"
                        fontSize={["7px", "10px", "12px"]}></Box>
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "5px"]}>
                      <CheckIcon />
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["12px", "5px"]}>
                      <CheckIcon />
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["12px", "5px"]}>
                      4
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "6%"]}
                      fontSize={["10px", "9px", "12px"]}>
                      4K (2160P)
                    </Box>
                    <Box
                      borderBottom="1px solid rgba(46,51,51,0.4)"
                      p={["4px", "6%"]}
                      fontSize={["10px", "9px", "12px"]}>
                      Dolby 5.1
                    </Box>
                  </Box>
                </GridItem>
              </GridItem>

              {/* subscription button box */}
              <GridItem rowSpan={2} colSpan={6} color="white">
                <Button
                  fontSize={["10px", "12px", "14px"]}
                  onClick={() => {
                    setSelectedPlan("SUPER");
                  }}
                  justifyContent="left"
                  className="bottom-button"
                  mx={["5px", "2px", "5px"]}
                  color="white"
                  h="65%"
                  w="30%"
                  colorScheme="teal"
                  variant="outline"
                  borderColor={selectedplan === "SUPER" ? "#1f80e0" : "initial"}
                  _hover={{ backgroundColor: "transparent" }}
                  _active={{ backgroundColor: "transparent" }}
                  bg={
                    selectedplan === "SUPER"
                      ? "rgba(31,128,224,0.4)"
                      : "transparent"
                  }>
                  <Flex
                    direction="column"
                    justifyContent="left"
                    textAlign="left">
                    <Text
                      color={selectedplan === "SUPER" ? "#fedf7b" : "#D1D0D4"}
                      fontSize={"18px"}
                      fontWeight={"bold"}>
                      Super
                    </Text>
                    <Text>₹899/Year</Text>
                    {selectedplan === "SUPER" ? (
                      <Box className="checkbox-icon">
                        <CheckIcon />
                      </Box>
                    ) : (
                      ""
                    )}
                  </Flex>
                </Button>

                <Button
                  fontSize={["8px", "12px", "14px"]}
                  onClick={() => {
                    setSelectedPlan("PREMIUM");
                  }}
                  justifyContent="left"
                  className="bottom-button"
                  mx={["5px", "2px", "5px"]}
                  color="white"
                  h="65%"
                  w="30%"
                  colorScheme="teal"
                  variant="outline"
                  borderColor={
                    selectedplan === "PREMIUM" ? "#1f80e0" : "initial"
                  }
                  _hover={{ backgroundColor: "transparent" }}
                  _active={{ backgroundColor: "transparent" }}
                  bg={
                    selectedplan === "PREMIUM"
                      ? "rgba(31,128,224,0.4)"
                      : "transparent"
                  }>
                  <Flex
                    direction="column"
                    justifyContent="left"
                    textAlign="left">
                    <Text
                      color={selectedplan === "PREMIUM" ? "#fedf7b" : "#D1D0D4"}
                      fontSize={"18px"}
                      fontWeight={"bold"}>
                      Premium
                    </Text>
                    <Text>₹1499/Year</Text>
                    {selectedplan === "PREMIUM" ? (
                      <Box className="checkbox-icon">
                        <CheckIcon />
                      </Box>
                    ) : (
                      ""
                    )}
                  </Flex>
                </Button>
                <Button
                  display="inline-block"
                  fontSize={["8px", "12px", "14px"]}
                  onClick={() => {
                    setSelectedPlan("PREMIUM1");
                  }}
                  justifyContent="left"
                  className="bottom-button"
                  mx={["5px", "2px", "5px"]}
                  color="white"
                  h="65%"
                  w="30%"
                  colorScheme="teal"
                  variant="outline"
                  borderColor={
                    selectedplan === "PREMIUM1" ? "#1f80e0" : "initial"
                  }
                  _hover={{ backgroundColor: "transparent" }}
                  _active={{ backgroundColor: "transparent" }}
                  bg={
                    selectedplan === "PREMIUM1"
                      ? "rgba(31,128,224,0.4)"
                      : "transparent"
                  }>
                  <Flex
                    direction="column"
                    justifyContent="left"
                    textAlign="left">
                    <Text
                      color={
                        selectedplan === "PREMIUM1" ? "#fedf7b" : "#D1D0D4"
                      }
                      fontSize={"18px"}
                      fontWeight={"bold"}>
                      Premium
                    </Text>
                    <Text>₹299/Month</Text>
                    {selectedplan === "PREMIUM1" ? (
                      <Box className="checkbox-icon">
                        <CheckIcon />
                      </Box>
                    ) : (
                      ""
                    )}
                  </Flex>
                </Button>
              </GridItem>

              {/* subscription proceed to pay box */}
              <GridItem rowSpan={2} colSpan={6}>
                {isAuth == false ? (
                  <Button
                    onClick={onOpen}
                    my="8px"
                    h="75%"
                    w="95%"
                    colorScheme="blue"
                    _hover={{ backgroundColor: "#1E80E1" }}
                    bg={"#1E80E1"}>
                    CONTINUE WITH{" "}
                    {selectedplan === "SUPER" ? "SUPER" : "PREMIUM"} &nbsp;
                    <RxCaretRight size={"22px"} />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      saveSubscription();
                    }}
                    my="8px"
                    h="75%"
                    w="95%"
                    colorScheme="blue"
                    _hover={{ backgroundColor: "#1E80E1" }}
                    bg={"#1E80E1"}>
                    CONTINUE WITH{" "}
                    {selectedplan === "SUPER" ? "SUPER" : "PREMIUM"} &nbsp;
                    <RxCaretRight size={"22px"} />
                  </Button>
                )}
              </GridItem>
            </Grid>
          </Box>

          {/* ===================login with phone modal==================== */}
          <Modal
            isOpen={isOpen}
            onClose={() => {
              setChangepin(false);
              onClose();
            }}
            isCentered
            size="xl">
            <ModalOverlay />
            {changepin === false ? (
              <ModalContent
                p={"25px"}
                backgroundColor="#192133"
                color={"white"}
                padding="50px">
                <ModalHeader fontSize="25px" fontWeight="400" mt={"80px"}>
                  Login to continue
                </ModalHeader>
                <ModalCloseButton size={"lg"} margin="20px" />
                <ModalBody pb={6}>
                  <Box
                    border={"1px solid #1e75cc"}
                    borderRadius="5px"
                    p="10px"
                    bg="#16273f"
                    mt="40px"
                    textAlign={"center"}>
                    <Button
                      fontSize="20px"
                      _hover={{}}
                      _active={{}}
                      bg="transparant"
                      color="#1e75cc">
                      Have a Facebook/Email account ?
                    </Button>
                  </Box>
                  <InputGroup mt="40px" position="relative">
                    <InputLeftAddon
                      position="absolute"
                      left="-2"
                      // bottom={0.5}
                      border={"none"}
                      bg="transparent"
                      children="+91 | "
                      fontSize="20px"
                    />
                    <Input
                      variant="flushed"
                      pl="60px"
                      fontSize="20px"
                      maxLength={"10"}
                      placeholder="Enter your mobile number"
                      _placeholder={{ fontSize: "20px" }}
                      onChange={(e) => setInputNumber(e.target.value)}
                    />
                  </InputGroup>
                </ModalBody>

                <ModalFooter justifyContent={"center"}>
                  <Button
                    // onClick={handleSubmit}
                    onClick={() => setChangepin(true)}
                    colorScheme="blue"
                    mr={3}
                    w="100%"
                    p={8}
                    fontSize={18}
                    isDisabled={inputNumber.length < 10}>
                    CONTINUE
                    <ChevronRightIcon fontSize={25} />
                  </Button>
                </ModalFooter>
              </ModalContent>
            ) : (
              <ModalContent
                p={"25px"}
                backgroundColor="#192133"
                color={"white"}
                padding="50px">
                <ModalHeader fontSize="25px" fontWeight="400" mt={"80px"}>
                  Enter the 4-digit code sent to <br /> +91******
                  {inputNumber.charAt(6)}
                  {inputNumber.charAt(7)}
                  {inputNumber.charAt(8)}
                  {inputNumber.charAt(9)}
                </ModalHeader>
                <ModalCloseButton size={"lg"} margin="20px" />
                <ModalBody pb={6}>
                  {/* <Box
                    border={"1px solid #1e75cc"}
                    borderRadius="5px"
                    p="10px"
                    bg="#16273f"
                    mt="40px"
                    textAlign={"center"}
                  >
                    <Button
                      fontSize="20px"
                      _hover={{}}
                      _active={{}}
                      bg="transparant"
                      color="#1e75cc"
                    >
                      Have a Facebook/Email account ?
                    </Button>
                  </Box> */}
                  <HStack>
                    <PinInput variant={"flushed"} placeholder=" ">
                      <PinInputField style={{ marginRight: "10px" }} />
                      <PinInputField style={{ marginRight: "10px" }} />
                      <PinInputField style={{ marginRight: "10px" }} />
                      <PinInputField style={{ marginRight: "10px" }} />
                    </PinInput>
                  </HStack>
                  <p
                    style={{
                      color: "#1f80e0",
                      marginTop: "15px",
                      fontWeight: "bolder",
                    }}>
                    RESEND CODE
                  </p>
                  {/* <InputGroup mt="40px" position="relative">
                    <InputLeftAddon
                      position="absolute"
                      left="-2"
                      bottom={0.5}
                      border={"none"}
                      bg="transparent"
                      children="+91 | "
                      fontSize="20px"
                    />
                    <Input
                      variant="flushed"
                      pl="60px"
                      fontSize="20px"
                      placeholder="Enter your mobile number"
                      _placeholder={{ fontSize: "20px" }}
                      onChange={(e) => setInputNumber(e.target.value)}
                    />
                  </InputGroup> */}
                </ModalBody>

                <ModalFooter justifyContent={"center"}>
                  <Button
                    onClick={handleSubmit}
                    // onClick={() => console.log(" pin entered")}
                    colorScheme="blue"
                    mr={3}
                    w="100%"
                    p={8}
                    fontSize={18}
                    isDisabled={inputNumber.length < 10}>
                    CONTINUE
                    <ChevronRightIcon fontSize={25} />
                  </Button>
                </ModalFooter>
              </ModalContent>
            )}
          </Modal>

          {/* <Box color={"white"}>
                    helow
                    <img src="D:\git-hub\hotstar-clone\src\images\footer-hotstar.jpg" alt="no data" />
                   </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

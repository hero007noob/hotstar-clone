import {
  Box,
  Image,
  Text,
  Flex,
  HStack,
  Input,
  Button,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getParentControls,
  setParentControls,
  updateParentControls,
} from "../Redux/parentRedux/action";
import Loader from "./Loader";

function SetPassword() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  // const isLock = useSelector((state) => state.parentReducer.isLocked);
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      inputRef.current.focus();
    }
  }
  function handleContinue(event) {
    setLoading(true);
    updateParentControls(!isEnabled).then(() => {
      dispatch(setParentControls({ value: !isEnabled }));
      setLoading(false);
      setIsEnabled(!isEnabled);
    });
  }
  const checkParentControls = () => {
    setLoading(true);
    getParentControls().then((response) => {
      setLoading(false);
      setIsEnabled(response.status);
    });
  };
  useEffect(() => {
    checkParentControls();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Box bg="#f3f3f3" color="black" width="100%" position="fixed">
      <Box width="600px" height="100vh" margin="auto">
        <Box>
          <Image
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo.svg"
            alt="logo"
            padding="0 0 10px 0"
            width="200px"
            height="80px"
            cursor="pointer"
            margin="50px auto"
            onClick={() => {
              navigate("/");
            }}
          />
        </Box>
        <Flex justifyContent="space-between">
          <Box
            fontWeight={500}
            color="#1f80e1"
            fontSize="22px"
            cursor="pointer"
            onClick={() => {
              window.history.back();
            }}>
            <ChevronLeftIcon fontSize={30} />
            BACK
          </Box>
        </Flex>
        <Box bg="white" color="black" margin="30px 0" padding="20px">
          <Box>
            <Text fontSize="22px" fontWeight="500" marginBottom="10px">
              {isEnabled ? "Disable Parental Lock" : "Create PIN"}
            </Text>
          </Box>
          <Box>
            <Text fontSize="18px" opacity={0.6}>
              {isEnabled
                ? "Please enter a 4-digit PIN to disable parental lock"
                : "Please enter a 4-digit PIN to enable parental lock"}
            </Text>
          </Box>
          {/* <HStack gap={"20px"} margin="20px 0">
            <Input
              type="text"
              size="lg"
              w="5ch"
              maxLength={"1"}
              inputMode="numeric"
              pattern="0-9"
              variant="flushed"
              textAlign={"center"}
              fontSize="20px"
              onChange={(e) => {
                setInput1(e.target.value);
              }}
              //   value = {value}

              //   onChange={(e) => {
              //     handleChange(e);
              //   }}
            />
            <Input
              type="text"
              size="lg"
              w="5ch"
              maxLength={"1"}
              inputMode="numeric"
              pattern="0-9"
              variant="flushed"
              textAlign={"center"}
              fontSize="20px"
              onChange={(e) => {
                setInput2(e.target.value);
              }}
            />
            <Input
              type="text"
              size="lg"
              w="5ch"
              maxLength={"1"}
              inputMode="numeric"
              pattern="0-9"
              variant="flushed"
              textAlign={"center"}
              fontSize="20px"
              onChange={(e) => {
                setInput3(e.target.value);
              }}
            />
            <Input
              type="text"
              size="lg"
              w="5ch"
              maxLength={"1"}
              inputMode="numeric"
              pattern="0-9"
              variant="flushed"
              textAlign={"center"}
              fontSize="20px"
              onChange={(e) => {
                setInput4(e.target.value);
              }}
            />
          </HStack> */}
          <HStack padding="20px 0" width={"100%"}>
            <PinInput
              placeholder=" "
              size={"lg"}
              variant="flushed"
              onChange={(e) => {
                console.log(e, input.length);
                setInput(e);
              }}>
              <PinInputField
                style={{ width: "60px", height: "60px", marginRight: "20px" }}
              />
              <PinInputField
                style={{ width: "60px", height: "60px", marginRight: "20px" }}
              />
              <PinInputField
                style={{ width: "60px", height: "60px", marginRight: "20px" }}
              />
              <PinInputField
                style={{ width: "60px", height: "60px", marginRight: "20px" }}
              />
            </PinInput>
          </HStack>
          <Box>
            <Text opacity={0.6} fontSize="16px">
              By clicking continue, you confirm that you are 18+ years of age
            </Text>
          </Box>
          <Box w={"100%"}>
            <Button
              w="100%"
              margin={"20px auto"}
              padding={"30px"}
              bg="#1f80e0"
              _hover={{}}
              _active={{}}
              color="white"
              size="lg"
              isDisabled={input.length < 4 ? true : false}
              onClick={handleContinue}>
              Continue
              <ChevronRightIcon fontSize={25} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SetPassword;

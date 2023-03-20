import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  HStack,
  Button,
  PinInput,
  PinInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { setParentControls } from "../../Redux/parentRedux/action";

export default function ParentControl() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleContinue(event) {
    console.log("naaaaaaai");
    dispatch(setParentControls({ value: false }));
  }
  useEffect(() => {
    onOpen();

    return () => {};
  }, []);

  return (
    <Box className="slide-background">
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg={"transparent"} width="600px">
          <ModalBody>
            <Box width="100%" height="100%" margin="auto">
              <Box bg="white" color="black" margin="30px 0" padding="20px">
                <Box>
                  <Text fontSize="22px" fontWeight="500" marginBottom="10px">
                    Enter PIN
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="18px" opacity={0.6}>
                    Please enter a 4-digit PIN to enter hotstar
                  </Text>
                </Box>

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
                      style={{
                        width: "60px",
                        height: "60px",
                        marginRight: "20px",
                      }}
                    />
                    <PinInputField
                      style={{
                        width: "60px",
                        height: "60px",
                        marginRight: "20px",
                      }}
                    />
                    <PinInputField
                      style={{
                        width: "60px",
                        height: "60px",
                        marginRight: "20px",
                      }}
                    />
                    <PinInputField
                      style={{
                        width: "60px",
                        height: "60px",
                        marginRight: "20px",
                      }}
                    />
                  </PinInput>
                </HStack>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

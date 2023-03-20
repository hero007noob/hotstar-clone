import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  HStack,
  Text,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Login from "./Login";
import { Logoutfun } from "../Redux/loginredux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineEdit } from "react-icons/ai";
import axios from "axios";

function Profile(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameState, setName] = useState();

  let { id, name, phone } =
    JSON.parse(localStorage.getItem("userdetails")) || [];

  console.log(id, name);

  let editRef = useRef();
  let nameRef = useRef();
  let headingRef = useRef();

  useEffect(() => {
    const postData = () => {};
  }, [name, phone]);

  const handdleEdit = () => {
    editRef.current.style.display = "none";
    nameRef.current.style.display = "flex";
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = (id) => {
    let data = JSON.stringify({
      name: nameState,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `https://hotstar-backend.onrender.com/users/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        let store = JSON.parse(localStorage.getItem("userdetails"));
        store.name = nameState;
        localStorage.setItem("userdetails", JSON.stringify(store));
        console.log("Ref", headingRef.current.value);
        headingRef.current.textContent = nameState;
        editRef.current.style.display = "flex";
        nameRef.current.style.display = "none";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box width={"500px"} margin="150px auto" color="white">
      <Box>
        <Box>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OSIgaGVpZ2h0PSI3OSIgdmlld0JveD0iMCAwIDc5IDc5Ij4KICAgIDxnIGZpbGw9Im5vbmUiPgogICAgICAgIDxjaXJjbGUgY3g9IjM5LjUiIGN5PSIzOS41IiByPSIzOS41IiBmaWxsPSIjRkZGIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzFGODBFMCIgZD0iTTAgMzkuNUMwIDE3LjY4NSAxNy42ODQgMCAzOS41IDAgNjEuMzE1IDAgNzkgMTcuNjg1IDc5IDM5LjVTNjEuMzE1IDc5IDM5LjUgNzlDMTcuNjg0IDc5IDAgNjEuMzE1IDAgMzkuNXptMTkuNzkyIDI2LjM0OGM1LjYyOSAzLjkzIDEyLjQ1MiA2LjI1MyAxOS45MTQgNi4xOCA3LjE3MyAwIDEzLjg4OS0yLjE3OSAxOS40My01Ljk0OSAyLjA0NS0xLjM5IDEuNTM4LTQuNTU1LS44NTQtNS4xNjUtLjI0Ny0uMDYzLS40ODctLjEyMS0uNzItLjE3My00Ljc4Ni0xLjExLTcuNjQtMi42ODMtOC41Ni00LjYyNS0uNzM2LTEuNTczLS4zNjgtMy43MDEgMS4xMDUtNi40NzYgOC43NDQtMTYuNDY3IDcuMTc5LTI1LjcxOCA0LjMyNi0zMC41MjktMi44NTQtNC44MS04LjI4NC03LjQ5My0xNS4yOC03LjQ5My02Ljk5NCAwLTEyLjUxNyAyLjY4My0xNS4zNyA3LjU4Ni0yLjg1MyA0LjgxLTQuNDE4IDE0LjA2MSA0LjQxOCAzMC40MzYgMS4zOCAyLjY4MyAxLjg0IDQuODEgMS4xMDUgNi4zODMtLjkyIDIuMDM1LTMuNzc0IDMuNjA4LTguNTYgNC43MThsLS4wNTMuMDE0Yy0yLjMyLjYxNy0yLjg3MSAzLjcxNy0uOSA1LjA5M2gtLjAwMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt="profileLogo"
            margin="auto"
            height={90}
            width={90}
          />
        </Box>
        <Box textAlign="center">
          <HStack ref={editRef} marginTop={"10px"} justifyContent={"center"}>
            <Heading ref={headingRef} as={"h1"} fontSize="30px">
              {name}
            </Heading>
            <AiOutlineEdit size="25" cursor="pointer" onClick={handdleEdit} />
          </HStack>
          <HStack
            ref={nameRef}
            display="none"
            marginTop={"10px"}
            justifyContent={"center"}
          >
            <Input
              w={200}
              fontSize={22}
              variant="flushed"
              placeholder="Enter Your Name"
              _placeholder={{ paddingLeft: "10px" }}
              onChange={(e) => {
                handleNameChange(e);
              }}
            />
            <AiFillCheckCircle
              size={40}
              color="#1f80e0"
              cursor="pointer"
              onClick={() => {
                handleNameSubmit(id);
              }}
            />
          </HStack>
          <Box>
            <Text fontSize="18px" opacity={0.8} marginTop={"10px"}>
              +91 {phone}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box bg="#192133" padding="20px 5px 20px 5px" marginTop="25px">
        <Box w={"90%"} margin="auto">
          <Box>
            <Text fontSize="22px" fontWeight="500">
              Get more with Disney+ Hotstar Premium
            </Text>
          </Box>
          <Box>
            <Text fontSize="18px" opacity={0.8}>
              Only ₹1499/year
            </Text>
          </Box>
        </Box>
        <Box>
          <Button
            w="95%"
            // size="lg"
            margin=" 25px 0 0 18px"
            padding="35px"
            bg="#1f80e0"
            variant="ghost"
            _hover={{}}
            _active={{}}
            onClick={() => {
              navigate("/login");
            }}
          >
            GET DISNEY+ HOTSTAR PREMIUM <ChevronRightIcon fontSize="30px" />{" "}
          </Button>
        </Box>
      </Box>
      <Box
        bg="#192133"
        m="15px 0 "
        p="20px"
        cursor="pointer"
        onClick={() => {
          navigate("/account-settings");
        }}
      >
        <Flex margin="auto" justifyContent="space-between">
          <Text fontSize="20px">Account Settings</Text>
          <ChevronRightIcon fontSize="35px" opacity={0.6} />
        </Flex>
      </Box>
      <Box bg="#192133" p="20px" mb="1px">
        <Flex margin="auto" justifyContent="space-between">
          <Text fontSize="20px">Manage Devices</Text>
          <ChevronRightIcon fontSize="35px" opacity={0.6} />
        </Flex>
      </Box>
      <Box
        bg="#192133"
        p="20px"
        mb="1px"
        cursor="pointer"
        onClick={() => {
          dispatch(Logoutfun());
          navigate("/");
        }}
      >
        <Flex margin="auto" justifyContent="space-between">
          <Text fontSize="20px">Log Out</Text>
          <ChevronRightIcon fontSize="35px" opacity={0.6} />
        </Flex>
      </Box>
      <Box bg="#192133" p="20px" mb="1px">
        <Flex margin="auto" justifyContent="space-between">
          <Text fontSize="20px">Log Out All Devices</Text>
          <ChevronRightIcon fontSize="35px" opacity={0.6} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Profile;

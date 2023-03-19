import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function AccountSetting() {
  const navigate = useNavigate();

  return (
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
            }}
          >
            <ChevronLeftIcon fontSize={30} />
            BACK
          </Box>
          <Box textAlign="center" fontSize="25px" fontWeight={500}>
            Account Settings
          </Box>
          <Box></Box>
        </Flex>
        <Flex
          margin="30px 0 0 0 "
          bg="#ffffff"
          p="20px"
          justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            navigate("/account-settings/set-password");
          }}
        >
          <Box>
            <Box fontWeight={500} fontSize={"20px"}>
              Create Parental Lock
            </Box>
            <Box>
              <Text fontSize={"18px"} opacity={0.8}>
                Restrict access to your account with PIN
              </Text>
            </Box>
          </Box>
          <Box>
            <ChevronRightIcon fontSize="35px" opacity={0.6} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AccountSetting;

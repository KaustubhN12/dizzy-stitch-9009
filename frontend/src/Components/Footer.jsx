import { Box, Flex, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        width={"100%"}
        bgColor={"#333333"}
        // border={"2px solid red"}
      >
        <Flex
          width={["100%", "80%", "100%"]}
          columns={[1, 1, 1]}
          margin={"auto"}
        >
          <VStack
            width={"80%"}
            // border={"1px solid red"}
            paddingY={"45px"}
            paddingStart={"120px"}
          >
            <Text
              alignSelf={"start"}
              color={"#E0E0E0"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"600"}
            >
              Amazing offers available on nearbuy
            </Text>
            <Text
              color={"#F2F2F2"}
              fontFamily={"sans-serif"}
              fontSize={"11px"}
              fontWeight={"400"}
            >
              nearbuy helps you discover the best things to do, eat and buy –
              wherever you are! Make every day awesome with nearbuy. Dine at the
              finest restaurants, relax at the best spas, pamper yourself with
              exciting wellness and shopping offers or just explore your city
              intimately… you will always find a lot more to do with nearbuy.
              From tattoo parlors to music concerts, movie tickets to theme
              parks, everything you want is now within reach. Don't stop yet!
              Take it wherever you go with the nearbuy mobile app. Based on your
              location and preference, our smart search engine will suggest new
              things to explore every time you open the app. What's more, with
              offers on everything around you... you are sure to try something
              new every time.
            </Text>
          </VStack>
          <VStack
            paddingY={"45px"}
            // border={"1px solid green"}
            width={"20%"}
            paddingStart={"15px"}
          >
            <Text
              alignSelf={"start"}
              color={"#999999"}
              fontFamily={"sans-serif"}
              fontWeight={"700"}
              fontSize={"16px"}
              marginRight={"40px"}
            >
              Follow Us
            </Text>
            <HStack alignSelf={"start"} spacing={"4"}>
              <Img src="https://i.ibb.co/5Lr2zgV/facebook-2.png" alt="" />
              <Img src="https://i.ibb.co/4pC7bjs/twitter.png" alt="" />
              <Img src="https://i.ibb.co/3MWB9d0/instagram.png" alt="" />
            </HStack>
          </VStack>
        </Flex>
      </Box>

      <Box
        width={"100%"}
        bgColor={"#000000"}
        paddingStart={"122px"}
        paddingTop={"30px"}
      >
        <Flex>
          <VStack h={"200px"} width={"25%"} align={"start"}>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"16px"}
              fontWeight={"600"}
            >
              Company
            </Text>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
            >
              About Us
            </Text>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
            >
              Blog
            </Text>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
            >
              Policy
            </Text>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
            >
              Universal Fine Print
            </Text>
          </VStack>
          <VStack h={"200px"} width={"25%"} align={"start"}>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"16px"}
              fontWeight={"600"}
            >
              Help
            </Text>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
            >
              ContactUs
            </Text>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
            >
              Sitemap
            </Text>
          </VStack>
          <VStack h={"200px"} width={"50%"}>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"16px"}
              fontWeight={"600"}
              alignSelf={"start"}
              // paddingLeft={"32px"}
            >
              Download app
            </Text>
            <HStack>
              <Stack w={"30%"}>
                <Img
                  border={"1px solid white"}
                  borderRadius={"4px"}
                  w={"60%"}
                  src="https://www.barcodelookup.com/assets/images/google-play.png"
                  alt=""
                />
                <Text
                  color={"#FFFFFF"}
                  fontFamily={"sans-serif"}
                  fontSize={"13px"}
                  fontWeight={"400"}
                  paddingLeft={"25px"}
                >
                  Google Play
                </Text>
              </Stack>
              <Stack w={"30%"}>
                <Img
                  border={"1px solid white"}
                  borderRadius={"4px"}
                  w={"60%"}
                  src="https://www.barcodelookup.com/assets/images/app-store.png"
                  alt=""
                />
                <Text
                  color={"#FFFFFF"}
                  fontFamily={"sans-serif"}
                  fontSize={"13px"}
                  fontWeight={"400"}
                  paddingLeft={"34px"}
                >
                  App Store
                </Text>
              </Stack>
            </HStack>
            <Text
              color={"#FFFFFF"}
              fontFamily={"sans-serif"}
              fontSize={"13px"}
              fontWeight={"400"}
              alignSelf={"start"}
              // paddingLeft={"32px"}
            >
              Customer Care: +91-7303390416 - 11 AM to 8 PM (MON - SUN)
            </Text>
          </VStack>
        </Flex>

        <Text
          color={"#999999"}
          fontFamily={"sans-serif"}
          fontSize={"13px"}
          fontWeight={"400"}
        >
          Copyright © nearbuy.com India Private Limited. All rights reserved.
        </Text>
        <Text
          color={"#999999"}
          fontFamily={"sans-serif"}
          fontSize={"13px"}
          fontWeight={"600"}
        >
          v 3.0.0
        </Text>
      </Box>
    </div>
  );
};

export default Footer;

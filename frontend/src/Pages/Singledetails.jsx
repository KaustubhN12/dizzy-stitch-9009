import React from "react";
import { Stack, HStack, VStack, Box, Heading } from "@chakra-ui/react";

function Singledetails() {
  return (
    <>
      <h4>Singledetails</h4>

      <HStack w={"100%"} h={"250px"} border={"1px solid grey"}>
        <VStack w="50%" h="100%">
          <Stack>
            <h5>Sub Category</h5>
          </Stack>
          <HStack>
            <Heading>Glanz Studio Unisex Salon </Heading>
            <h4>
              <span>nb</span>4.5/5
            </h4>
          </HStack>
          <HStack>
            <h4>Central Market Lajpat Nagar 2, Lajpat Nagar 2 </h4>
          </HStack>
        </VStack>

        <Stack
          display={"flex"}
          direction={["column", "column", "row"]}
          w={"50%"}
          h={"100%"}
        >
          <Stack w="100%" h="100%">
            <img
              src="https://img4.nbstatic.in/tr:w-500/5f0c2a0edc0e82000c3e9f60.jpg"
              alt="dummy"
              width={"100%"}
              height={"100%"}
            />
          </Stack>
          <Box w="100%" h="100%">
            <img
              src="https://img4.nbstatic.in/tr:w-500/5f0c2a0edc0e82000c3e9f60.jpg"
              alt="dummy"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Stack>
      </HStack>
    </>
  );
}

export default Singledetails;

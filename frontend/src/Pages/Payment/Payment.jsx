import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Payment = () => {
  return (
    <Stack
      w="90%"
      m="auto"
      h="725px"
      display="flex"
      border="1px solid red"
      p={{ base: "8px", md: "15px", lg: "20px" }}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
    >
      <VStack
        w={{ base: "90%", md: "30%", lg: "30%" }}
        m="auto"
        h="100%"
        border="1px solid yellow"
        p="12px"
      >
        <Box m="10px" w="90%" p="10px" border="1px solid black">
          <Heading size="lg" pb="15px">
            Order Summary
          </Heading>
          <hr />
          <Box>
            <Text fontWeight="bold">warehouse cafe</Text>
            <Text>connaught place, delhi</Text>
          </Box>
          <Box>
            <Text>product name</Text>
          </Box>
          <HStack justifyContent="space-evenly">
            <Text fontWeight="bold">Qty: 5</Text>
            <Text fontWeight="bold">₹ 1500</Text>
          </HStack>
        </Box>
        <Box m="10px" w="90%" p="10px" border="1px solid black">
          <HStack pb="15px" justifyContent="space-between">
            <Text>Subtotal(Qty.1)</Text>
            <Text fontWeight="bold">₹ 1000</Text>
          </HStack>
          <hr />
          <HStack pb="15px" justifyContent="space-between">
            <Text>Convenience Fees</Text>
            <Text fontWeight="bold">₹ 20</Text>
          </HStack>
          <hr />
          <HStack pb="15px" justifyContent="space-between">
            <Text>Total</Text>
            <Text fontWeight="bold">₹ 1020</Text>
          </HStack>
          <hr />
        </Box>
      </VStack>
      <Stack w="65%" m="auto" h="100%" border="1px solid green" p="12px">
        Payment Block
      </Stack>
    </Stack>
  );
};

export default Payment;

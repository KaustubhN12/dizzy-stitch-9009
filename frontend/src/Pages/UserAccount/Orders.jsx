import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div
      style={{
        backgroundColor: "#e1e9ec",
        height: "auto",
        paddingBottom: "30px",
      }}
    >
      <Box className="account-Nav" marginBottom="25px">
        <Box width="83%" margin={"auto"}>
          <Box width="60%" display="flex" justifyContent="space-evenly">
            <Link to="/orders">
              <Box padding="15px" borderBottom="2px solid #ef534e">
                <Text color="#ef534e">My orders</Text>
              </Box>
            </Link>
            <Link to="/credits">
              <Box padding="15px">
                <Text fontSize="sm">Credits</Text>
              </Box>
            </Link>
            <Link to="/profile">
              <Box padding="15px">
                <Text fontSize="sm">Profile</Text>
              </Box>
            </Link>
            <Link to="/newsletter">
              <Box padding="15px">
                <Text fontSize="sm">Newsletters</Text>
              </Box>
            </Link>
            <Link to="/refer">
              <Text>
                <Box padding="15px">
                  <Text fontSize="sm">Refer a friend</Text>
                </Box>
              </Text>
            </Link>
            <Link to="/promotion">
              <Box padding="15px">
                <Text fontSize="sm">Promotions</Text>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box width="83%" margin={"auto"}>
        <Text marginLeft="30px" fontSize="23px" fontWeight="thin">
          My Orders
        </Text>
      </Box>
    </div>
  );
};

export default Orders;

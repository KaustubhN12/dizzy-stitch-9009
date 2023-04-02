import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Refer = () => {
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
              <Box padding="15px">
                <Text>My orders</Text>
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
                <Box padding="15px" borderBottom="2px solid #ef534e">
                  <Text fontSize="sm" color="#ef534e">
                    Refer a friend
                  </Text>
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

      <Box width="83%" margin={"auto"} textAlign="center" height="120px">
        <Text marginLeft="30px" fontSize="15px">
          There are no active referral campaigns right now. Keep coming back
        </Text>
        <Link to="/">
          <Button
            _hover={{ boxShadow: "lg" }}
            size="sm"
            color="#ffffff"
            backgroundColor="#ef534e"
            borderRadius="none"
            marginTop="40px"
          >
            CONTINUE SHOPPING
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Refer;

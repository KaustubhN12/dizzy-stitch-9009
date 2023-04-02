import { Link } from "react-router-dom";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user-details"));

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
              <Box padding="15px" borderBottom="2px solid #ef534e">
                <Text fontSize="sm" color="#ef534e">
                  Profile
                </Text>
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

      <Box width="83%" margin={"auto"} textAlign="center">
        <Text marginLeft="30px" fontSize="23px" fontWeight="thin">
          My Profile
        </Text>
      </Box>

      <Box width="50%" margin={"auto"}>
        <Text fontSize="sm" marginBottom="5px">
          Name
        </Text>
        <Input
          backgroundColor={"#ffffff"}
          value={user.name}
          marginBottom="15px"
        />
        <Text fontSize="sm" marginBottom="5px">
          Mobile Number
        </Text>
        <Text fontSize="sm" marginBottom="5px" fontWeight="semibold">
          {user.phone}
        </Text>
        <Button
          _hover={{ boxShadow: "lg" }}
          size="sm"
          color="#ffffff"
          backgroundColor="#ef534e"
          borderRadius="none"
        >
          SAVE CHANGES
        </Button>
      </Box>
    </div>
  );
};

export default Profile;

{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/JxcvyYW/Screenshot-2078.png" alt="Screenshot-2078" border="0"></a><br /><a target='_blank' href='https://nonprofitlight.com/ny/new-york/local-1199-employer-child-care-fund'>1199 child care fund</a><br /> */
}

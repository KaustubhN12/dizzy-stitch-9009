import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function AdminSignup() {
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const SignupData = {
    name: name,
    phone: phone,
    email: email,
    password: password,
  };

  const AddNewAdmin = () => {
    axios
      .post(
        `https://good-puce-hummingbird-garb.cyclic.app/admin/register`,
        SignupData
      )
      .then((res) => {
        toast({
          title: res.data.msg,
          status: "success",
          isClosable: true,
        });
        navigate("/adminlogin");
      })
      .catch((e) => console.log("Signup-Error:", e));
  };

  const handleAdminSignupForm = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      SignupData.name === "" ||
      SignupData.phone === "" ||
      SignupData.email === "" ||
      SignupData.password === ""
    ) {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else if (SignupData.phone.length !== 10) {
      toast({
        title: "Please fill valid phone number",
        status: "warning",
        isClosable: true,
      });
    } else if (!SignupData.email.match(mailformat)) {
      toast({
        title: "Please fill valid email address",
        status: "warning",
        isClosable: true,
      });
    } else {
      localStorage.setItem("signupadmin", JSON.stringify(SignupData));
      // toast({
      //   title: `SignUp Successful ....`,
      //   status: "success",
      //   isClosable: true,
      // });
    }
  };

  const CallFunctions = () => {
    AddNewAdmin();
    handleAdminSignupForm();
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        w={{ base: "90%", md: "70%", lg: "50%" }}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Admin Sign Up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg="#ef534e"
                color={"white"}
                _hover={{
                  bg: "#e7818c",
                }}
                onClick={CallFunctions}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a admin ?{" "}
                <Link
                  to="/adminlogin"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

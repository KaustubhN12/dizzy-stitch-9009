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
  useColorModeValue,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function AdminLogin() {
  const toast = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AdminLoginData = {
    email: email,
    password: password,
  };

  const CheckAdmin = () => {
    axios
      .post(
        `https://good-puce-hummingbird-garb.cyclic.app/admin/login`,
        AdminLoginData
      )
      .then((res) => {
        toast({
          title: res.data.msg,
          status: "success",
          isClosable: true,
        });
        localStorage.setItem("admin-token", res.data.token);
        navigate("/admin");
      })
      .catch((e) =>
        toast({
          title: "Invalid Credentials",
          status: "error",
          isClosable: true,
        })
      );
  };

  const handleAdminLoginForm = () => {
    if (AdminLoginData.email === "" || AdminLoginData.password === "") {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else {
      localStorage.setItem("loginuser", JSON.stringify(AdminLoginData));
    }
  };

  const CallFunctions = () => {
    CheckAdmin();
    handleAdminLoginForm();
  };

  return (
    <Flex
      marginTop="-50px"
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
            Admin Login
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
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
                Login
              </Button>
            </Stack>
            <Stack pt={2}>
              <Text align={"center"}>
                Are you new Admin ?{" "}
                <Link
                  to="/adminsignup"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  Signup
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

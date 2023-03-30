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
import { useState } from "react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginData = {
    email: email,
    password: password,
  };

  const handleLoginForm = () => {
    const signupData = JSON.parse(localStorage.getItem("signupuser"));
    if (signupData === null) {
      toast({
        title: "Please do SignUp first",
        status: "error",
        isClosable: true,
      });
    } else if (LoginData.email === "" || LoginData.password === "") {
      toast({
        title: "Please fill all information",
        status: "warning",
        isClosable: true,
      });
    } else {
      if (
        signupData.email === LoginData.email &&
        signupData.password === LoginData.password
      ) {
        localStorage.setItem("loginuser", JSON.stringify(LoginData));
        toast({
          title: "Login Successfully",
          status: "success",
          isClosable: true,
        });
      } else if (
        signupData.email !== LoginData.email &&
        signupData.password === LoginData.password
      ) {
        toast({
          title: "Please enter valid email",
          status: "warning",
          isClosable: true,
        });
      } else if (
        signupData.email === LoginData.email &&
        signupData.password !== LoginData.password
      ) {
        toast({
          title: "Please enter valid password",
          status: "warning",
          isClosable: true,
        });
      } else {
        toast({
          title: "Invalid Credentials",
          status: "error",
          isClosable: true,
        });
      }
    }
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
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            welcome back again ✌️
          </Text>
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
                onClick={handleLoginForm}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Are you new user?{" "}
                <Link
                  to="/signup"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  SignUp
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

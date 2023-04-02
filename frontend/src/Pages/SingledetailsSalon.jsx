import React, { useId } from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Singlepageabout from "../Components/Singlepageabout";
import SinglePagePhoto from "../Components/SinglePagePhoto";
import SinglePageRecommend from "../Components/SinglePageRecommend";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// const params_data = [
//   {
//     catageory: "BEAUTY SALON",
//     servicname: "Jawed Habib Hair & Beauty",
//     rating: 4.5,
//     address:
//       "Shop No. 119-120, 1st Floor, Vikas Surya Shopping Mall, Sector 3, Manglam Place Rohini, New Delhi",
//     phone: [8130671365, 1147080792],
//     photo: [
//       "https://img4.nbstatic.in/tr:w-500/5ba9f23152faff000d86a547.jpg",
//       "https://img4.nbstatic.in/tr:w-500/5ba9f239d60180000c503360.jpg",
//       "https://img4.nbstatic.in/tr:w-500/5c3432e0ee3588000d918041.jpg",
//     ],
//   },
// ];

function Singledetailsalon() {
  const [title, settitle] = useState("");
  const [flag, setflag] = useState("");

  const [recomenddata, setrecommendata] = useState([]);
  const order_data = useSelector((store) => store.Orderreducer.user);
  const [order, setorder] = useState([]);
  const [singlepagedata, setsinglepagedata] = useState([]);
  const order_total = useSelector((store) => store.Orderreducer.totalPrice);
  const singledata = useSelector((store) => store.restaurantReducer.salon);

  // console.log(singledata[0]._id);

  const navigator = useNavigate();
  const { userID } = useParams();
  // console.log(userID)

  useEffect(() => {
    setorder(order_data);
    // console.log(order_data)
  }, [order_data]);
  // console.log("order",order)

  useEffect(() => {
    // setsinglepagedata(singledata)
    for (var i = 0; i < singledata.length; i++) {
      if (singledata[i]._id == userID) {
        // console.log(singledata[i])
        setsinglepagedata(singledata[i]);
      }
    }
  }, [singledata]);
  // console.log(singlepagedata)

  const handleabout = () => {
    setflag("about");
    settitle("This is about");
  };
  const handlefetch = async () => {
    try {
      let res = await axios
        .get(`https://good-puce-hummingbird-garb.cyclic.app/restDeal/get`)
        .then((res) => {
          console.log("recommend_msg", res.data.msg);
          setrecommendata(res.data.msg);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handlerecommend = () => {
    if (flag == true) {
      setflag(flag);
    }
    setflag("recommend");
    settitle("This is Recommend");
    handlefetch();
  };

  const handlephoto = () => {
    setflag("photo");
    settitle("This is Photo");
  };

  const handleBuy = () => {
    navigator("/payment");
  };

  return (
    <>
      {/* Upper Section  */}
      <HStack w={"100%"} h={["400px", "400px", "250px"]} border={""} p={4}>
        <>
          <VStack w="50%" h="100%" display={"inline"}>
            <Stack>
              <h5
                style={{
                  fontWeight: 700,
                  color: "#999",
                  textTransform: "uppercase",
                }}
              >
                {singlepagedata.bought}
              </h5>
            </Stack>
            <Stack display={"flex"} direction={["column", "column", "row"]}>
              <Heading
                textTransform={"capitalize"}
                lineHeight={"30px"}
                fontWeight={700}
              >
                {singlepagedata.Title}
              </Heading>
              <Box
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px",
                  padding: "6px",

                  display: "inline",
                }}
                w={["80%", "28%", "55%", "13%"]}
              >
                <Box
                  style={{
                    color: "orange",
                    marginRight: "10px",
                    height: "1px",
                    // padding: "10px",
                    fontSize: "20px",
                  }}
                >
                  <img
                    src="https://www.nearbuy.com/static/images/nb.png"
                    alt="nb"
                    style={{
                      height: "12px",
                      marginRight: "6px",
                      paddingRight: "6px",
                    }}
                  />
                </Box>
                <Box
                  ml={["40px", "27px"]}
                  mt={["-5px", "-4px"]}
                  fontSize={["13px", "15px"]}
                  fontWeight={700}
                >
                  {singlepagedata.rating}/5
                </Box>
              </Box>
            </Stack>
            <HStack>
              <h4
                style={{
                  fontWeight: 600,
                  color: "#666",
                  textTransform: "capitalize",
                }}
              >
                {singlepagedata.place}
              </h4>
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
                src={singlepagedata.Image}
                alt="dummy"
                width={"100%"}
                height={"100%"}
              />
            </Stack>
            <Box w="100%" h="100%">
              <img
                src={singlepagedata.Image}
                alt="dummy"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Stack>
        </>
      </HStack>

      {/* Lower Section */}

      <Stack
        border={""}
        w={"100%"}
        display={"flex"}
        direction={"row"}
        padding={"20px"}
      >
        <Stack w={"95%"}>
          <Table>
            <Thead>
              <Tr>
                <Th
                  onClick={handlerecommend}
                  border={"1px solid grey"}
                  cursor={"pointer"}
                  backgroundColor={"#e0e0e0"}
                  _hover={{
                    background: "white",
                    borderBottomColor: "white",
                  }}
                >
                  Recommended
                </Th>
                <Th
                  onClick={handleabout}
                  border={"1px solid grey"}
                  cursor={"pointer"}
                  backgroundColor={"#e0e0e0"}
                  _hover={{
                    background: "white",
                    borderBottomColor: "white",
                  }}
                >
                  About
                </Th>
                <Th
                  onClick={handlephoto}
                  border={"1px solid grey"}
                  cursor={"pointer"}
                  backgroundColor={"#e0e0e0"}
                  _hover={{
                    background: "white",
                    borderBottomColor: "white",
                  }}
                >
                  Photo
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {flag == "about" ? (
                  <Singlepageabout singlepagedata={singlepagedata} />
                ) : (
                  ""
                )}
                {flag == "photo" ? (
                  <SinglePagePhoto singlepagedata={singlepagedata} />
                ) : (
                  ""
                )}
                {flag == "recommend" ? (
                  <SinglePageRecommend recomenddata={recomenddata} />
                ) : (
                  ""
                )}
              </Tr>
            </Tbody>
          </Table>
        </Stack>

        <Stack border={""} w={"50%"} marginTop={"100px"} p={"30px"}>
          <Stack
            textAlign={"center"}
            backgroundColor={"#e0e0e0"}
            p={"18px"}
            borderRadius={"4px"}
          >
            <p style={{ fontWeight: "700", color: "#333" }}>Your Order</p>
          </Stack>
          {order.map((el) => (
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"space-around"}
            >
              <p style={{ color: "#333", fontSize: "12px" }}>{el.Title}</p>
              <p style={{ color: "#333", fontSize: "12px" }}>X{el.count}</p>
              <p
                style={{ fontWeight: 700, color: "#666", fontSize: ".8125rem" }}
              >
                ₹{el.price * el.count}
              </p>
            </Stack>
          ))}

          <Stack
            display={"flex"}
            direction={"row"}
            justifyContent={"space-around"}
          >
            <p>Total:</p>
            <p style={{ fontWeight: 900, color: "#666", fontSize: ".8125rem" }}>
              ₹{order_total}
            </p>
          </Stack>

          <Stack>
            <Button colorScheme="red" onClick={handleBuy}>
              Buy Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Singledetailsalon;

import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Select,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear_order } from "../../Redux/Order/action.order";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = useSelector((store) => store.Orderreducer.totalPrice);
  const count = useSelector((store) => store.Orderreducer);
  const title = useSelector((store) => store.Orderreducer.user.title);
  const order = useSelector((store) => store.Orderreducer.user);

  let subTotal = 0;

  if (total < 500) {
    subTotal = total - total * 0.05;
  } else if (total > 500) {
    subTotal = total - total * 0.1;
  }

  const final_total = subTotal + 20;

  const postOrder = async () => {
    await fetch("https://good-puce-hummingbird-garb.cyclic.app/order/add", {
      method: "POST",
      body: JSON.stringify({ user: order }),
      headers: {
        Authorization: `${localStorage.getItem("user-token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        dispatch(clear_order);
        console.log(order);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/ordersuccess");
  };

  return (
    <Stack
      w="90%"
      m="auto"
      h="725px"
      display="flex"
      p={{ base: "8px", md: "15px", lg: "20px" }}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
    >
      <VStack
        w={{ base: "90%", md: "30%", lg: "30%" }}
        m="auto"
        h="100%"
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
            <Text>{title}</Text>
          </Box>
          <HStack justifyContent="space-evenly">
            <Text fontWeight="bold">Qty: {count.user.length}</Text>
            <Text fontWeight="bold">Amount: ₹ {total}</Text>
          </HStack>
        </Box>
        <Box m="10px" w="90%" p="10px" border="1px solid black">
          <HStack pb="15px" justifyContent="space-between">
            <Text>Subtotal</Text>
            <Text fontWeight="bold">₹ {subTotal}</Text>
          </HStack>
          <hr />
          <HStack pb="15px" justifyContent="space-between">
            <Text>Convenience Fees</Text>
            <Text fontWeight="bold">₹ 20</Text>
          </HStack>
          <hr />
          <HStack pb="15px" justifyContent="space-between">
            <Text>Total</Text>
            <Text fontWeight="bold">₹ {final_total} </Text>
          </HStack>
          <hr />
        </Box>
      </VStack>
      <Stack w={{ base: "95%", md: "65%", lg: "65%" }} m="auto" h="100%">
        <Heading size="lg" pb="15px">
          Payment Options
        </Heading>
        <Tabs variant="enclosed">
          <TabList>
            <Tab fontSize={{ base: "15px", md: "18px", lg: "18px" }}>Paytm</Tab>
            <Tab fontSize={{ base: "15px", md: "18px", lg: "18px" }}>
              Credit Cards
            </Tab>
            <Tab fontSize={{ base: "15px", md: "18px", lg: "18px" }}>
              Debit Cards
            </Tab>
            <Tab fontSize={{ base: "15px", md: "18px", lg: "18px" }}>
              Net Banking
            </Tab>
          </TabList>
          <TabPanels>
            {/* -------------- Paytm ------------- */}
            <TabPanel>
              <p style={{ margin: "5px 10px" }}>Select a wallet</p>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box
                  style={{
                    border: "1px solid red",
                    display: "flex",
                  }}
                  width={{ base: "100%", md: "230px", lg: "250px" }}
                >
                  <CheckCircleIcon
                    style={{
                      marginTop: "50px",
                      color: "red",
                      marginLeft: "15px",
                    }}
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Hn3aKnEbgArjKmMZ49HRKYquqKBjALGD-a8p5FA4&s"
                    alt="paytm"
                  />
                </Box>
                <Button
                  style={{
                    marginTop: "30px",
                    background: "red",
                    color: "white",
                  }}
                  width={{ base: "100%", md: "230px", lg: "250px" }}
                  onClick={postOrder}
                >
                  PAY NOW
                </Button>
              </Box>
            </TabPanel>

            {/* --------------- Credit Card ---------------- */}
            <TabPanel>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "5px 10px" }}>Credit card number</p>
                <input
                  type="text"
                  placeholder="Enter Card Number"
                  style={{ padding: "7px", border: "1px solid grey" }}
                />
                <p style={{ margin: "5px 10px" }}>Name on card</p>
                <input
                  type="text"
                  placeholder="Enter Card Name"
                  style={{ padding: "7px", border: "1px solid grey" }}
                />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    padding: "10px",
                  }}
                  flexDirection={{ base: "column", md: "row", lg: "row" }}
                >
                  <Box>
                    <p style={{ margin: "7px" }}>Expiry date (MM / YY)</p>
                    <input
                      type="date"
                      style={{
                        border: "1px solid grey",
                        marginTop: "5px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Box>
                    <p style={{ margin: "7px" }}>CVV</p>
                    <input
                      type="number"
                      style={{
                        border: "1px solid grey",
                        marginTop: "5px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                </Box>
                <Button
                  style={{
                    display: "block",
                    margin: "auto",
                    marginTop: "30px",
                    background: "red",
                    color: "white",
                  }}
                  width={{ base: "100%", md: "230px", lg: "250px" }}
                  onClick={postOrder}
                >
                  PAY NOW
                </Button>
              </Box>
            </TabPanel>

            {/* ----------------- Debit Card --------------- */}
            <TabPanel>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ margin: "5px 10px" }}>Debit card number</p>
                <input
                  type="text"
                  placeholder="Enter Card Number"
                  style={{ padding: "7px", border: "1px solid grey" }}
                />
                <p style={{ margin: "5px 10px" }}>Name on card</p>
                <input
                  type="text"
                  placeholder="Enter Card Name"
                  style={{ padding: "7px", border: "1px solid grey" }}
                />
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    padding: "10px",
                  }}
                  flexDirection={{ base: "column", md: "row", lg: "row" }}
                >
                  <Box>
                    <p style={{ margin: "7px" }}>Expiry date (MM / YY)</p>
                    <input
                      type="date"
                      style={{
                        border: "1px solid grey",
                        marginTop: "5px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Box>
                    <p style={{ margin: "7px" }}>CVV</p>
                    <input
                      type="number"
                      style={{
                        border: "1px solid grey",
                        marginTop: "5px",
                        padding: "5px",
                      }}
                    />
                  </Box>
                </Box>
                <Button
                  style={{
                    display: "block",
                    margin: "auto",
                    marginTop: "30px",
                    background: "red",
                    color: "white",
                  }}
                  width={{ base: "100%", md: "230px", lg: "250px" }}
                  onClick={postOrder}
                >
                  PAY NOW
                </Button>
              </Box>
            </TabPanel>

            {/* --------------- Net Banking ------------- */}
            <TabPanel>
              <p style={{ margin: "10px" }}>Popular Banks</p>
              <Box
                style={{
                  gap: "20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                }}
              >
                {/* ------------ Axis Bank ---------------- */}
                <Box
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    padding: "10px",
                  }}
                >
                  <input type="radio" style={{ margin: "5px" }} />
                  <img
                    src="https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png"
                    alt="axis"
                    width="70%"
                  />
                </Box>

                {/* ----------------- HDFC Bank -------------- */}
                <Box
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    padding: "5px",
                  }}
                >
                  <input type="radio" style={{ margin: "5px" }} />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrs088EYv3nF54SkTGn_MUWn6-K9wc8Li-CPiVTxyTQ&s"
                    alt="HDFC"
                    width="70%"
                  />
                </Box>

                {/* -------------------- ICICI Bank ---------------- */}
                <Box
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    padding: "10px",
                  }}
                >
                  <input type="radio" style={{ margin: "5px" }} />
                  <img
                    src="https://getvectorlogo.com/wp-content/uploads/2018/12/icici-bank-vector-logo.png"
                    alt="ICICI"
                    width="70%"
                  />
                </Box>

                {/* -------------------- Kotak Bank ---------------- */}
                <Box
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    padding: "10px",
                  }}
                >
                  <input type="radio" style={{ margin: "5px" }} />
                  <img
                    src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/banking-and-finance/kotak-bank-logo.png"
                    alt="Kotak"
                    width="70%"
                  />
                </Box>

                {/* -------------------- Yes Bank ---------------- */}
                <Box
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    padding: "10px",
                  }}
                >
                  <input type="radio" style={{ margin: "5px" }} />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2X5hy5jh3_8NUqQj814S2RLVdjCPRBkm0xXNXCjrD&s"
                    alt="yes"
                    width="70%"
                  />
                </Box>

                {/* -------------------- SBI Bank ---------------- */}
                <Box
                  style={{
                    border: "1px solid grey",
                    display: "flex",
                    padding: "10px",
                  }}
                >
                  <input type="radio" style={{ margin: "5px" }} />
                  <img
                    src="https://www.freepnglogos.com/uploads/sbi-logo-png/state-bank-india-maitech-safe-and-secure-now-2.png"
                    alt="SBI"
                    width="70%"
                  />
                </Box>
              </Box>

              <p style={{ margin: "5px 10px" }}>All Banks</p>
              <Select placeholder="Select Bank" style={{ margin: "5px 20px" }}>
                <option value="Axis Bank">Axis Bank</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="Kotak Bank">Kotak Bank</option>
                <option value="YES Bank">YES Bank</option>
                <option value="SBI Bank">SBI Bank</option>
              </Select>

              <p style={{ margin: "5px 10px" }}>
                We will redirect you to bank website to authorize the payment
              </p>

              <Button
                style={{
                  display: "block",
                  margin: "auto",
                  width: "230px",
                  background: "red",
                  color: "white",
                  marginTop: "30px",
                }}
                width={{ base: "100%", md: "230px", lg: "250px" }}
                onClick={postOrder}
              >
                PAY NOW
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default Payment;

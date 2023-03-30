import React, { useEffect } from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getPremiumRestaurant } from "../../Redux/Restaurants/Action";
import { StarIcon } from "@chakra-ui/icons";

const PremiumRestaurant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPremiumRestaurant);
  }, []);

  const premium_restaurant = useSelector(
    (store) => store.restaurantReducer.premium_restaurant
  );

  // console.log(premium_restaurant)

  const page_info =
    "NEARBUY > DEALS IN NEW DELHI > PREMIUM MERCHANTS - FNB IN NEW DELHI";

  return (
    <div
      style={{ backgroundColor: "#e1e9ec", height: "auto" }}
      className={"container"}
    >
      <Box
        className={"content-box"}
        width="82%"
        margin="auto"
        border="1px solid red"
        height="auto"
      >
        <Box className={"page-info"} paddingTop="10px" paddingBottom="10px">
          <Text fontSize={"xs"} color="#9c9ca0" fontWeight="semibold">
            {page_info}
          </Text>
        </Box>
        <Box className="hr-line" border="1px solid #e0e0e0"></Box>
        <Box
          className={"page-data"}
          border="1px solid"
          height="auto"
          display={"flex"}
        >
          <Box className={"sidebar"} width="24%" border="1px solid red">
            <Box
              className={"sidebar-info"}
              paddingTop="10px"
              paddingBottom="10px"
              border="1px solid"
            >
              <Text fontSize={"sm"} color="#623351" fontWeight="semibold">
                Promos & Filters
              </Text>
            </Box>
            <Box className={"coupon&filter"}>
              <Box
                className={"coupon"}
                height="200px"
                border="1px solid brown"
                backgroundColor="#ffffff"
              ></Box>
              <Box
                className={"filter"}
                height="400px"
                border="1px solid"
                marginTop="20px"
                backgroundColor="#ffffff"
              ></Box>
            </Box>
          </Box>
          <Box
            className={"service-section"}
            width="76%"
            border="1px solid blue"
            paddingLeft="20px"
          >
            <Box
              className={"service-info"}
              paddingTop="10px"
              paddingBottom="10px"
              border="1px solid"
            >
              <Text fontSize={"sm"} color="#623351" fontWeight="semibold">
                Premium Merchants - FNB in New Delhi
              </Text>
            </Box>
            <Box
              className={"service-cars"}
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(3,1fr)"
            >
              {premium_restaurant.map((el) => {
                return (
                  <Box backgroundColor="#ffffff">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      borderRadius="md"
                      overflow="hidden"
                      padding="16px"
                      height="300px"
                    >
                      <Image src={el.Image} alt={el.Title} />
                      {el.rating && (
                        <Box
                          className="star-icons"
                          display={"flex"}
                          height="auto"
                          border="1px solid #e0e0e0"
                          padding="1px"
                          width={"107px"}
                          borderRadius="3px"
                          position={"absolute"}
                          marginTop="-24px"
                          marginLeft="5px"
                          backgroundColor="#ffffff"
                          paddingLeft="7px"
                          alignItems={"center"}
                        >
                          <Image
                            height="10px"
                            marginRight="5px"
                            src={"https://www.nearbuy.com/static/images/nb.png"}
                          ></Image>
                          {Array(5)
                            .fill("")
                            .map((_, i) => (
                              <StarIcon
                                key={i}
                                boxSize={"10px"}
                                color={
                                  i < (+el.rating).toFixed()
                                    ? "#ffc100"
                                    : "gray.300"
                                }
                              />
                            ))}
                          <Text
                            fontSize="11px"
                            fontWeight="bold"
                            marginLeft="5px"
                          >
                            {el.rating}
                          </Text>
                        </Box>
                      )}
                      <Box>
                        <Box mt="10px" lineHeight="tight">
                          <Text fontWeight={"bold"} fontSize="15px">
                            {" "}
                            {el.Title}
                          </Text>
                        </Box>
                        <Box mt="5px" lineHeight="tight">
                          <Text fontSize="12px" color="#bebebc">
                            {" "}
                            {el.place}
                          </Text>
                        </Box>
                        <Box display="flex" alignItems="center" mt="10px">
                          <Badge
                            px="7px"
                            color="#ffffff"
                            marginRight="8px"
                            backgroundColor={"#f47b58"}
                            fontSize="10px"
                            fontWeight={"thin"}
                          >
                            {el.Tag}
                          </Badge>
                          <Box>
                            <Text fontSize="12px" fontWeight={"normal"}>
                              {" "}
                              {el.price}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      backgroundColor="#f6f6f6"
                      padding="10px 10px 10px 16px"
                    >
                      <Text
                        fontSize="12px"
                        fontWeight="500"
                        color="RGBA(0, 0, 0, 0.64)"
                      >
                        {el.bought}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PremiumRestaurant;

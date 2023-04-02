import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Checkbox,
  RadioGroup,
  Stack,
  Radio,
  Input,
  Button
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {  getSalon } from "../Redux/Restaurants/Action";
import { StarIcon } from "@chakra-ui/icons";
import { useLocation, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";


const Salon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchparams, setSearchParams] = useSearchParams();
  const initialState = searchparams.getAll("place");
  const initialOrder = searchparams.get("order");
  const [place, setPlace] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");
  const toast = useToast();
  const page_info =
    "NEARBUY > DEALS IN NEW DELHI > ALL HAIRCUT OFFERS IN NEW DELHI";
  let Restaurants = 0;

  let dynamicFilter = {};
  let filterArray = [];

  let obj = {
    params: {
      place: searchparams.getAll("place"),
      sort: searchparams.get("order") && "originalprice",
      order: searchparams.get("order"),
    },
  };

  const handleChange = (e) => {
    let newPlace = [...place];
    let value = e.target.value;

    if (newPlace.includes(value)) {
      newPlace.splice(newPlace.indexOf(value), 1);
    } else {
      newPlace.push(value);
    }
    setPlace(newPlace);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    dispatch(getSalon(obj));
  }, [location.search]);

  useEffect(() => {
    let params = {
      place,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [place, order]);

  const salonData = useSelector(
    (store) => store.restaurantReducer.salon
  );

  for (let i = 0; i < salonData.length; i++) {
    Restaurants++;
    if (dynamicFilter[salonData[i].place] == undefined) {
      dynamicFilter[salonData[i].place] = 1;
      filterArray.push(salonData[i].place);
    } else {
      dynamicFilter[salonData[i].place]++;
    }
  }

  
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="95px" marginLeft="10px" zIndex={1}>
      <ChevronLeftIcon
        boxSize={7}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-100px" marginLeft="260px">
      <ChevronRightIcon
        boxSize={7}
        background="gray.50"
        borderRadius="50%"
        color="gray.500"
        _hover={{ color: "pink.400", background: "gray.50" }}
        {...props}
      />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        },
      },
    ],
  };

  const coupons = [
    {
      id: 1,
      discount: "Win Rs 500 instant off code",
      title: "Valid on all prepaid deals | No minimum purchase",
      code: "NBLUCKY",
      validity: "Valid till 04 Apr 2023",
    },
    {
      id: 2,
      discount: "30% OFF",
      title: "30% Discount Code (Upto ₹200) | No minimum purchase",
      code: "MARCH30",
      validity: "Valid till 31 Mar 2023",
    },
    {
      id: 3,
      discount: "25% OFF",
      title: "Get discount code of 25% value | All Spa Deals",
      code: "RELAX",
      validity: "Valid till 31 Dec 2023",
    },
    {
      id: 4,
      discount: "25% OFF",
      title: "Get discount code of 25% value | All Salon Deals",
      code: "STYLE",
      validity: "Valid till 31 Dec 2023",
    },
    {
      id: 5,
      discount: "25% OFF",
      title: "Get discount code of 25% value | All Restaurant Deals",
      code: "FOODY",
      validity: "Valid till 31 Dec 2023",
    },
    {
      id: 6,
      discount: "25% OFF",
      title: "Get discount code of 25% value | All Activities Deals",
      code: "FUN25",
      validity: "Valid till 31 Dec 2023",
    },
    {
      id: 7,
      discount: "5% OFF",
      title: "5% Instant discount upto ₹100 | Valid for new users only.",
      code: "WELCOME",
      validity: "Valid till 31 Dec 2023",
    },
    {
      id: 8,
      discount: "5% OFF",
      title: "Get discount code of 5% value | All Gift Cards",
      code: "PRIZE",
      validity: "Valid till 31 Dec 2023",
    },
  ];

  const localFilter=['Shankar Road, New Rajendra Nagar', 'Vikas Surya Shopping Mall, Manglam Place Rohini', 'Central Market Lajpat Nagar 2, Lajpat Nagar 2', 'Malviya Nagar Corner Market, Malviya Nagar', 'Vegas Mall, Sector 14 Dwarka', 'Kalkaji', 'Funcity Mall, Rohini Sector 14', 'Rajouri Garden', 'Vasant Kunj Sector B', 'Gurudwara Road, Tilak Nagar', 'Club Road Market, Punjabi Bagh West', 'Mahavir Enclave', 'Shaheed Rajguru Marg, Vikaspuri', 'Lajpat Nagar 2', 'Chattarpur', 'Hauz Khas Village, HKV', 'Nehru Market, Rajouri Garden Extension', 'Maharaja Surajmal Road, Surajmal Vihar', 'Acharya Niketan', 'Malviya Nagar', 'Ajmal Khan Road, Karol Bagh', 'Rohini Sector 24', 'Pyarelal Road, Karol Bagh', 'Rajouri Garden Main Market, Rajouri Garden', 'Patel Road, Patel Nagar East', 'Maharaja Agrasen Marg, Rohini Sector 7', 'Sector 4 Dwarka', 'CR Park Main Road, Chittaranjan Park', 'Ramphal Chowk Road, Palam Village', 'Karkar Duma', 'Subhash Nagar', 'Gurudwara Road, Bhagwan Nagar', 'Sector 7 Market, Palam Village', 'Veer Savarkar Marg, Lajpat Nagar 2', 'Patel Nagar West', 'Gole Market, Bhagat Singh Market', 'Palam', 'New Ashok Nagar', 'Malviya Nagar Road, Panchsheel Extension', 'Club Road, Punjabi Bagh West', 'Azad Nagar', '       Spark Mall, Kamla Nagar', 'Rohini Sector 5', 'Greater Kailash 2', 'Lala Lajpat Rai Road, Jangpura Extension', 'Ram Vihar', 'Ramesh Nagar', 'East of Kailash', 'Jawahar Nagar', 'Paschim Vihar', 'Pitampura', '       Madhu Vihar', 'Vikaspuri', 'Lajpat Nagar 4', 'Connaught Place', 'Om Vihar', 'Janakpuri', 'Palam - Dabri Marg, Dabri', 'Rajouri Garden Extension', 'Club Road Market, Punjabi Bagh Extension', 'Rohini Sector 7', 'Mayur Vihar Phase 1', 'Inderpuri', 'Hospital Road, Jangpura Extension', 'PUSA Road, Old Rajendra Nagar', 'MGF Metropolitan Mall, Saket', '          Vikas Marg, New Rajdhani Enclave', 'Najafgarh Road, Janakpuri', 'Uttam Nagar', 'Samalka', 'Desh Bandhu Gupta Road, Karol Bagh', 'Vasant Square Mall, Vasant Kunj Sector B', 'Rohini Sector 4', 'Mahavir Enclave 1', 'Karol Bagh', 'Lajpat Nagar 1', 'MG Road, Sultanpur', 'Patel Nagar East', 'Hauz Rani', 'Model Town 2', 'Govindpuri', 'Vikas Marg, Preet Vihar']

  return (
    <div
      style={{ backgroundColor: "#e1e9ec", height: "auto" , paddingBottom:"30px" }}
      className={"container"}
    >
      <Box
        className={"content-box"}
        width={["93%", "95%", "82%"]}
        margin="auto"
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
          height="auto"
          display={"flex"}
          flexDirection={["column", "column", "initial"]}
        >
          <Box
            className={"sidebar"}
            width={["100%", "100%", "24%"]}
          >
            <Box
              className={"sidebar-info"}
              paddingTop="10px"
              paddingBottom="10px"
            >
              <Text fontSize={"sm"} color="#623351" fontWeight="semibold">
                Promos & Filters
              </Text>
            </Box>
            <Box
              className={"coupon&filter"}
              display={["block", "flex", "block"]}
            >
              <Box
                className={"coupon"}
                height="200px"
                backgroundColor="#ffffff"
                width={["auto", "50%", "auto"]}
                marginBottom={["20px","initial","initial"]}
                marginRight={["initial","20px","initial"]}
              >
                <Slider {...settings}>
                  {coupons.map((el, index) => {
                    return (
                      <div key={index}>
                        <Box>
                          <Box padding="15px">
                          <Text fontWeight="bold" fontStyle="sans-serif" fontSize="17px">{el.discount}</Text>
                          <Text fontWeight="semibold" fontSize="xs" marginTop="35px">{el.title}</Text>
                          <Box display={"flex"} marginTop="10px" >
                            <Input size="sm" width="100px" value={el.code} color="#66aadc"/>
                            <CopyToClipboard text={el.code}>
                              <Button size="sm" onClick={()=>{
                                toast({
                                  title: 'Code copied.',
                                  description:el.code ,
                                  status: 'success',
                                  duration: 3000,
                                  isClosable: true,
                                })
                              }}>Copy</Button>
                            </CopyToClipboard>
                          </Box>
                          </Box>
                          <Box className="hr-line" border="1px solid #e8e8e8"></Box>
                          <Text fontWeight="semibold" fontSize="xs" marginTop="4px" marginLeft={"15px"}>{el.validity}</Text>
                        </Box>
                      </div>
                    );
                  })}
                </Slider>
              </Box>
              <Box
                className={"filter"}
                height={["200px", "200px", "300px"]}
                marginTop={["0px", "0px", "20px"]}
                backgroundColor="#ffffff"
                width={["auto", "50%", "auto"]}
                overflowY={["scroll", "scroll", "scroll"]}
                paddingBottom="10px"
                sx={{
                  '&::-webkit-scrollbar': {
                    width: '5px',
                    borderRadius: '26px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `RGB(240 138 135)`,
                    borderRadius: "20px",
                    border: "6px solid transparent"
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: "RGB(236 37 30)"
                  }
                }}
              >
                <Text
                  fontWeight={"thin"}
                  fontSize="17px"
                  marginTop={"10px"}
                  marginLeft={"10px"}
                >
                  Location
                </Text>
                <Box
                  className={"places"}
                  width={"93%"}
                  margin="auto"
                  justifyContent={"space-between"}
                  display={"flex"}
                >
                  <Box alignItems={"center"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize="12px"
                      marginTop={"10px"}
                      marginBottom="5px"
                    >
                      Beauty & Salon
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={"12px"}>({Restaurants})</Text>
                  </Box>
                </Box>
                <Text
                  fontWeight={"semibold"}
                  fontSize="12px"
                  marginTop={"10px"}
                  marginLeft={"10px"}
                  marginBottom="5px"
                >
                  New Delhi
                </Text>
                {localFilter.map((el) => {
                  return (
                    <Box
                      className={"places"}
                      width={"93%"}
                      margin="auto"
                      justifyContent={"space-between"}
                      display={"flex"}
                    >
                      <Box alignItems={"center"}>
                        <Checkbox
                          value={el}
                          onChange={handleChange}
                          checked={place.includes(el)}
                          colorScheme={"red"}
                          size={"sm"}
                        >
                          {el}
                        </Checkbox>
                      </Box>
                      <Box>
                        <Text fontSize={"12px"}>({dynamicFilter[el]})</Text>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Box
            className={"service-section"}
            width={["100%", "100%", "76%"]}
            paddingLeft={["0px", "0px", "20px"]}
          >
            <Box
              className={"service-info"}
              paddingTop="10px"
              paddingBottom="10px"
              display={"flex"}
              flexDirection={["column", "column", "initial"]}
              justifyContent="space-between"
            >
              <Text
                fontSize={"sm"}
                color="#623351"
                fontWeight="semibold"
                marginBottom={["10px", "10px", "0px"]}
              >
                All Haircut Offers in New Delhi
              </Text>
              <div onChange={handleSort}>
                <RadioGroup marginRight="20px">
                  <Stack direction={["column", "row", "row"]}>
                    <Box
                      backgroundColor={"#ffffff"}
                      padding="0px 9px"
                      borderRadius="3px"
                    >
                      <Radio
                        name="order"
                        size="sm"
                        colorScheme="red"
                        value=""
                        defaultChecked
                      >
                        Popular
                      </Radio>
                    </Box>
                    <Box
                      backgroundColor={"#ffffff"}
                      padding="0px 9px"
                      borderRadius="3px"
                    >
                      <Radio
                        name="order"
                        value="desc"
                        size="sm"
                        colorScheme="red"
                        defaultChecked={order == "asc"}
                      >
                        Price(High to Low)
                      </Radio>
                    </Box>
                    <Box
                      backgroundColor={"#ffffff"}
                      padding="0px 9px"
                      borderRadius="3px"
                    >
                      <Radio
                        name="order"
                        value="asc"
                        size="sm"
                        colorScheme="red"
                        defaultChecked={order == "desc"}
                      >
                        Price(Low to High)
                      </Radio>
                    </Box>
                  </Stack>
                </RadioGroup>
              </div>
            </Box>
            <Box
              className={"service-cards"}
              display="grid"
              gap="20px"
              gridTemplateColumns={[
                "repeat(1,1fr)",
                "repeat(2,1fr)",
                "repeat(3,1fr)",
              ]}
            >
              {salonData.map((el) => {
                return (
                  <Box
                    backgroundColor="#ffffff"
                    borderRadius="5px"
                    boxShadow="md"
                    onClick={()=>{
                        navigate(`/singledetails/${el._id}`)
                    }}
                  >
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
                      borderRadius="0px 0px 5px 5px"
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

export default Salon;


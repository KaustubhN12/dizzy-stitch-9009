import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import { Box, Container, HStack, Img, Text, VStack } from "@chakra-ui/react";

// <----------------------------- Hangout---------------------------------------------->

export function SliderHangout(props) {
  const { data } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        paddingBlock: ["0px", "0px", "20px"],
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            return (
              <Container
                centerContent
                overflow={"hidden"}
                maxW={"fit-content"}
                key={item.title}
              >
                <Box
                  height={["300px"]}
                  width={["300px", "250px", "200px"]}
                  boxShadow={"inset 0px -140px 98px -17px rgba(0,0,0,0.83)"}
                  backgroundImage={`url(${item.image})`}
                  position={"relative"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  borderRadius={"10"}
                >
                  <VStack
                    color={"white"}
                    position={"absolute"}
                    padding={"15px"}
                    bottom={"0"}
                  >
                    <Text alignSelf={"start"}>{item.name}</Text>
                    <Text alignSelf={"start"}>Offers {item.offer}</Text> |
                    <Text alignSelf={"start"}>Starting from ₹{item.price}</Text>
                  </VStack>
                </Box>
              </Container>
            );
          })}
      </Slider>
    </div>
  );
}

//<-------------------------------------- Top Componies------------------------------------------->

export function SliderTopCompanies(props) {
  const { data } = props;
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", padding: "45px", margin: "auto" }}>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            return (
              <Container
                centerContent
                overflow={"hidden"}
                maxW={"fit-content"}
                key={item.title}
              >
                <Box
                  _hover={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  alignContent={"center"}
                  justifyContent={"center"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  }
                  borderRadius={"20"}
                >
                  <Img
                    borderRadius={"10px"}
                    width={"100%"}
                    src={item.image}
                    alt={item.alt}
                  />
                </Box>
              </Container>
            );
          })}
      </Slider>
    </div>
  );
}

//<-----------------------------------SliderCategories--------------------------------------------->

export function SliderCategories(props) {
  const { data } = props;
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", padding: "20px", margin: "auto" }}>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            return (
              <Container
                centerContent
                maxW={"fit-content"}
                key={item.title}
                padding={"10px"}
              >
                <Box
                  bg={"white"}
                  _hover={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  padding={"10px"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                  }
                  borderRadius={"10"}
                >
                  <Img
                    borderRadius={"10px"}
                    width={"100%"}
                    src={item.image}
                    alt={item.alt}
                  />
                  <Text fontSize={"15px"} fontWeight={"600"} bg={"white"}>
                    {item.title}{" "}
                  </Text>
                </Box>
              </Container>
            );
          })}
      </Slider>
    </div>
  );
}

//<------------------------------------NearBuy------------------------------------------------------------->
export function SliderNearBuy(props) {
  const { data } = props;
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", padding: "20px", margin: "auto" }}>
      <Slider {...settings}>
        {data &&
          data.map((item) => {
            return (
              <HStack
                width="82%"
                paddingLeft={"20px"}
                paddingY={"25px"}
                // border={"2px solid red"}
              >
                <Box
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  borderRadius={"8px"}
                  // border={"2px solid green"}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; 0px 1px"}
                >
                  <Img src={item.image} alt={item.title} borderRadius={"4%"} />
                  <Text
                    paddingLeft={"10px"}
                    colour={"#a1a1a1"}
                    fontFamily={"sans-serif"}
                    fontWeight={"600"}
                    fontSize={"16px"}
                  >
                    {item.title}
                  </Text>
                  <br />
                  <Text
                    paddingLeft={"10px"}
                    colour={"#a1a1a1"}
                    fontSize={"13px"}
                    fontWeight={"400"}
                    fontFamily={"sans-serif"}
                  >
                    {item.place}
                  </Text>
                  <br />
                  <Text
                    paddingLeft={"10px"}
                    colour={"#a1a1a1"}
                    fontSize={"13px"}
                    fontWeight={"400"}
                    fontFamily={"sans-serif"}
                  >
                    {item.service}
                  </Text>
                  <hr />

                  <HStack justifyContent={"space-between"}>
                    <Text
                      paddingLeft={"10px"}
                      color={"#34A853"}
                      fontFamily={"serif"}
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      ₹{item.price}
                    </Text>
                    <Text
                      paddingLeft={"10px"}
                      color={"#EF534E"}
                      fontWeight={"700"}
                      fontSize={"14px"}
                      backgroundColor={"#FFF6F5"}
                    >
                      {item.offer}OFF
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            );
          })}
      </Slider>
    </div>
  );
}

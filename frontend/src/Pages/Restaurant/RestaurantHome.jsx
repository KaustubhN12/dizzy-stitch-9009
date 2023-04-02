import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { SliderBanner } from "../Homepage/Slider/sliderOne/Slider";
import { Link } from "react-router-dom";

const RestaurantHome = () => {
  const deals = [
    {
      img: "https://img4.nbstatic.in/tr:w-/636ce20122156b000b884b63.png",
      title: "Buffet Deals",
      route: "/restaurant/premium-restaurant",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-/5f7d8150b7b01c000b8d348c.png",
      title: "Premium Restaurants",
      route: "/restaurant/premium-restaurant",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-/5f7c375cb7b01c000b8d3118.png",
      title: "Deals on Nightlife",
      route: "/nightlife",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-/5f7d81ceb7b01c000b8d3492.png",
      title: "Set Menu Meals",
      route: "/nightlife",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-/5fa225165cc6f2000bcb6dbb.png",
      title: "Buffet Deals",
      route: "/restaurant/premium-restaurant",
    },
  ];

  const TopBrands = [
    {
      img: "https://img4.nbstatic.in/tr:w-350/6026885000106d000b6a6148.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60266a5b79600c000b33f26a.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/6026887f79600c000b33f357.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60374bd000106d000bde80e6.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/634d23c022b317000b5a2fcd.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60266a2e79600c000b33f264.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/604a00f979600c000c8c1b1e.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60266a4279600c000b33f266.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/6020feb279600c000b33e51a.png",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60f930521e2731000b9bdf2d.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60337a9b00106d000bde77ff.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/60e40fd61e2731000b5adac7.jpg",
    },
  ];

  const bannerSlider1 = [
    {
      image: "https://img4.nbstatic.in/tr:w-2800/627b505cb3c621000b5f5e88.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/627b50613b031b000b774d6f.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/627b504f3b031b000b774d6d.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/627b506ab3c621000b5f5e89.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/627b50573b031b000b774d6e.jpg",
      alt: "",
    },
  ];
  const bannerSlider2 = [
    {
      image: "https://img4.nbstatic.in/tr:w-2800/63cf92d422b317000b40212e.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/63bfd7658db992000b7a1855.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/64143a3122b317000b3c9d03.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/64143a3422b317000b3c9d04.jpg",
      alt: "",
    },
  ];

  const bannerSlider3 = [
    {
      image: "https://img4.nbstatic.in/tr:w-2800/63bfd7818db992000b7a1858.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/63bfd78522b317000b618a4d.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/63bfd78a22b317000b618a4e.jpg",
      alt: "",
    },
    {
      image: "https://img4.nbstatic.in/tr:w-2800/63bfd78f8db992000b7a185a.jpg",
      alt: "",
    },
  ]

  const quickBites = [
    {
      img: "https://img4.nbstatic.in/tr:w-350/6422a2808db992000bb667f1.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/642558c08db992000bb67234.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/642558e822b317000c6fb189.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/642558d422b317000c6fb188.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/636ced9e22b317000b638d9e.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/63ce452422b317000b401bd4.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/636ced7e22b317000b638d9d.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/636ceddc22b317000b638da3.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/6425594922b317000c6fb18e.jpg",
    },
  ];

  const fiveStartHotels = [
    {
      img: "https://img4.nbstatic.in/tr:w-350/6138b58a40e9df000bfc8972.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/6138b67140e9df000bfc8977.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/6138b7d840e9df000bfc897d.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/6138b8581e2731000b3c2b96.jpg",
    },
    {
      img: "https://img4.nbstatic.in/tr:w-350/636366e522b317000bd17b56.jpg",
    },
  ];

  const coupons = [
    {
      img:"https://img4.nbstatic.in/tr:w-700/6299bae13b031b000ba75db4.jpeg",
      validity:"Valid Till 31 Dec 2023"
    },
    {
      img:"https://img4.nbstatic.in/tr:w-700/6294bbe1b3c621000b366b85.jpeg",
      validity:"Valid Till 04 Apr 2023"
    },
    {
      img:"https://img4.nbstatic.in/tr:w-700/64273aff8db992000bb67914.jpg",
      validity:"Valid Till 04 Apr 2023"
    }
  ]

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="80px" marginLeft="25px">
      <BiChevronLeft color={"black"} {...props} />
    </Box>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-125px" marginLeft="1135px">
      <Box>
        <BiChevronRight color={"black"} {...props} />
      </Box>
    </Box>
  );

  var setting2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Box className={"deals-route"} borderBottom="1px solid RGB(226 226 226)">
        <Box
          display="grid"
          gridTemplateColumns="repeat(5,1fr)"
          width="50%"
          alignItems="left"
          marginLeft="170px"
        >
          {deals.map((el) => {
            return (
             <Link to={el.route}>
              <Box
                alignItems={"center"}
                justifyContent="center"
                padding="20px"
                _hover={{ backgroundColor: "#f1f1f1" }}
                textAlign={"center"}
              >
                <Image
                  width="25%"
                  src={el.img}
                  marginLeft={"35px"}
                  marginBottom={"5px"}
                />
                <Text fontSize="12px" fontWeight="semibold">
                  {el.title}
                </Text>
              </Box>
             </Link>
            );
          })}
        </Box>
      </Box>

      <Box width="83%" margin="auto">
        <Text fontWeight="bold" fontSize="23px" marginTop="30px">
          Top Brands
        </Text>
        <Slider {...setting2}>
          {TopBrands.map((el, index) => {
            return (
              <div key={index}>
                <Box textAlign="left" height="200" padding="25px">
                  <Image src={el.img} />
                </Box>
              </div>
            );
          })}
        </Slider>
      </Box>

      <Box marginBottom={"40px"}>
        <SliderBanner data={bannerSlider1} />
      </Box>
      <Box>
        <SliderBanner data={bannerSlider2} />
      </Box>

      <Box width="83%" margin="auto">
        <Text fontWeight="bold" fontSize="23px" marginTop="30px">
          Quick Bites 🍔
        </Text>
        <Slider {...setting2}>
          {quickBites.map((el, index) => {
            return (
              <div key={index}>
                <Box textAlign="left" height="auto" padding="5px">
                  <Image src={el.img} />
                </Box>
              </div>
            );
          })}
        </Slider>
      </Box>

      <Box width="83%" margin="auto" marginBottom="30px">
        <Text fontWeight="bold" fontSize="23px" marginTop="30px">
          Dine At 5 Star Hotels
        </Text>
        <Box display="grid" gridTemplateColumns="repeat(5,1fr)" gap={"20px"}>
          {
            fiveStartHotels.map((el)=>{
              return <Box padding={"10px"}>
                <Image src={el.img}/>
              </Box>
            })
          }
        </Box>
      </Box>

      <Box>
        <SliderBanner data={bannerSlider3} />
      </Box>

      <Box width="83%" margin="auto" marginBottom="30px">
        <Text fontWeight="bold" fontSize="23px" marginTop="30px">
          Dine At 5 Star Hotels
        </Text>
        <Box display="grid" gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={"20px"}>
          {
            coupons.map((el)=>{
              return <Box padding={"10px"} border={"1px solid #e8e8e8"}>
                <Box>
                <Image src={el.img}/>
                </Box>
                <Box>
                  <Text fontSize="xs" fontWeight="semibold" marginLeft="20px">{el.validity}</Text>
                </Box>
              </Box>
            })
          }
        </Box>
      </Box>
    </div>
  );
};

export default RestaurantHome;

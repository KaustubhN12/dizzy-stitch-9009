import { Box, Divider, HStack, Image, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { SliderBanner } from "./Slider/sliderOne/Slider";
import { SliderCategories, SliderHangout, SliderNearBuy, SliderTopCompanies } from "./Slider/sliderTwo/Slider2";
import { Link } from "react-router-dom";
// import { SliderBanner } from "./Slider/Slider";
// import { SliderCategories, SliderHangout, SliderNearBuy, SliderTopCompanies } from "./Slider/Slider2";


const bannerSlider = [
  {
    image: "https://img4.nbstatic.in/tr:w-2800/64213cdf8db992000bb661fb.jpg",
    alt: "",

  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/640976e822b317000b6f9c39.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/6421663022b317000b54e470.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/6421663022b317000b54e470.jpg",
    alt: ""
  }

]

const itemSlider = [
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63ea2cbe22b317000bc83fa6.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/6418583022b317000b3cb0ff.jpg",
    alt: ""
  }
]

const buffets = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/63285c0bc10843000be89e58.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63285c1d54f372000bdf5ea4.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63285c2fc10843000be89e59.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63285c40c10843000be89e5a.jpg",
    alt: "",
  },
]

const topBrands = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/607557b21e2731000b1ae807.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60f92f4f1e2731000b9bdf2a.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/637f36fb22156b000b1909c0.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/604a03413eb5b6000b55c765.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/637f397e22156b000b1909d2.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63e4be5d22b317000bc8267a.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/6166a94d40e9df000bfbebcc.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63ff3efd22b317000bce7696.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60014f4ce1ecca000b0330a5.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636b9d9b22156b000b884683.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63ecbab822b317000bc8479d.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/634aa77922156b000bc5fa5e.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636b9d8e22156b000b884682.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636b9da622156b000b884684.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63246518c10843000b8180e7.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60f92f4f1e2731000b9bdf2a.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636b9db122156b000b884685.jpg",
    alt: ""
  }

]

const spa = [
  {
    image: "https://img4.nbstatic.in/tr:w-2800/627b4e033b031b000b774d5f.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/627b4e0db3c621000b5f5e77.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/627b4e2ab3c621000b5f5e78.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/627b4e163b031b000b774d60.jpg",
    alt: ""
  }
]

const hangOut = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/58502be5dc0e82000d1800c6.jpg",
    alt: "",
    name: "Connaught Place",
    offer: "25",
    price: "99"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/6385d1e822156b000c42f6de.jpg",
    alt: "",
    name: "Club Road",
    offer: "14",
    price: "1"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/58d3616746e0fb000dc3ad7e.jpg",
    alt: "",
    name: "Aerocity",
    offer: "9",
    price: "599"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/5d8dff57d60180000d4965d6.jpg",
    alt: "",
    name: "Rajouri Garden Main Market",
    offer: "7",
    price: "299"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/584ffd09c9e77c000d174e6f.jpg",
    alt: "",
    name: "Hauz Khas Village",
    offer: "6",
    price: "49"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/6385c23a22b317000b621160.jpg",
    alt: "",
    name: "Maharaja Surajmal Road",
    offer: "5",
    price: "750"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/6385abff22156b000c42f5fb.jpg",
    alt: "",
    name: " New Friends Colony Market",
    offer: "4",
    price: "335"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/584e967fdc0e82000d17f8ee.jpg",
    alt: "",
    name: "GK1 M Block Market",
    offer: "4",
    price: "949"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/6385c37822156b000c42f696.jpg",
    alt: "",
    name: "IGI T3 Road",
    offer: "4",
    price: "2,295"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/584e7ec6dc0e82000d17f7dc.jpg",
    alt: "",
    name: "Epicuria",
    offer: "3",
    price: "899"
  }

]

const nearbuy = [
  {
    image: "https://img4.nbstatic.in/tr:w-700/641576a222b317000b3ca27d.jpg",
    alt: "",
    title: "Mashaya",
    place: "Rajouri Garden",
    service: "Drinks with Starters",
    price: "949",
    offer: "53%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/5dc50f33fa4f8c000b9530d2.jpg",
    alt: "",
    title: "Beauty Studio By Monica",
    place: "Govindpuri",
    service: "Salon Service",
    price: "349",
    offer: "61%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/63be5f7922b317000b89f8b5.jpeg",
    alt: "",
    title: "Anardana",
    place: "RK Puram Sector 9",
    service: "Drinks with Starters",
    price: "849",
    offer: "19%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/641840ca22b317000b3cae9b.jpg",
    alt: "",
    title: "Dr.Zombie",
    place: "Connaught Place",
    service: "Drinks with Starters",
    price: "1,499",
    offer: "60%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/6419ab5222b317000b3cb608.jpg",
    alt: "",
    title: "High Spirits - Hilton Garden Inn",
    place: "Saket",
    service: "Drinks with Starters",
    price: "1,199",
    offer: "47%"
  }
]

const quickBites = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/6422a2808db992000bb667f1.jpg",
    alt: "",
    discount: " Get 7% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63d900238db992000b625214.jpg",
    alt: "",
    discount: " Get 7% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63c7a48822b317000b61a5f0.jpg",
    alt: "",
    discount: " Get 17.5% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636ced9622156b000b884ce7.jpg",
    alt: "",
    discount: " Get 8% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636ced9e22b317000b638d9e.jpg",
    alt: "",
    discount: " Get 7% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63ce452422b317000b401bd4.jpg",
    alt: "",
    discount: " Get 32% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63e3261c22b317000bc820cf.jpg",
    alt: "",
    discount: " Get 13% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63e325a38db992000bb57b3a.jpg",
    alt: "",
    discount: " Get 6% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63e325d08db992000bb57b3d.jpg",
    alt: "",
    discount: " Get 6% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63e323f022b317000bc820c7.jpg",
    alt: "",
    discount: " Get 3% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/63e3256a22b317000bc820cb.jpg",
    alt: "",
    discount: " Get 3% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636ced7e22b317000b638d9d.jpg",
    alt: "",
    discount: " Get 10% Instant Discount"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/636ced7e22b317000b638d9d.jpg",
    alt: "",
    discount: " Get 10% Instant Discount"
  }
]

const dutyFree = [
  {
    image: "https://img4.nbstatic.in/tr:w-2800/6414388a22b317000b3c9cf6.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63ff1dde22b317000bce74f7.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63ff1ddb22b317000bce74f6.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe1fc22b317000b618aa9.jpg",
    alt: ""
  }
]

const gift = [
  {
    image: "https://img4.nbstatic.in/tr:w-700/63ff0de28db992000bf63e28.jpg",
    alt: "",
    title: "Flipkart",
    service: "Flipkart E-Gift Vouchers",
    price: "2,000",
    offer: "2%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/63fe0d568db992000bf63c61.jpg",
    alt: "",
    title: "Google Play Recharge Gift",
    service: "Google Play Recharge Code Gift Voucher",
    price: "980",
    offer: "2%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/5efb18a8dc0e82000bc004b5.jpg",
    alt: "",
    title: "Puma ",
    service: "Puma E-Gift Cards",
    price: "465",
    offer: "7%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/601be805e1ecca000b594d84.jpg",
    alt: "",
    title: "Myntra",
    service: "Myntra e-Gift Cards",
    price: "465",
    offer: "7%"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-700/63fdeaff8db992000bf63b97.jpg",
    alt: "",
    title: "Amazon Shopping Gift Card",
    service: "Amazon Shopping Gift Vouchers",
    price: "1,000",
    offer: "5%"
  }
]

const next = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/61fbad386f487a000bf5658d.jpeg",
    alt: "",
    name: "Dinner Buffer"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/61fbad613b031b000bd5c0de.jpeg",
    alt: "",
    name: "Haircuts",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/61fbad0d6f487a000bf5658c.jpeg",
    alt: "",
    name: "Hair Spa",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/61fbad4d3b031b000bd5c0dd.jpeg",
    alt: "",
    name: "Message under 999",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/61fbacf43b031b000bd5c0db.jpeg",
    alt: "",
    name: "Barbeque Buffets",
  }
]

const saloon = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe73dd1e2731000b9be402.jpg",
    alt: "",
    name: "Haircut",
    offer: "114 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/6130d9221e2731000b3c2664.jpg",
    alt: "",
    name: "Hair Spa",
    offer: "101 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/61165b9240e9df000b66f8d4.jpg",
    alt: "",
    name: "Waxing",
    offer: "106 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe742d40e9df000b0f5c3b.jpg",
    alt: "",
    name: "Facial",
    offer: "102 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe740940e9df000b0f5c3a.jpg",
    alt: "",
    name: "Hair Treatment",
    offer: "103 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe738e1e2731000b9be400.jpg",
    alt: "",
    name: "All Salon Offers",
    offer: "137 Offers"
  },
]

const javed = [
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe1f022b317000b618aa7.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe1ec8db992000b7a18b7.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe1e022b317000b618aa5.jpg",
    alt: ""
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe1f58db992000b7a18b8.jpg",
    alt: ""
  }
]

const lastBanner = [
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe0228db992000b7a18ae.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe01522b317000b618a9a.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63bfe0118db992000b7a18ab.jpg",
    alt: "",
  },
  {
    image: "https://img4.nbstatic.in/tr:w-2800/63c0f44e8db992000b7a1be4.jpg",
    alt: "",
  },
]

const massage = [
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe592d1e2731000b9be392.jpg",
    alt: "",
    name: "Aromatherapy",
    offer: "22 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe594a1e2731000b9be395.jpg",
    alt: "",
    name: "Balinese",
    offer: "15 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe59751e2731000b9be396.jpg",
    alt: "",
    name: "Ayurvedic",
    offer: "21 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe598d40e9df000b0f5bcb.jpg",
    alt: "",
    name: "Thai",
    offer: "8 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe59af1e2731000b9be397.jpg",
    alt: "",
    name: "Swedish",
    offer: "20 Offers"
  },
  {
    image: "https://img4.nbstatic.in/tr:w-350/60fe59ce1e2731000b9be399.jpg",
    alt: "",
    name: "Deep Tissue",
    offer: "16 Offers"
  }
]
const Home = () => {

  const [category,setcategory] = React.useState([])

  React.useEffect(()=>{
    getcategory()
  },[])

   const getcategory= async()=>{

     await  fetch("https://good-puce-hummingbird-garb.cyclic.app/category/get",{
         "Content-type":"application/json"
       }).then((res)=>res.json())
         .then((res)=>setcategory(res.msg))
         .catch((err)=>console.log("err"))
   }


  return (
    <Box>

<Box className={"deals-route"} borderBottom="1px solid RGB(226 226 226)">
        <Box
          display="grid"
          gridTemplateColumns="repeat(8,1fr)"
          alignItems="left"
          marginLeft="120px"
        >
          {category.map((el) => {
            return (
              <Link to={el.route?el.route:"/"}>
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


      <Box

        // border={"2px solid red"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderBanner data={bannerSlider} />
      </Box>
      <br />
      <Box
        width={["5%", "40%", "88%"]}

        margin="auto"
      >
        <Img
          borderRadius={["2px", "4px", "6px"]}
          src="https://img4.nbstatic.in/tr:w-2800/6409c9d58db992000b50b90d.jpg"
          alt="" />
      </Box>
      <br />

      <Box
        width={"100%"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderBanner data={itemSlider} />
      </Box>
      <br />
      {/*<------------------------------------------ Buffets----------------------------------------> */}
      <Box>
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
          marginLeft={"66px"}>
          Everything Buffet! 🍱 🍲
        </Text>
        <br />
        <HStack
          // border={"3px solid blue"}
          width={"60%"}
          marginLeft={"66px"}
        >
          {buffets.map((e) => {
            return <Box>
              <Img width={"85%"} borderRadius={"6px"} src={e.image} alt="" />
            </Box>
          })}
        </HStack>
      </Box>

      <br />
      {/*<------------------------------------- Top Brands-------------------------------------> */}

      <Box
        width={"92%"}
        margin="auto">
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif">
          Top Brands
        </Text>
        < SliderTopCompanies data={topBrands} />
      </Box>
      <br />
      <Box
        width={"100%"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderBanner data={spa} />
      </Box>
      <br />

      {/*<------------------------------------------ Hangout ----------------------------------------->*/}

      <Box
        width={"92%"}
        margin={"auto"}

      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        // marginLeft={"40px"}
        >Popular Hangouts</Text>
        <br />
        < SliderHangout data={hangOut} />
      </Box>
      <br />
      {/*<------------------------------------------ NearBuy-------------------------------------------> */}
      <Box
        width={"92%"}
        margin={"auto"}

      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >
          New On Nearbuy! 🤩 🎊
        </Text>

        <SliderNearBuy data={nearbuy} />
      </Box>

      <br />
      {/*<------------------------------------------ QuickBites-------------------------------------------> */}
      <Box
        width={"92%"}
        margin="auto">
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >Quick Bites 🍔</Text>
        < SliderCategories data={quickBites} />
      </Box>

      {/*<------------------------------------------- dutyFree---------------------------------------------> */}

      <br />
      <Box
        width={"100%"}
        // border={"1px solid red"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderBanner data={dutyFree} />
      </Box>

      <br />

      {/*<---------------------------------------- Gift-------------------------------------------------> */}
      <Box
        width={"92%"}
        margin={"auto"}
      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >
          Perfect Gift Picks! ✨
        </Text>

        <SliderNearBuy data={gift} />
      </Box>
      <br />
      {/*<------------------------------------------- NextThings------------------------------------> */}
      <Box
        width={"80%"}
        marginLeft={"66px"}
      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >Next Thing On Your Mind</Text>
        <br />
        <HStack >
          {next.map((e) => {
            return <VStack >
              <Img

                width={"80%"}
                src={e.image}
                alt={e.name}
                borderRadius="6px"
              />
            </VStack>

          })}
        </HStack>
      </Box>
      <br />

      {/*<-------------------------------------- Saloon----------------------------------------> */}
      <Box
        width={"90%"}
        margin="auto"
      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >Popular Salon Services✂️</Text>
        <br />
        <HStack >
          {saloon.map((e) => {
            return <VStack >
              <Img
                src={e.image}
                alt={e.name}
                borderRadius={"6px"}
                width={"88%"}
              />
              <Text fontSize={"16px"} fontWeight={"700"} fontFamily={"sans-serif"} color="#333333" paddingLeft={"26px"} alignSelf={"start"}>{e.name}</Text>
              <Text fontSize={"13px"} color="#666666" fontWeight={"400"} fontFamily={"sans-serif"} paddingLeft={"26px"} alignSelf={"start"}>{e.offer}</Text>
            </VStack>

          })}
        </HStack>
      </Box>

      <br />

      {/*<---------------------------------------------- Banner-------------------------------------> */}
      <Box
        backgroundColor={"#f1f1f1"}>
        <SliderBanner data={javed} />
      </Box>
      <br />
      {/*<---------------------------------------------- LastBanner-------------------------------------> */}
      <Box
        backgroundColor={"#f1f1f1"}>
        <SliderBanner data={lastBanner} />
      </Box>
      <br />

      {/*<-------------------------------------- Saloon----------------------------------------> */}
      <Box
        width={"90%"}
        margin="auto"
      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >Relaxing Massages</Text>
        <br />
        <HStack >
          {massage.map((e) => {
            return <VStack >
              <Img
                src={e.image}
                alt={e.name}
                borderRadius={"6px"}
                width={"88%"}
              />
              <Text fontSize={"16px"} fontWeight={"700"} fontFamily={"sans-serif"} color="#333333" paddingLeft={"26px"} alignSelf={"start"}>{e.name}</Text>
              <Text fontSize={"13px"} color="#666666" fontWeight={"400"} fontFamily={"sans-serif"} paddingLeft={"26px"} alignSelf={"start"}>{e.offer}</Text>
            </VStack>

          })}
        </HStack>
      </Box>

      <br />
    </Box>

  );
};

export default Home;

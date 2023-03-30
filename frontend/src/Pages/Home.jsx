import { Box, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { SliderCategories, SliderKatrina, SliderTopCompanies } from "./Slider";

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
const Home = () => {
  return (
    <Box>
      <h1>Home page</h1>
      <Box
        width={"100%"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderKatrina data={bannerSlider} />
      </Box>
      <br />
      <Box
        width={"82%"}
        margin="auto"
      >
        <Img
          borderRadius="6px"
          src="https://img4.nbstatic.in/tr:w-2800/6409c9d58db992000b50b90d.jpg"
          alt="" />
      </Box>
      <br />

      <Box
        width={"100%"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderKatrina data={itemSlider} />
      </Box>
      <br />
      <Box
        width={"82%"}
        margin="auto">
        < SliderTopCompanies data={topBrands} />
      </Box>
      <br />
      <Box
        width={"100%"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderKatrina data={spa} />
      </Box>
      <br />
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
      <br />
      <Box
        width={"100%"}
        border={"1px solid red"}
        backgroundColor={"#f1f1f1"}
      >
        <SliderKatrina data={dutyFree} />
      </Box>
      <br />
      <Box
        width={"80%"}
        marginLeft="150px"
      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >Next Thing On Your Mind</Text>
        <HStack border={"2px solid red"}>
          {next.map((e) => {
            return <VStack>

              <Img
                width={"80%"}
                src={e.image}
                alt={e.name}
                borderRadius="8px"
              />
            </VStack>

          })}
        </HStack>
      </Box>
      <br />
      <Box
        width={"80%"}
        margin="auto"
      >
        <Text
          fontSize={"24"}
          fontWeight={"700"}
          fontFamily="sans-serif"
        >Popular Salon Services✂️</Text>
        <HStack border={"2px solid red"}>
          {saloon.map((e) => {
            return <VStack>

              <Img
                src={e.image}
                alt={e.name}
              />
              <Text>{e.name}</Text>
              <Text>{e.offer}</Text>
            </VStack>

          })}
        </HStack>
      </Box>
      <br />
      <Box
        backgroundColor={"#f1f1f1"}>
        <SliderKatrina data={javed} />
      </Box>

    </Box>
  );
};

export default Home;

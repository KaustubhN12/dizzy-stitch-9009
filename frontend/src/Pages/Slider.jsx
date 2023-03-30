import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Img, Text } from "@chakra-ui/react";



export function SliderKatrina(props) {
    const { data } = props;
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerPadding: "100px",
        className: "center",
        centerMode: true,

    };
    // console.log(data, "sliderTOpCompanies")
    return (
        <div style={{ width: "95%", backgroundColor: "#f1f1f1", paddingBlock: "30px", margin: "auto" }} >
            <Slider {...settings}>
                {data && data.map((item) => {
                    return <Container centerContent overflow={"hidden"} maxW={"fit-content"} key={item.title}>
                        <Box backgroundColor={"#f1f1f1"} height={"200px"} width={"100%"} margin={'auto'}>
                            <Img borderRadius={"6px"} height={["100%"]} src={item.image} alt={item.alt} />
                        </Box>
                    </Container>
                })}
            </Slider >
        </ div >
    );
}


export function SliderTopCompanies(props) {
    const { data } = props;
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };
    // console.log(data, "sliderTOpCompanies")
    return (
        <div style={{ width: "100%", padding: "45px", margin: "auto" }} >
            <Slider {...settings}>
                {data && data.map((item) => {
                    return <Container centerContent overflow={"hidden"} maxW={"fit-content"} key={item.title}>
                        <Box _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} alignContent={"center"} justifyContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} borderRadius={"20"}>
                            <Img borderRadius={"10px"} width={"100%"} src={item.image} alt={item.alt} />

                        </Box>
                    </Container>
                })}
            </Slider >
        </ div >
    );
}


export function SliderCategories(props) {
    const { data } = props;
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <div style={{ width: "100%", padding: "45px", margin: "auto" }} >
            <Slider {...settings}>
                {data && data.map((item) => {
                    return <Container centerContent maxW={"fit-content"} key={item.title} padding={"10px"}>
                        <Box bg={"white"} _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} padding={"10px"} alignContent={"center"} justifyContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} borderRadius={"10"}>
                            <Img borderRadius={"10px"} width={"100%"} src={item.image} alt={item.alt} />
                            <Text fontSize={"15px"} fontWeight={"600"} bg={"white"}>{item.title} </Text>
                        </Box>
                    </Container>
                })}
            </Slider >
        </ div >
    );
}



export function SliderNewArrivals(props) {
    const { data } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div style={{ width: "100%", padding: "45px", margin: "auto" }} >
            <Slider {...settings}>
                {data && data.map((item) => {
                    return <Container centerContent overflow={"hidden"} maxW={"fit-content"} key={item.title}>
                        <Box _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} alignContent={"center"} justifyContent={"center"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"} borderRadius={"20"}>
                            <Img borderRadius={"10px"} width={"100%"} src={item.image} alt={item.alt} />
                        </Box>
                    </Container>
                })}
            </Slider >
        </ div >
    );
}




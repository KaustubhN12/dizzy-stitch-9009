import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import { Box, Container, Img, Text, VStack } from "@chakra-ui/react";

// Banner

export function SliderBanner(props) {
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
        responsive: [
           
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
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
        <div style={{ width: "95%", backgroundColor: "#f1f1f1", paddingBlock: "30px", margin: "auto" }} >
            <Slider {...settings}>
                {data && data.map((item) => {
                    return <Container centerContent overflow={"hidden"} maxW={"fit-content"} key={item.title}>
                        <Box backgroundColor={"#f1f1f1"} height={"200px"} width={"100%"} margin={'auto'}>
                            <Img borderRadius={["2px","4px","6px"]} height={[ "50%","80%","100%"]} src={item.image} alt={item.alt} />
                        </Box>
                    </Container>
                })}
            </Slider >
        </ div >
    );
}

// <--------------------------------------------------------------------------------------------------------------->








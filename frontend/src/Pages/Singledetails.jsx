import React from "react";
import { Stack, HStack, VStack, Box, Heading, Table, Thead, Tr, Th, Tbody, Button } from "@chakra-ui/react";
import { useState } from "react";
import Singlepageabout from "../Components/Singlepageabout";
import SinglePagePhoto from "../Components/SinglePagePhoto";
import SinglePageRecommend from "../Components/SinglePageRecommend";
import axios from 'axios';
// import data from "./db.json"


function Singledetails() {

  
  const [title, settitle] = useState("")
  const [flag,setflag]=useState("")
  const [recomenddata,setrecommendata]=useState([])



  const handleabout=()=>{
    setflag("about")
    settitle("This is about")
  
  }
  const handlefetch=async()=>{
    try{
      let res=await axios.get('./db.json').then((res)=>{
        // console.log(res.data.data)
        setrecommendata(res.data.data)

      })
    }
    catch(error){
      console.log(error)
    }

  }

  const handlerecommend=()=>{
    if(flag==true){
      setflag(flag)
    }
    setflag("recommend")
    settitle("This is Recommend")
    handlefetch()

  }


  const handlephoto=()=>{
   
    setflag("photo")
    settitle("This is Photo")
  }
 






  return (
    <>
      <h4>Singledetails</h4>

      {/* Upper Section  */}
      <HStack w={"100%"} h={["400px","400px","250px"]} border={"1px solid grey"} p={4}>
        <VStack w="50%" h="100%" display={"inline"}>
          <Stack>
            <h5
              style={{
                fontWeight: 700,
                color: "#999",
                textTransform: "uppercase",
              }}
            >
              Sub Category
            </h5>
          </Stack>
          <Stack display={"flex"} direction={["column", "column", "row"]}>
            <Heading
              textTransform={"capitalize"}
              lineHeight={"30px"}
              fontWeight={700}
            >
              Glanz Studio Unisex Salon{" "}
            </Heading>
            <Box
              style={{ border: "1px solid grey", borderRadius: "1px" }}
              w={["50%", "50%", "20%"]}
            >
              <Box
                style={{
                  color: "orange",
                  marginRight: "10px",
                  height: "12px",
                  padding: "10px",
                  fontSize: "20px",
                }}
              >
                nb
              </Box>
              <Box ml={["40px", "40px"]} mt={["0px"]}>
                |4.5/5
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
              Central Market Lajpat Nagar 2, Lajpat Nagar 2{" "}
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
              src="https://img4.nbstatic.in/tr:w-500/5f0c2a0edc0e82000c3e9f60.jpg"
              alt="dummy"
              width={"100%"}
              height={"100%"}
            />
          </Stack>
          <Box w="100%" h="100%">
            <img
              src="https://img4.nbstatic.in/tr:w-500/5f0c2a0edc0e82000c3e9f60.jpg"
              alt="dummy"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Stack>
      </HStack>

      {/* Lower Section */}

      <Stack border={"1px solid grey"} w={"100%"} display={"flex"} direction={"row"}>
        <Stack w={"95%"}>
          <Table>
            <Thead>
              <Tr>
                <Th onClick={handlerecommend}>Recommended</Th>
                <Th onClick={handleabout}>About</Th>
                <Th onClick={handlephoto}>Photo</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>

              {flag=="about" ?  <Singlepageabout/>:"" }
              {flag=="photo" ?  <SinglePagePhoto/>:"" }
              {flag=="recommend" ?  <SinglePageRecommend recomenddata={recomenddata}/>:"" }
              </Tr>
              
            </Tbody>
            
          </Table>
        </Stack>



      <Stack border={"1px solid red"} w={"50%"} marginTop={"100px"} p={"30px"}>

        
              <Stack textAlign={"center"} backgroundColor={"#e0e0e0"} p={"18px"} borderRadius={"4px"}>
                <p style={{fontWeight:"700", color:"#333"}}>Your Order</p>
              </Stack>
              <Stack display={"flex"} direction={"row"} justifyContent={"space-around"}>
                <p>Product</p>
                <p>Price</p>
              </Stack>

              <Stack display={"flex"} direction={"row"} justifyContent={"space-around"}>
                <p>Total:</p>
                <p>Price</p>
              </Stack>

              <Stack>
                <Button colorScheme="red">Buy Now</Button>
              </Stack>

      </Stack>

      </Stack>
      
















    </>
  );
}

export default Singledetails;

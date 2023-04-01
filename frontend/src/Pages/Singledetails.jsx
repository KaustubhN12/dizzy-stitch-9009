import React from "react";
import { Stack, HStack, VStack, Box, Heading, Table, Thead, Tr, Th, Tbody, Button } from "@chakra-ui/react";
import { useState ,useEffect} from "react";
import Singlepageabout from "../Components/Singlepageabout";
import SinglePagePhoto from "../Components/SinglePagePhoto";
import SinglePageRecommend from "../Components/SinglePageRecommend";
import axios from 'axios';
import { useSelector } from "react-redux";
// import data from "./db.json"



const params_data=[{
  catageory:"BEAUTY SALON",
  servicname:"Jawed Habib Hair & Beauty",
  rating:4.5,
  address:"Shop No. 119-120, 1st Floor, Vikas Surya Shopping Mall, Sector 3, Manglam Place Rohini, New Delhi",
  phone:[ 8130671365, 1147080792],
  photo:["https://img4.nbstatic.in/tr:w-500/5ba9f23152faff000d86a547.jpg","https://img4.nbstatic.in/tr:w-500/5ba9f239d60180000c503360.jpg","https://img4.nbstatic.in/tr:w-500/5c3432e0ee3588000d918041.jpg"]
}]


function Singledetails() {

  const [title, settitle] = useState("")
  const [flag,setflag]=useState("")
  const [recomenddata,setrecommendata]=useState([])
  const order_data=useSelector((store)=>store.Orderreducer.user)
  const [order,setorder]=useState([]);
  const order_total=useSelector((store)=>store.Orderreducer.totalPrice)

 
  // let sum=0

  // if(order.length>1){
  //   for(var i=1;i<order.length;i++){
  //     sum=sum+order[i].price
  //   }
  // }

 

  useEffect(() => {
    setorder(order_data)
    // console.log(order_data)
    
  }, [order_data]);
  // console.log("order",order)



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
      

      {/* Upper Section  */}
      <HStack w={"100%"} h={["400px","400px","250px"]} border={""} p={4}>
        {params_data?.map((el)=>(

          <>
            <VStack w="50%" h="100%" display={"inline"}>
          <Stack>
            <h5
              style={{
                fontWeight: 700,
                color: "#999",
                textTransform: "uppercase",
              }}
            >
              {el.catageory}
            </h5>
          </Stack>
          <Stack display={"flex"} direction={["column", "column", "row"]}>
            <Heading
              textTransform={"capitalize"}
              lineHeight={"30px"}
              fontWeight={700}
            >
              {el.servicname}
            </Heading>
            <Box
              style={{ border: "1px solid #e0e0e0", borderRadius: "4px" ,padding:"6px"}}
              w={["50%", "50%", "20%"]}
            >
              <Box
                style={{
                  color: "orange",
                  marginRight: "10px",
                  height: "12px",
                  // padding: "10px",
                  fontSize: "20px",
                }}
              >
                nb
              </Box>
              <Box ml={["40px", "40px"]} mt={["0px"]}>
                |{el.rating}/5
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
              {el.address}
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
              src={el.photo[0]}
              alt="dummy"
              width={"100%"}
              height={"100%"}
            />
          </Stack>
          <Box w="100%" h="100%">
            <img
              src={el.photo[1]}
              alt="dummy"
              width={"100%"}
              height={"100%"}
            />
          </Box>
            </Stack>
          </>
        ))}
      </HStack>

      {/* Lower Section */}

      <Stack border={"1px solid grey"} w={"100%"} display={"flex"} direction={"row"}>
        <Stack w={"95%"}>
          <Table>
            <Thead>
              <Tr>
                <Th onClick={handlerecommend} border={"1px solid grey"} cursor={"pointer"} backgroundColor={"#e0e0e0"} >Recommended</Th>
                <Th onClick={handleabout} border={"1px solid grey"} cursor={"pointer"} backgroundColor={"#e0e0e0"} >About</Th>
                <Th onClick={handlephoto} border={"1px solid grey"} cursor={"pointer"} backgroundColor={"#e0e0e0"}>Photo</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>

              {flag=="about" ?  <Singlepageabout params_data={params_data}/>:"" }
              {flag=="photo" ?  <SinglePagePhoto params_data={params_data}/>:"" }
              {flag=="recommend" ?  <SinglePageRecommend recomenddata={recomenddata}/>:"" }
              </Tr>
              
            </Tbody>
            
          </Table>
        </Stack>



      <Stack border={""} w={"50%"} marginTop={"100px"} p={"30px"}>

                  <Stack textAlign={"center"} backgroundColor={"#e0e0e0"} p={"18px"} borderRadius={"4px"}>
                    <p style={{fontWeight:"700", color:"#333"}}>Your Order</p>
                  </Stack>
                {order.map((el)=> (

                
                  <Stack display={"flex"} direction={"row"} justifyContent={"space-around"}>
                    <p>{el.title}</p>
                    <p>{el.price*el.count}</p>
                  </Stack>
                  
                  
                
                ))}


        

              <Stack display={"flex"} direction={"row"} justifyContent={"space-around"}>
                <p>Total:</p>
                <p>{order_total}</p>
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

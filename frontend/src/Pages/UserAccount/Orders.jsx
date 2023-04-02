import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [order,setOrder] = useState([]);

  const getOrders = async() => {

   await fetch("https://good-puce-hummingbird-garb.cyclic.app/order/get",{
    headers:{
      Authorization:`${localStorage.getItem("user-token")}`
    }
   }).then((res)=>res.json()).then((res)=>{
    setOrder(res.msg)
    console.log(res.msg);
   }).catch((err)=>console.log(err));
  }

  useEffect(()=>{
    getOrders();
  },[]);

  return (
    <div
      style={{
        backgroundColor: "#e1e9ec",
        height: "auto",
        paddingBottom: "30px",
      }}
    >
      <Box className="account-Nav" marginBottom="25px">
        <Box width="83%" margin={"auto"}>
          <Box width="60%" display="flex" justifyContent="space-evenly">
            <Link to="/orders">
              <Box padding="15px" borderBottom="2px solid #ef534e">
                <Text color="#ef534e">My orders</Text>
              </Box>
            </Link>
            <Link to="/credits">
              <Box padding="15px">
                <Text fontSize="sm">Credits</Text>
              </Box>
            </Link>
            <Link to="/profile">
              <Box padding="15px">
                <Text fontSize="sm">Profile</Text>
              </Box>
            </Link>
            <Link to="/newsletter">
              <Box padding="15px">
                <Text fontSize="sm">Newsletters</Text>
              </Box>
            </Link>
            <Link to="/refer">
              <Text>
                <Box padding="15px">
                  <Text fontSize="sm">Refer a friend</Text>
                </Box>
              </Text>
            </Link>
            <Link to="/promotion">
              <Box padding="15px">
                <Text fontSize="sm">Promotions</Text>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box width="83%" margin={"auto"} textAlign="center" >
        <Text textUnderlineOffset={"10px"} textDecorationLine={"underline"} fontSize="28px" fontWeight="bold" marginBottom={"20px"} >
          My Orders
        </Text>
        <Box >
          {
            order.map((el,index)=>{
              return <Box display="flex" justifyContent="space-evenly" padding={"10px"} border={"1px solid #ffffff"}>
                <Text fontWeight="bold"> Order.no: {index+1}</Text>
                <Text>{el.Title}</Text>
                <Text>x{el.count}</Text>
                <Text>=</Text>
                <Text>₹ {el.count*Number(el.price)}</Text>
              </Box>
            })
          }
        </Box>
      </Box>
    </div>
  );
};

export default Orders;

// Title
// : 
// "4 Beer Pints (330ml) / 4 IMFL (30ml) / 4 Mocktails + 1 Starter (Veg/Non Veg)"
// count
// : 
// 6
// price
// : 
// 1099

import { Stack, VStack, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addorder_redux,
  orderdec_redux,
  orderinc_redux,
} from "../Redux/Order/action.order";
import { Orderreducer } from "../Redux/Order/reducer.order";

function SinglePageRecommend({ recomenddata }) {
  const dispatch = useDispatch();
  const order_data=useSelector((store)=>store.Orderreducer.user)
  // console.log(recomenddata)


  

  const [data, setdata] = useState([]);
 
  
  useEffect(() => {
    // console.log("Recommend")
    setdata(recomenddata);

  }, [recomenddata]);


  const handleadd = (_id) => {
    // console.log("filter", _id);

    data.filter((el) => {
      for(let i=0;i<order_data.length;i++){
        if(order_data[i]._id==el._id){
          console.log("item present in order");
          return ;
        }
      }
      if (el._id == _id) {
        const payload={
          id:el._id,
          title:el.Title,
          price:Number(el.offerprice),
          count:1
        }
        console.log(payload);
        dispatch(addorder_redux(payload))
      }
    });
  };

  const handleInc = (id) => {
    order_data?.filter((el) => {
      if (el.id == id) {
        console.log(id);
        dispatch(orderinc_redux(id));   
      }
    });
  };

  const handledec = (id) => {
    order_data?.filter((el) => {
      if (el.id == id) {
        console.log(id);
        dispatch(orderdec_redux(id))
      }
    });
  };
  
  return (
    <>
      {data.map((el, i) => (
        <Stack marginTop={"20px"} p={"10px"} key={el.id} w={"131%"}>
          <Stack
            display={"flex"}
            direction={["column", "column", "row"]}
            justifyContent={"space-between"}
          >
            <Stack marginRight={"18px"} fontWeight={"600"}>
              <p style={{ color: "#999", fontSize: "13px" }}>
                {el.bought} Bought
              </p>
            </Stack>

            <Stack
              borderColor={"#f6fff7"}
              borderTopColor={"#34a853"}
              fontWeight={"600"}
              border={"1px solid green"}
              pl={"3px"}
              pt={"3px"}
              pb={"6px"}
              pr={"6px"}
              fontSize={"10px"}
              w={["20%","20%","6%","7%"]}
            >
              <p style={{ color: "#34a853" }}>{el.discount}</p>
            </Stack>
          </Stack>

          <Stack
            display={"flex"}
            direction={["column", "column", "row"]}
            justifyContent={"space-between"}
            marginTop={"25px"}
          >
            <h3
              style={{
                lineHeight: "24px",
                fontWeight: "700",
                color: "#333",
                fontSize: "18px",
              }}
            >
              {/* Choice of Full Body Massage (with Organic Cold-Pressed Oil) (50
                mins) + Shower (10 mins) */}
              {el.Title}
            </h3>
            <p style={{ fontWeight: "700" }}>₹{el.offerprice}</p>
          </Stack>
          <Stack
            display={"flex"}
            direction={["column", "column", "row"]}
            marginTop={"25px"}
          >
            <p style={{ fontWeight: "600", color: "#999", fontSize: "12px" }}>
              Valid for: {el.valid_for} Person |
            </p>
            <p style={{ fontWeight: "600", color: "#999", fontSize: "12px" }}>
              Valid on : {el.valid_on} Days |
            </p>
            <p style={{ fontWeight: "600", color: "#999", fontSize: "12px" }}>
              Timings : {el.timing}
            </p>
          </Stack>

          <Stack
            display={"flex"}
            direction={["column", "column", "row"]}
            justifyContent={"space-between"}
            marginTop={"25px"}
          >
            <HStack>
              {/* <button style={{}}>Inclusions</button> */}
              {/* <button>Details</button> */}
              <Button
                variant={"outline"}
                marginRight={"6px"}
                textTransform={"capitalize"}
                fontWeight={"600"}
                color={"#35a7ff"}
                fontSize={"12px"}
                borderWidth={"1px"}
                borderStyle={"solid"}
                borderColor={"#35a7ff"}
              >
                Inclusions
              </Button>
              <Button
                variant={"outline"}
                marginRight={"6px"}
                textTransform={"capitalize"}
                fontWeight={"600"}
                color={"#35a7ff"}
                fontSize={"12px"}
                borderWidth={"1px"}
                borderStyle={"solid"}
                borderColor={"#35a7ff"}
              >
                Details
              </Button>
            </HStack>

            <HStack>
            <Button
              onClick={() => {
                handleInc(el._id);
              }}
            >
              Inc
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleadd(el._id);
              }}
            >
              Add
            </Button>
            <Button
              onClick={() => {
                handledec(el._id);
              }}
            >
              Dec
            </Button>
            </HStack>           
          </Stack>
        </Stack>
      ))}
      <hr />
    </>
  );
}

export default SinglePageRecommend;

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

  

  const [data, setdata] = useState([]);
 
  
  useEffect(() => {
    setdata(recomenddata);
  
    
  }, [data]);


  const handleadd = (id) => {
    console.log("filter", id);

    data.filter((el) => {
      if (el.id == id) {
        const payload={
          title:el.title,
          price:el.price
        }
        dispatch(addorder_redux(payload))
      }
    });
  };

  const handleInc = (id) => {
    data.filter((el) => {
      if (el.id == id) {
        // console.log(el.price)
        const payload={
          id:el.id,
          price:el.price
        }
        console.log(payload)
        dispatch(orderinc_redux(payload));
      }
    });
  };

  const handledec = (id) => {
    data.filter((el) => {
      if (el.id == id) {
        const payload={
          title:el.title,
          price:el.price
        }
        dispatch(orderdec_redux(payload));
      }
    });
  };

  return (
    <>
      {data.map((el, i) => (
        <Stack marginTop={"20px"} p={"10px"} key={el.id}>
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
            >
              <p style={{ color: "#34a853" }}>{el.discount}%off</p>
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
              {el.servicename}
            </h3>
            <p style={{ fontWeight: "700" }}>₹{el.price}</p>
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
                handleInc(el.id);
              }}
            >
              Inc
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleadd(el.id);
              }}
            >
              Add
            </Button>
            <Button
              onClick={() => {
                handledec(el.id);
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
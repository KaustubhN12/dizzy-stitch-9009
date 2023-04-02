import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Singlepageabout( {singlepagedata} ) {
  console.log("about",singlepagedata);


 
  return (
    <>
      <Stack>
        {/* {singlepagedata.map((el) => ( */}
          <>
            <Stack marginTop={"12px"} p={2}>
              <h4
                style={{
                  textTransform: "uppercase",
                  lineHeight: "18px",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#999",
                }}
              >
                {singlepagedata.Title}
              </h4>
            </Stack>

            <Stack marginTop={"12px"} p={2}>
              <h2
                style={{
                  marginBottom: "12px",
                  lineHeight: "24px",
                  fontWeight: "600",
                  color: "#666",
                  fontSize: "15px",
                }}
              >
                Address
              </h2>

              <h4
                style={{
                  // lineHeight: "1px",
                  // border:"1px solid red",
                  color: "#666",
                  fontSize: "15px",
                  width: "130%",
                }}
              >
                {singlepagedata.place}
              </h4>
              <p
                style={{
                  lineHeight: "24pxpx",
                  color: "#666",
                  fontWeight: "600px",
                  lineHeight: "24px",
                  marginTop: "12px",
                }}
              >
                Phone:-12345678
              </p>
            </Stack>
          </>
        {/* ))} */}
      </Stack>
    </>
  );
}

export default Singlepageabout;

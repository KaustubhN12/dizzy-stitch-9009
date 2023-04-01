import { Stack } from "@chakra-ui/react";
import React from "react";

function Singlepageabout({ params_data }) {
  // console.log(params_data);
  return (
    <>
      <Stack>
        {params_data?.map((el) => (
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
                {el.servicname}
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
                  lineHeight: "1px",
                  color: "#666",
                  fontSize: "15px",
                  width: "100%",
                }}
              >
                {el.address}
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
                Phone:-{el.phone}
              </p>
            </Stack>
          </>
        ))}
      </Stack>
    </>
  );
}

export default Singlepageabout;

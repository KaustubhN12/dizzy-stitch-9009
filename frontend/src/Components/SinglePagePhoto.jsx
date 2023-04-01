import { Box, HStack, Stack } from "@chakra-ui/react";
import React from "react";

const SinglePagePhoto = ({ params_data }) => {
  //   console.log(params_data[0].photo[1]);
  const photo = params_data[0].photo;

  return (
    <>
          <Stack w="100%" h="100%" display={"flex"} direction={"row"}>
      {photo?.map((el) => (
        
            <img src={el} alt="dummy" width={"32%"} height={"100%"} />
            
            ))}
            </Stack>
    </>
  );
};

export default SinglePagePhoto;

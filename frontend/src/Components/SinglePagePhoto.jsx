import { Box, HStack, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const SinglePagePhoto = ({ singlepagedata }) => {
  console.log("photo",singlepagedata)
  //   console.log(singledata[0].photo[1]);
  // const photo = singledata[0].photo;

  // const [photo,setphoto]=useState([])
  // useEffect(()=>{
  //   setphoto(singlepagedata)
  //   console.log(photo);
  // })

  return (
    <>
      <Stack w={["200%","200%","50%","40%"]} display={"flex"} direction={["column","column","row"]} border={"1px solid red"} height={250}>
        {/* {photo?.map((el) => ( */}
          <img src={singlepagedata.Image} alt="dummy" width={["100%","50%"]} height={"100%"} />
        {/* ))} */}
      </Stack>
    </>
  );
};

export default SinglePagePhoto;

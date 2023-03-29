import React, { useEffect } from 'react';
import { Box, Image, Text,Badge } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getPremiumRestaurant } from '../../Redux/Restaurants/Action';
import { StarIcon } from '@chakra-ui/icons';

const PremiumRestaurant = () => {
 
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getPremiumRestaurant);
    },[]);

    const premium_restaurant = useSelector((store)=>store.restaurantReducer.premium_restaurant);

    // console.log(premium_restaurant)

    const page_info = "NEARBUY > DEALS IN NEW DELHI > PREMIUM MERCHANTS - FNB IN NEW DELHI";

  return (
    <div style={{backgroundColor:"#e1e9ec",height:"auto"}} className={"container"}>
     
     <Box className={"content-box"} width="82%" margin="auto" border="1px solid red" height="auto">
        <Box className={"page-info"} paddingTop="10px" paddingBottom="10px">
          <Text fontSize={"xs"} color="#9c9ca0" fontWeight="semibold">{page_info}</Text>
        </Box>
        <Box className='hr-line' border="1px solid #e0e0e0"></Box>
        <Box className={"page-data"} border="1px solid" height="auto" display={"flex"}>
            <Box className={"sidebar"} width="24%" border="1px solid red">
                <Box className={"sidebar-info"}  paddingTop="10px" paddingBottom="10px" border="1px solid">
                <Text fontSize={"sm"} color="#623351" fontWeight="semibold">Promos & Filters</Text>
                </Box>
                <Box className={"coupon&filter"}>
                    <Box className={"coupon"} height="200px" border="1px solid brown" backgroundColor="#ffffff"></Box>
                    <Box className={"filter"} height="400px" border="1px solid" marginTop="20px" backgroundColor="#ffffff"></Box>
                </Box>
            </Box>
            <Box className={"service-section"} width="76%" border="1px solid blue" paddingLeft="20px">
            <Box className={"service-info"}  paddingTop="10px" paddingBottom="10px" border="1px solid" >
                <Text fontSize={"sm"} color="#623351" fontWeight="semibold">Premium Merchants - FNB in New Delhi</Text>
                </Box>
                <Box className={"service-cars"} display="grid" gap="20px" gridTemplateColumns="repeat(3,1fr)">
                    {
                        premium_restaurant.map((el)=>{
                            return(
                                <Box maxW='sm' borderWidth='1px' borderRadius='md' overflow='hidden' backgroundColor="#ffffff">
      <Image src={el.Image} alt={el.Title} />

      <Box>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {el.Tag}
          </Badge>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {el.Title}
        </Box>

        <Box>
          {el.price}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < el.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {el.bought}
          </Box>
        </Box>
      </Box>
    </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
     </Box>

    </div>
  )
}

export default PremiumRestaurant

import { SearchIcon, UnlockIcon, } from '@chakra-ui/icons'

import { Box, Button, Grid, GridItem, HStack, Icon, Img, Input, MenuButton, Text, Menu, MenuList, MenuItem, } from '@chakra-ui/react'
import React from 'react'
import { ImLocation } from 'react-icons/im'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const token = localStorage.getItem("user-token");
  return (
    <Box width={"100%"} borderBottom={"1px solid RGB(226 226 226)"}>
      <Grid
        width={["40%", "100%", "100%"]}
        margin={"auto"}

        templateAreas={[
          `"login logo blank location"
        " search search search search"`,
          `"login logo blank location"
        " search search search search"`,
          `"location blank blank login"
        "logo blank2 blank2 search"`
        ]}
        gridTemplateRows={['45px 45px', '45px 45px', '35px 60px']}
        gridTemplateColumns={['30px 150px 1fr 150px', '30px 150px 1fr 150px', '380px 1fr 1fr 3fr']}
        h='100px'
        gap='0'
        color='blackAlpha.700'
        fontWeight='bold' >
        <GridItem bg='#f1f1f1' area={'location'} alignItems={'center'} >
          <HStack pl={['0px', '0px', "140px"]} fontSize={"12px"} py={"auto"} height={"100%"}>
            <ImLocation color='#889a9d' />
            <Text fontWeight={"400"} fontSize={"11px"} fontFamily={"sans-serif"} color={"#889a9d"}  >Select Location</Text>
          </HStack>
        </GridItem>


        <GridItem bg='#f1f1f1' area={'login'}>
          <HStack float={'right'} pr={['0px', '0px', '140px']} fontSize={"12px"} py={"auto"} pl={"2"} height={"100%"}>
            <Text fontWeight={"600"} fontSize={"11px"} fontFamily={"sans-serif"} color={"#EF534E"}>We're hiring! &#x7C;</Text>
            <Text fontWeight={"400"} fontSize={"11px"} fontFamily={"sans-serif"} color={"#333333"}> How it Works &#x7C;</Text>
            <Text fontWeight={"400"} fontSize={"11px"} fontFamily={"sans-serif"} color={"#333333"}> List your Business &#x7C;</Text>
            <Text fontWeight={"400"} fontSize={"11px"} fontFamily={"sans-serif"} color={"#333333"}>

              {token ? <Menu  >

                <MenuButton> My Account
                </MenuButton>
                <MenuList>
                <Link to="/orders"><MenuItem>My Orders</MenuItem></Link>
                <Link to="/credits"><MenuItem>My Credits</MenuItem></Link>
                <Link to="/profile"><MenuItem>My Profile</MenuItem></Link>
                <Link to="/newsletter"><MenuItem>My Newsletters</MenuItem></Link>
                <Link to="/refer"><MenuItem>Refer a friend</MenuItem></Link>
                <Link to="/promotion"><MenuItem>My Proms</MenuItem></Link>
                  <MenuItem>Sign Out</MenuItem>

                </MenuList>
              </Menu>
                :
                <Link to="/login">
                <Text >
                  <UnlockIcon />
                  Login / Sign Up
                </Text>
                </Link>

              }

            </Text>
          </HStack>
        </GridItem>


        <GridItem bg='white' area={'logo'}>
          <Link to={"/"}>
          <Box pl={['0px', '0px', "140px"]} py={"5px"} width={"100%"}><Img width={["150px", "150px", "250px"]} height={["45px", "45px", "55px"]} src={"https://i.ibb.co/nQRNKjQ/nearBuy.png"} /></Box>
          </Link>
        </GridItem>


        <GridItem bg='white' pr={['0px', '0px', '140px']} area={'search'} my={'auto'}>
          <HStack gap={"0"} width={["100%"]} >
            <Input width={["70%", "80%", "100%"]} backgroundColor={'white'} borderRadius={"2"} type='text' placeholder=' Search restaurants, spa, events' />
            <Button colorScheme='red' color={'white'} borderRadius={"2"} >Search</Button>
          </HStack>
        </GridItem>


        <GridItem bg='#f1f1f1' area={'blank'}>
        </GridItem>


        <GridItem bg='white' area={'blank2'}>
        </GridItem>
      </Grid>


    </Box >
  )
}

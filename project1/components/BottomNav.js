import { Box, ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import { AddIcon, BellIcon, EditIcon, ChatIcon, Search2Icon } from "@chakra-ui/icons";
import {useState} from "react";
import { render } from "react-dom";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationIcon,
  BottomNavigationLabel,
  BottomNavigationStyleConfig
} from "chakra-ui-bottom-navigation";

import { Icon } from "@chakra-ui/react";
import {MdSettings, MdHome} from 'react-icons/md'
import {GiCommercialAirplane} from 'react-icons/gi'

import React from "react";

import HomeContents from "./HomeContents/HomeContents";
import Profile from "../pages/profile";
import ChatBox from "./ChatBoxContents/ChatBox";
import OnSale from "./TravelContents/OnSale";

function Content({ children }) {
  return (
    <Container p={0} maxW="container.xxl" >
      {children === 0 && (
        <>
          <OnSale></OnSale>
          
        </>
      )}
      {children === "value" && (
        <>
          <HomeContents></HomeContents>
          
        </>
      )}
      {children === 2 && (
        <>
          <ChatBox/>
        </>
      )}
      {children === 3 && (
        <>
        
          <Profile></Profile>
          
        </>
      )}
    </Container>
  );
}

export default function BottomNav() {
  const [index, setIndex] = useState("value");

  console.log("render", { index });

  return (
    <Box p={10} py={20} >
      <Content>{index}</Content>

      <BottomNavigation
        value={index}
        onChange={(newIndex) => {
          setIndex(newIndex);
        }}
        colorScheme="cyan"
        variant="float"
        showLabel="if-active"
        borderRadius={20}
        
        
      >
        <BottomNavigationItem >
          <BottomNavigationIcon as={GiCommercialAirplane} />
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="value">
          <BottomNavigationIcon as={MdHome}/>
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem >
          <BottomNavigationIcon as={ChatIcon} />
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem >
          <BottomNavigationIcon as={Search2Icon} />
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        
        
      </BottomNavigation>
    </Box>
  );
}


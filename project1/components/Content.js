import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Map from "../pages/map";
import HomeContents from "./HomeContents/HomeContents";
import Profile from "../pages/profile";
import ChatBox from "./ChatBoxContents/ChatBox";
import OnSale from "./TravelContents/OnSale";

export function Content({ children }) {
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

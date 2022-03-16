import { Box, Button, Heading, VStack, Text, Flex } from '@chakra-ui/react'
import {ArrowBackIcon} from "@chakra-ui/icons"
import React from 'react'
import { useRouter } from 'next/router'
import HomePageCarousel from './HomePageCarousel'
import Features from './Features'
import BackgroundImg from './BackgroundImg'
import Footer from '../Footer'


const HomeContents = () => {
    const route = useRouter();
  return (
    <>
        <VStack w="full" h="full" p={0} spacing={8} justifyContent="left">
            <Heading display={"flex"} justifyContent="center" alignItems={"center"} size={"md"} fontStyle='oblique'>Travel Anywhere, Anytime</Heading>
            <HomePageCarousel></HomePageCarousel>
            <BackgroundImg></BackgroundImg>
            <Features></Features>
            <Heading></Heading>
            <Text></Text>
            <Footer></Footer>
        </VStack>
    </>
  )
}

export default HomeContents
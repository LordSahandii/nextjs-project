import React from 'react'
import { AspectRatio, Box, VStack, Heading,Button, HStack, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {ArrowBackIcon} from "@chakra-ui/icons"

const Map = () => {
  const route = useRouter();
  return (
    <Box maxW={"container.xxl"}>
      <HStack spacing={4} justifyContent="center">
        <Button as={ArrowBackIcon} variant="ghost" onClick={()=>{route.push("/")}}>

        </Button>

        <Heading >
          Map
        </Heading>
  
      </HStack>
      

      
      <AspectRatio ratio={100 / 100}>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
      alt='demo'
    />
  </AspectRatio>

</Box>
  )
}

export default Map
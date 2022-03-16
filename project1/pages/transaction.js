import React from 'react'
import {ArrowBackIcon} from "@chakra-ui/icons"
import { Container, Stack,VStack,HStack, Box, Button, Text, Center, Heading, Alert } from "@chakra-ui/react"


const transaction = () => {
  return (
    <Container p={10} maxW="container.xxl" >
        <VStack spacing={5} >
            <Button as={ArrowBackIcon} variant="ghost" justifyContent="left"></Button>
            <Box justifyContent="center" alignContent="center" display="flex" bg="gray.300">
                <VStack spacing={3}>
                    <Heading>
                        Your Transaction
                    </Heading>
                    <Text>
                        Total : $200
                    </Text>
                    <Box>
                        <Text>Amount Paid : $150</Text>
                    </Box>
                    <Box display="flex" alignItems="center" p={1}>
                            <Text>Your Payment: $50</Text>
                            <Button justifyContent="flex-end" variant="outline" onClick={()=>{alert("Enjoy your trip")}}>PAY</Button>
                    </Box>
                    <Center borderRadius={30} bg="#1A736A">Processing...</Center>
                        
                </VStack>


            </Box>
            

        </VStack>
    </Container>
  )
}

export default transaction
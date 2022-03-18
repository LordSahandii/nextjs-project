import React from 'react'
import {ArrowBackIcon} from "@chakra-ui/icons"
import { Container, Stack,VStack,HStack, Box, Button, Text, Center, Heading, Alert, useColorMode, useColorModeValue, List,
    ListItem,Image, Progress } from "@chakra-ui/react"
import { useRouter } from 'next/router';

function PriceWrapper({ children }) {
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}
        w="100%"
        >
        {children}
      </Box>
    );
  }

const Transaction = () => {
    const route = useRouter();
  return (
    <Container p={10} maxW="container.xxl" >
        
        <VStack spacing={5} >
            <Button as={ArrowBackIcon} variant="ghost" justifyContent="left" onClick={()=>{alert("Your transaction is being aborted."); route.push("/")}}></Button>
            <PriceWrapper>
          <Box py={4} px={12}>
            
            <VStack justifyContent="center">
                
              <Text fontSize="3xl" fontWeight="900">
                Your Transaction
              </Text>
            
              
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                  <Text>Total : $200</Text>
                  
              </ListItem>
              <ListItem>
                  <Text>Amount Paid : $150</Text>
              </ListItem>
              <ListItem>
                  <Text>Your Payment : $50</Text>
                  
              </ListItem>
              <ListItem justifyContent={"center"}>
                <Button justifyContent="center" colorScheme={"teal"}>PAY</Button>
              </ListItem>
            </List>
            <Box w="50%" pt={7}>
            <Progress size='xs' isIndeterminate />
              <Button w="full" colorScheme="teal" variant="outline">
                Processing
              </Button>
              <Progress size='xs' isIndeterminate />
              
            </Box>
          </VStack>
        </PriceWrapper>
            

        </VStack>
    </Container>
  )
}

export default Transaction
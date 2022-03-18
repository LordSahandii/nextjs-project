import { Circle, Container, SimpleGrid, Flex,Box, VStack, HStack, Stack, Button, Heading, Image, StackDivider } from '@chakra-ui/react'
import {ArrowBackIcon} from "@chakra-ui/icons"
import React from 'react'
import { useRouter } from 'next/router'

const rent = () => {
    const route = useRouter();
  return (
    <>
        <Container maxW="container.xxl" p={0}>
            <Flex justifyContent="center">
                <Stack>
            <VStack p={5}>
            <HStack spacing={4} flexDirection="row" display="flex" position="fixed">
                    <Stack alignItems="flex-start" justifyContent="flex-start" alignSelf="flex-start"> 
                    <Button as={ArrowBackIcon} onClick={()=>{route.push("/")}} variant="ghost"></Button>
                    </Stack>
                    <Stack alignItems="center" justifyContent="center" alignSelf="center">
                        <Heading>Rent</Heading>
                    </Stack>
            </HStack>
            </VStack>
            
            <VStack spacing={5} p={10} w="full" h="full" justifyContent="center" alignItems="center">
                
                <HStack spacing={15}>
                    <Image  src="/taxi.png" boxSize='150px' borderRadius="full" onClick={()=>{route.push("/taxi")}}></Image>
                    
                    <Image src="/bus2.jpeg" boxSize='150px' borderRadius="full" onClick={()=>{route.push("/bus")}}></Image>
                </HStack>
                <HStack>
                    <Image  src="/car2.jpeg"boxSize='150px' borderRadius="full" onClick={()=>{route.push("/car")}}></Image>
                </HStack>
                
            </VStack>
            </Stack>
            </Flex>
        </Container>
    </>

  )
}

export default rent
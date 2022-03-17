import { Container, Box, Button, Image, useColorModeValue, Stack, Heading,Text, HStack, InputGroup, InputLeftElement, Input, SimpleGrid } from '@chakra-ui/react'
import {ArrowBackIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"
import React from 'react'
import { useRouter } from 'next/router'

const car = () => {
  const route = useRouter()
  return (
    <Container p={5} maxW="container.md">
      
      <Stack spacing={7}
          
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          >
            <Button as={ArrowBackIcon} variant="ghost" onClick={()=>{route.push("/rent")}}/>
      
            <Heading>
              Rent Cars 
            </Heading>
            
            <Stack mt={8} direction={'row'} spacing={4} position="relative" overflowX="scroll">
              
              <Image src="/Sedan.webp" borderRadius="full" h={40} w={40}>
             </Image>
             <Image src="/Suv.jpeg" borderRadius="full" h={40} w={40}>
             </Image>
             <Image src="/minivan.jpeg" borderRadius="full" h={40} w={40}/>
             <Image src="/Coupe.jpeg" borderRadius="full" h={40} w={40}/>
             <Image src="/camping.jpeg" borderRadius="full" h={40} w={40}/>
             <Image src="/Hatchback.jpeg" borderRadius="full" h={40} w={40}/>
           </Stack>
           <HStack>
           <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              
              children={<BiMap color='gray.300'/>}
            />
            <Input type='text' placeholder='PickUp' />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              
              children={<BiMap color='gray.300'/>}
            />
            <Input type='text' placeholder='DropOff' />
          </InputGroup>
          
           </HStack>
           <SimpleGrid>
           <Text>Pickup Date:</Text>
           <InputGroup>
            
            <Input type='date' placeholder='Pickup Date' />
          </InputGroup>
          <Text>DropOff Date:</Text>
          <InputGroup>
            
            <Input type='date' placeholder='Dropoff Date' />
          </InputGroup>
          <Text>Pickup Time:</Text>
          <InputGroup>
            
            <Input type='time' placeholder='Pickup Time' />
          </InputGroup>

          <Text>DropOff Time:</Text>

          <InputGroup>
            <Input type='time' placeholder='Dropoff Time' />
          </InputGroup>
           </SimpleGrid>
           <Button colorScheme="teal" >Search</Button>
            
            </Stack>
            
    </Container>
          // <Stack mt={8} direction={'row'} spacing={4} position="relative" overflowX="scroll">
          //   <Image src="/Hawaii.webp">
          //   </Image>
          //   <Image src="/Mexico.jpeg">
          //   </Image>
          // </Stack>
  )
}

export default car
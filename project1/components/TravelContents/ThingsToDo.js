import React from 'react'
import { ReactNode, useState } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Container,
  StackDivider,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid, Flex, Menu, MenuButton, MenuItem, MenuList, Grid, MenuDivider, useToast
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {ArrowBackIcon, ChevronDownIcon, AddIcon, MinusIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"

const ThingsToDo = () => {
    const [i,setI] = useState(0);
    const[j,setJ] = useState(0);
    const[k,setK] = useState(0);
    const children = <BiMap color='gray.300'/>
    const toast = useToast();
    
  return (
    <Stack spacing={7}
          
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          
          >
   

            <Heading>
              Things To Do In
            </Heading>
            
           <HStack>
           <InputGroup>
            <InputLeftElement>{children}</InputLeftElement>
            <Input type='text' placeholder='Things to do in' />
          </InputGroup>
          
           </HStack>
           <SimpleGrid columns={2} alignItems="center">
           
           <Text>From:</Text>
           <InputGroup>
            
            <Input type='date' placeholder='Pickup Date' />
          </InputGroup>
          
          <Text>To:</Text>
          <InputGroup>
            
            <Input type='date' placeholder='Dropoff Date' />
          </InputGroup>
         
          
           </SimpleGrid>
           <Button colorScheme="teal" onClick={()=>{toast({
          title: 'Found!!!',
          description: "We've found the best deal for you",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })}}>Search</Button>
        
        
    </Stack>
  )
}

export default ThingsToDo
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
  SimpleGrid, Flex, Menu, MenuButton, MenuItem, MenuList, Grid, MenuDivider
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {ArrowBackIcon, ChevronDownIcon, AddIcon, MinusIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"

const ThingsToDo = () => {
    const [i,setI] = useState(0);
    const[j,setJ] = useState(0);
    const[k,setK] = useState(0);
    
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
            <InputLeftElement
              pointerEvents='none'
              
              children={<BiMap color='gray.300'/>}
            />
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
           <Button colorScheme="teal" >Search</Button>
        
        
    </Stack>
  )
}

export default ThingsToDo
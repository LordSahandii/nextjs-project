import React from 'react'
import { useState } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  useColorModeValue,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid, Menu, MenuButton, MenuItem, MenuList, Grid, MenuDivider, useToast
} from '@chakra-ui/react';

import { ChevronDownIcon, AddIcon, MinusIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"

const Airplane = () => {
    const [i,setI] = useState(0);
    const toast = useToast();
    const[j,setJ] = useState(0);
    const[k,setK] = useState(0);
    const[types,setTypes] = useState("Economy");
    const children = <BiMap color='gray.300'/>
  return (
    <Stack spacing={7}
          
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          
          >
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} onClick={()=>{setI(j+k)}}>
                {i} Travellers
            </MenuButton>
            <MenuList>
                <Grid gap={3} templateColumns='repeat(3, 1fr)'>
                <Text>Adult {j} </Text>  
                <Button as={MinusIcon} variant='ghost' size="xxs" onClick={()=>{
                    if(j>0){setJ(j-1)}
                }}></Button>
                <Button as={AddIcon} variant='ghost' size="xxs" onClick={()=>{setJ(j+1)}}></Button>

                </Grid>
                <MenuDivider></MenuDivider>
                <Grid gap={3} templateColumns='repeat(3, 1fr)'>
                <Text>Child {k} </Text>  
                <Button as={MinusIcon} variant='ghost' size="xxs" onClick={()=>{
                    if(k>0){setK(k-1)}
                }}></Button>
                <Button as={AddIcon} variant='ghost' size="xxs" onClick={()=>{setK(k+1)}}></Button>
            
                </Grid>
                </MenuList>
            </Menu>
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} onClick={()=>{setI(j+k)}}>
                {types}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => {setTypes("Economy")}}>Economy</MenuItem>
                <MenuItem onClick={() => setTypes("Premium")}>Premium</MenuItem>
                <MenuItem onClick={() => setTypes("Business Class")}>Business Class</MenuItem>
                <MenuItem onClick={() => setTypes("First Class")}>First Class</MenuItem>
            </MenuList>
            </Menu>
      
            <Heading>
              Flight
            </Heading>
            
           <HStack>
           <InputGroup>
           <InputLeftElement>{children}</InputLeftElement>
            <Input type='text' placeholder='Leaving From' />
          </InputGroup>
           <InputGroup>
            <InputLeftElement>{children}</InputLeftElement>
            <Input type='text' placeholder='Going to' />
          </InputGroup>
          
           </HStack>
           <SimpleGrid columns={2} alignItems="center">
           <Text>Departing:</Text>
           <InputGroup>
            
            <Input type='date' />
          </InputGroup>
          <Text>Returning:</Text>
          <InputGroup>
            
            <Input type='date'  />
          </InputGroup>
         
           </SimpleGrid>
           <Button colorScheme="teal" onClick={()=>{toast({
          title: 'Found!!!',
          description: "We've found the best deal for you",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })}} >Search</Button>
        
        
    </Stack>
  )
}

export default Airplane
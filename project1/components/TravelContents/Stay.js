import React from 'react'
import { useState } from 'react';
import {
  Stack,
  HStack,
  Heading,
  Text,

  useColorModeValue,

  Button,

  Input,
  InputGroup,
 
  SimpleGrid,   Menu, MenuButton, MenuItem, MenuList, Grid, MenuDivider, InputRightElement, useToast
} from '@chakra-ui/react';
import { ChevronDownIcon, AddIcon, MinusIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"

const Stay = () => {
    const toast = useToast();
    const [i,setI] = useState(0);
    const[j,setJ] = useState(0);
    const[k,setK] = useState(0);
    const children = <BiMap color='gray.300'/>
    const[room,setRoom] = useState(0);
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
                {i} Travellers, {room} Rooms
            </MenuButton>
            <MenuList >
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
                <Button as={AddIcon} variant='ghost' size="xxs" onClick={()=>{setK(k+1)}} ></Button>
            
                </Grid>
                <MenuDivider></MenuDivider>
                <Grid gap={3} templateColumns='repeat(3, 1fr)'>
                <Text>Room {room} </Text>  
                <Button as={MinusIcon} variant='ghost' size="xxs" onClick={()=>{
                    if(room>0){setRoom(room-1)}
                }}></Button>
                <Button as={AddIcon} variant='ghost' size="xxs" onClick={()=>{setRoom(room+1)}}></Button>
            
                </Grid>
                <MenuDivider></MenuDivider>
                <Button color={"#1A736A"} onClick={()=>{setI(j+k)}}>Done</Button>
                
            </MenuList>
            </Menu>
      
            <Heading>
              Where to Stay 
            </Heading>
            
           <HStack>
           <InputGroup>
            <InputRightElement>{children}</InputRightElement>
            <Input type='text' placeholder='Going to' />
          </InputGroup>
          
           </HStack>
           <SimpleGrid columns={2} alignItems="center">
           <Text>Check-in:</Text>
           <InputGroup>
            
            <Input type='date' />
          </InputGroup>
          <Text>Check-out:</Text>
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

export default Stay
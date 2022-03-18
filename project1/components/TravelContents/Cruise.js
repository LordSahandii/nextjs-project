import React from 'react'
import { ReactNode, useState } from 'react';
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
  SimpleGrid, Flex,  Menu, MenuButton, MenuItem, MenuList, Grid, MenuDivider, useToast
} from '@chakra-ui/react';
import {ChevronDownIcon, AddIcon, MinusIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"

const Cruise = () => {
    const[i,setI] = useState(0);
    const[j,setJ] = useState(0);
    const[k,setK] = useState(0);
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
      
            <Heading>
              Getting a Cruise
            </Heading>
            
           <HStack>
           <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              
              children={<BiMap color='gray.300'/>}
            />
            <Input type='text' placeholder='Going to' />
          </InputGroup>
          
           </HStack>
           <SimpleGrid columns={2} alignItems="center">
           <Text>Departs as early as:</Text>
           <InputGroup>
            
            <Input type='date' />
          </InputGroup>
          <Text>Departs as late as:</Text>
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
        })}}>Search</Button>
        
        
    </Stack>
  )
}

export default Cruise
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Container,
    VStack,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    HStack, Flex, Hstack
  } from '@chakra-ui/react';
  import {ArrowRightIcon, ArrowBackIcon} from "@chakra-ui/icons"
import { useState } from 'react';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
  
  export default function ChatBox() {
      const route = useRouter();
      
    return (
      
            <VStack spacing={10}>
                <HStack>
                    {/* <Button as={ArrowBackIcon} onClick={()=>{router.push("/")}} variant="ghost"></Button> */}
                    <Heading>Chat Box</Heading>
                </HStack>
                
                <HStack display='flex' justifyContent='flex-end' alignItems="center" >
                        <Button colorScheme="teal">Create</Button>
                        <Button colorScheme="teal">Join</Button>
                </HStack>   
      <HStack py={6}>
        <Box
          maxW={'600px'}
          maxH={"300px"}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'left'}>
              
          <Avatar
            size={'lg'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Stack direction="row" spacing={4}>
              <Stack spacing={0}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Maria Fibbo
          </Heading>
          <Text fontWeight={600} color={'gray.500'} >
            @maria_fibbo
          </Text>
          </Stack>
            <Button
              
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onClick={()=>{route.push("/chat")}}
              >
              Message
            </Button>
            </Stack>
         
        </Box>
      </HStack>
      </VStack>

    );
  }
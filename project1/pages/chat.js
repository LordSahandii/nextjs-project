import { Stack, Flex, Button, Avatar, StackDivider, Box, Text, Container, HStack, Heading, InputGroup, Input, InputRightAddon } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {FiSend} from "react-icons/fi"
import React from 'react'
import { useRouter } from 'next/router'
  

const Chat = () => {
  const route = useRouter();
  return (
    <Container p={5} maxW={"container.lg"}>
        <Stack divider={<StackDivider borderColor={"gray.200"}></StackDivider>}>
        <Box display="flex" justifyContent="space-between"> 
          <Button as={ArrowBackIcon} variant="ghost" onClick={()=>{route.push("/")}} ></Button>
          <Avatar
            size={'md'}
            src={
              '/Emilly.jpeg'
            }
            alt={'Avatar Alt'}
            mb={4}
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
            }}/>
        </Box>
        <Box >
        <Box
          maxW={'600px'}
          maxH={"300px"}
          w={'50%'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'left'}
          float="right">
            
              
          <Avatar
            size={'md'}
            src={
              'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'
            }
            alt={'Avatar Alt'}
            
            pos={'relative'}
            float="right"
            
          />
          <Stack direction="row" spacing={4} float="right">
              <Text>Hello there! How are you? I like the picture on your profile.</Text>
           
            </Stack>
         
        </Box>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <Box
          maxW={'600px'}
          maxH={"300px"}
          w={'50%'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'left'}
          float="left"
          
          
          >
              
          <Avatar
            size={'md'}
            src={
              '/Emilly.jpeg'
            }
            alt={'Avatar Alt'}
            
            pos={'relative'}
            float="left"
            
            
            
          />
          <Stack direction="row" spacing={4} float="left">
              <Text >Hey, Im doing great. what about you? I like your picture too</Text>
           
            </Stack>
         
        </Box>
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <Box
          maxW={'600px'}
          maxH={"300px"}
          w={'50%'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'left'}
          float="right">
            
              
          <Avatar
            size={'md'}
            src={
                'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'
            }
            alt={'Avatar Alt'}
            
            pos={'relative'}
            float="right"
            
          />
          <Stack direction="row" spacing={4} float="right">
              <Text>Would you like to hang out today? and talk about travelling?</Text>
           
            </Stack>
         
        </Box>
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <Box
          maxW={'600px'}
          maxH={"300px"}
          w={'50%'}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'left'}
          float="left"
          
          >
              
          <Avatar
            size={'md'}
            src={
              '/Emilly.jpeg'
            }
            alt={'Avatar Alt'}
            
            pos={'relative'}
            float="left"
            
            
            
          />
          <Stack direction="row" spacing={4} float="left">
              <Text >Yes I would love to hang out with you!!!</Text>
           
            </Stack>
         
        </Box>


        </Box>
        
        
        
        </Stack>
        <InputGroup position={"fixed"} bottom={1} left={1} right={1} variant="filled" borderRadius={20}  >
            
            <Input borderRadius={20} ></Input>
            <InputRightAddon as={FiSend} bgColor="#60B5AC" borderRadius={20} mr={2}></InputRightAddon>
        </InputGroup>
        


    </Container>
  )
}

export default Chat
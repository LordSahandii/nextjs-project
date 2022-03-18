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
    HStack, useToast
  } from '@chakra-ui/react';
  import {ArrowRightIcon, ArrowBackIcon} from "@chakra-ui/icons"
import { useState } from 'react';
import React from 'react';
  
  
  export default function Profile() {

    const toast = useToast();
    const [isvisible, setVisible] = useState("hidden");
    const HandleClick = (e) => {
        e.preventDefault();
        let vis = document.getElementById('user').value;
        if(vis == "Emily Hurt"){
          setVisible("visible")
        } else{
            setVisible("hidden")
            toast({
              title: 'No User Found!',
              status: 'error',
              duration: 2000,
              isClosable: true,
            });
          }
      }
    return (
            <VStack spacing={10}>
                <HStack>
                    {/* <Button as={ArrowBackIcon} onClick={()=>{router.push("/")}} variant="ghost"></Button> */}
                    <Heading>Search</Heading>
                </HStack>
                
                <InputGroup size="md">
                    <Input placeholder="try searching for Emily Hurt" variant='filled' id='user'></Input>
                    <InputRightElement width="4.5rem">
                        <Button as={ArrowRightIcon} size="sm" variant="ghost" onClick={(e)=>{HandleClick(e)}} type="submit"></Button>
                    </InputRightElement>
                    
                </InputGroup>    
      <Center py={6} visibility={isvisible} >
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
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
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Emily Hurt
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @emily_hurt213
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Sales Manager, friendly person, coffee lover. PM for best car deals or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              200 Followers
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              155 Followings
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              2 posts
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
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
              }}>
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
      <Center py={6} visibility={isvisible} id='user'>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'red.500',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Emily Hurt
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @Hurt_15442
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires.
            
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              50 Followers
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              55 Followings
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              6 posts
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
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
              }}>
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
      
      </VStack>
    );
  }
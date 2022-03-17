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
  SimpleGrid, Flex, Image
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {ArrowBackIcon} from "@chakra-ui/icons"
import {BiMap} from "react-icons/bi"
import ThingsToDo from './ThingsToDo';
import Stay from './Stay';
import Airplane from './Airplane';
import Cruise from './Cruise';
import {FaWpexplorer} from "react-icons/fa"
import {MdFlight, MdCardTravel} from 'react-icons/md'
import {RiShip2Line} from "react-icons/ri"


function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      w="70%"
      >
      {children}
    </Box>
  );
}
function ContentTravel({ children }) {
    return (
      <Container p={0} maxW="container.xxl" >
        {children === 0 && (
          <>
            <ThingsToDo/>
            
          </>
        )}
        {children === "value" && (
          <>
            <Stay></Stay>
            
          </>
        )}
        {children === 2 && (
          <>
           <Airplane></Airplane>
          </>
        )}
        {children === 3 && (
          <>
          
            <Cruise></Cruise>
            
          </>
        )}
      </Container>
    );
  }
  

export default function OnSale() {
    
    const [index, setIndex] = useState("value")
  return (
    <VStack w="full" h="full" spacing={10}> 
    <Stack spacing={7}>
        <Flex justifyContent={"space-evenly"}>
            <Button as={FaWpexplorer} variant="ghost" onClick={()=>{setIndex(0)}}></Button>
            <Button as={MdCardTravel} variant="ghost" onClick={()=>{setIndex("value")}}></Button>
            <Button as={MdFlight} variant="ghost" onClick={()=>{setIndex(2)}}></Button>
            <Button as={RiShip2Line} variant="ghost" onClick={()=>{setIndex(3)}}></Button>
        </Flex>

        <ContentTravel children={index}></ContentTravel>

    
    </Stack>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Hobby
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                  <Image src='/Cancun.webp'></Image>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline">
                Book Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('teal.300', 'teal.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                  <Image src='/Santorini.jpeg'></Image>
              </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="teal">
                  Book Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Scale
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
            >
            <List spacing={3} textAlign="start" px={12}>
            <ListItem>
                  <Image src='/Paris.jpeg' ></Image>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </VStack>
  );
}
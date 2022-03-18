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
  SimpleGrid, Flex, Image, Hstack
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

import { useRouter } from 'next/router';


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
    const [index2, setIndex2] = useState(0);
    const route = useRouter();
    // const ref = React.createRef();
    
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
          Huge Deals!!!
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start booking for Spring and Summer with our best valuable packages. 
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
            <Text fontWeight="800" fontSize="2xl">
              Cancun
            </Text>
            <VStack justifyContent="center">
                
              <Text fontSize="3xl" fontWeight="900">
                $1800
              </Text>
            
              <Text fontSize="md" color="gray.500">
                5 days, 4 nights
              </Text>
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                  <Image src='/Cancun.webp' w={"100%"} height="100%"></Image>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline" onClick={()=>{route.push('/cancun')}}>
                Book Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-26px"
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
            <Text fontWeight="800" fontSize="2xl">
              Santorini
            </Text>
            <VStack justifyContent="center">
                
              <Text fontSize="3xl" fontWeight="900">
                $2400
              </Text>
            
              <Text fontSize="md" color="gray.500">
                14 days
              </Text>
            </VStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                  <Image src='/Santorini.jpeg' w={"100%"} height="100%"></Image>
              </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="teal" onClick={()=>{route.push('/santorini')}}>
                  Book Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper >
          <Box py={4} px={12}>
            <Text fontWeight="800" fontSize="2xl">
              Paris
            </Text>
            <VStack justifyContent="center">
                
              <Text fontSize="3xl" fontWeight="900">
                $3000
              </Text>
            
              <Text fontSize="md" color="gray.500">
                10 days
              </Text>
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
            >
            <List spacing={3} textAlign="start" px={12}>
            <ListItem>
                  <Image src='/Paris.jpeg' w={"100%"} height="100%"></Image>
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="teal" variant="outline" onClick={()=>{route.push('/paris')}}>
                Book Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </VStack>
  );
}
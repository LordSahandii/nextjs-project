import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Container,
    VStack,

    HStack,Image
  } from '@chakra-ui/react';
  import { ArrowBackIcon} from "@chakra-ui/icons"
import { useRouter } from 'next/router';
import React from 'react';
  
  
  export default function Myprofile() {
      const router = useRouter();
      
      
    return (
        <Container p={5} maxW="container.xxl" position="relative" overflowX="scroll"> 
            <VStack spacing={10}>
                <HStack justifyContent="flex-start" alignItems="center">
                    <Button as={ArrowBackIcon} onClick={()=>{router.push("/")}} variant="ghost"></Button>
                    <Heading>My Username</Heading>
                </HStack>
                   
      <Center py={6} >
        <Box
          maxW={{base:'320px', md:"400px",lg: "750px"}}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'
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
            Jesse Parker
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @jesse_park
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            CyberSecurity Specialist, I work at Fcorp organization. For more security for your Alexa DM me.
            
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              1.5k Followers
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              200 Followings
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              2 posts
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={{base:'row',lg:"column"}} spacing={4} position="relative" overflowX= "scroll">
            <Image src="/Hawaii.webp">
            </Image>
            <Image src="/Mexico.jpeg" >
            </Image>
          </Stack>
        </Box>
      </Center>
      
      </VStack>
      </Container>
    );
            }
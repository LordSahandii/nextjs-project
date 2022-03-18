import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import React from 'react';
  
  export default function BackgroundImg() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://cdn.britannica.com/54/150954-050-F8D14782/Night-view-Parthenon-Athens.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Explore the temple of the Greek Gods this season.
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
                
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import {FcGraduationCap,FcDebt,FcGlobe } from 'react-icons/fc';



const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcGlobe} w={10} h={10} />}
          title={'Travel Easy'}
          text={
            'Experience your best travel with us. Find the best deals with us.'
          }
        />
        <Feature
          icon={<Icon as={FcGraduationCap} w={10} h={10} />}
          title={'Grudate Students'}
          text={
            'Find the best deals for gradute students. Take your gap year as soon as possible, go have fun.'
          }
        />
        <Feature
          icon={<Icon as={FcDebt} w={10} h={10} />}
          title={'Pay only for yourself'}
          text={
            'With the new system design, you dont need to pay for others'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
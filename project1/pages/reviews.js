import React from 'react'
import { Container, HStack, Icon, Stack, Flex, Button, Box, Image, Text} from "@chakra-ui/react"
import {ArrowBackIcon, StarIcon} from "@chakra-ui/icons"
import { useRouter } from 'next/router'


const Reviews = () => {
    const route = useRouter();
  return (
      
    <Container maxW="container.xxl" p={0}>
        <Flex justifyContent="center" alignItems="center">
            <Stack p={10} spacing={10}>
                <Button as={ArrowBackIcon} variant="ghost" onClick={()=>{route.push("/")}}></Button>
                <Box >
                    <Image src="./Hawaii.webp"></Image>
                </Box>
                <HStack>
                    <Icon as={StarIcon} color="yellow.400"></Icon>
                    <Icon as={StarIcon} color="yellow.400"></Icon>
                    <Icon as={StarIcon} color="yellow.400"></Icon>
                    <Icon as={StarIcon} color="yellow.400"></Icon>
                    <Icon as={StarIcon}></Icon>
                </HStack>

                <Text>
                    Amazing Place!!!
                </Text>

            </Stack>
        </Flex>
    </Container>
  )
}

export default Reviews
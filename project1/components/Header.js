import React from 'react'
import { Center, Container, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const Header = () => {
  return (
        <Container minH="full" minWidth="100%" W="full" position="fixed" p={0} >
            <Center bg="teal.400" minWidth="full" rounded="md" borderTopLeftRadius={1.5} borderTopRightRadius={1.5} fontFamily="mono" >
                Travelgram
            </Center>
        </Container>


  )
}

export default Header
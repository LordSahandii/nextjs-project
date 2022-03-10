import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { color, Heading, theme, Flex, VStack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
    
    <Container maxW="container.xxl" p={0}>
      <Header/>
    
      {/* <Header/> */}
      <Flex h="100vh" py={20}>
        
        {/* <VStack w="full" h="full" p={10}>

        </VStack> */}

      </Flex>

      </Container>
      </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { color, Heading, theme, Flex, VStack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Home() {
  return (
    <>
    
    <Container maxW="container.xxl" p={0}>
      <Header/>
    <BottomNav/>
      
      </Container>
      </>
  )
}

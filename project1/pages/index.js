
import { Container } from '@chakra-ui/react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import React from 'react';
  

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

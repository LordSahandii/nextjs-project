import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import Head from 'next/head'
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({
   colors,
   components: {
     BottomNavigation,
   }
 })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Travelling app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      
    </ChakraProvider>
  )
}

export default MyApp

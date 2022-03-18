import React from 'react'
import { Flex, Button, Heading, Spacer, Container, Center, Stack, VStack, Box, StackDivider } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import Delete from '../components/Delete'


const settings = () => {
    const router = useRouter();
  return (
      
    <Container maxW="container.xxl" padding={10} centerContent >
                {/* <VStack  spacing={8} >
                <Stack spacing={8} direction="row">
                <Button as={ArrowBackIcon} onClick={()=>{router.push("/")}}></Button>
                <Heading>Settings</Heading>
                </Stack>
                
                
                    <Box>
                        <Button> TODO </Button>
                    </Box>
                    <Box>
                        <Button> TODO </Button>
                    </Box>
                    <Box>
                        <Button> TODO </Button>
                    </Box>
                    <Box>
                        <Button> TODO </Button>
                    </Box>
                    <Box>
                        <Button> TODO </Button>
                    </Box>
                </VStack> */}
                
                <Stack spacing={8} centerContent>
                <Stack spacing={10} direction="row">
                <Button as={ArrowBackIcon} variant="ghost" onClick={()=>{router.push("/")}}></Button>
                <Heading alignItems="end">Settings</Heading>
                </Stack>
                
                


                

                <VStack spacing={10} >
                        
                        <Button colorScheme={"teal"} > Change Profile </Button>
                    
                    
                        <Button colorScheme={"teal"}> Manage friends </Button>
                   
                
                        <Button colorScheme={"teal"}>    Payments    </Button>
                    
             
                        <Button colorScheme={"yellow"}>   Security    </Button>
                    
                        <Delete></Delete>
                        
                
                </VStack>
                </Stack>
                
              
                
    </Container>

    
  )
}

export default settings
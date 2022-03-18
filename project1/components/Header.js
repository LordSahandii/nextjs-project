import React, { useState } from 'react'
import { ReactNode } from 'react';
import {
    
    IconButton,
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Spacer,
  } from '@chakra-ui/react';
import { MoonIcon, SunIcon, AddIcon,ExternalLinkIcon,RepeatIcon, EditIcon, HamburgerIcon, Search2Icon, CalendarIcon } from '@chakra-ui/icons';
import {FaMapMarkedAlt} from "react-icons/fa"
import {AiFillCar} from "react-icons/ai"

import Head from 'next/head'
import { useRouter } from 'next/router'

const Header = () => {
    const [log, setLog] = useState('Logout'?'Login':'Logout');
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        
        router.push("/Map")
      }
  return (
        <>
            <Box bg="teal.400" px={4} borderBottomLeftRadius={11} borderBottomRightRadius={11} position="absolute" width={"full"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon></HamburgerIcon>}
                            variant='outline'
                            borderColor="teal.400"
                            
                        />
                        <MenuList bg="#60B5AC">
                            <MenuItem icon={<CalendarIcon/> } onClick={()=>{router.push("/notbook")}} >
                            Notebook
                            </MenuItem>
                            
                            <MenuItem icon={<AiFillCar/> } onClick={()=>{router.push("/rent")}}>
                            Rent
                            </MenuItem>
                            <MenuItem icon={<EditIcon></EditIcon> } onClick={()=>{router.push("/aboutUs")}}>
                            About Me
                            </MenuItem>
                            
                        </MenuList>
                    </Menu>
                    
                
                    <Box fontFamily="cursive" fontWeight="bold" fontSize="2xl">Travelgram</Box>

                    <Flex>
                        <Stack direction={'row'} spacing={3}>
                        <Button onClick={toggleColorMode} bg="teal.400">
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        <Menu>
                            <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                                size={'sm'}
                                src={'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'}
                            />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                            <br />
                            <Center>
                                <Avatar
                                size={'2xl'}
                                src={'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'}
                                />
                            </Center>
                            <br />
                            <Center>
                                <p>Username</p>
                            </Center>
                            <br />
                            <MenuDivider />
                            <MenuItem onClick={()=>{router.push("/myprofile")}}>View Profile</MenuItem>
                            <MenuItem onClick={()=>{router.push("/settings")}}>Account Settings</MenuItem>
                            <MenuItem onClick={(e)=>{e.preventDefault() ;alert("Logged out successfully"); setLog(log==='Logout'?'Login':'Logout')}}>{log==='Logout'?'Login':'Logout'}</MenuItem>
                            </MenuList>
                        </Menu>
                        </Stack>
                    </Flex>
                    
                </Flex>
            </Box>
        </>


  )
}

export default Header
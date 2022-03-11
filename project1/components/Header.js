import React from 'react'
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
import { MoonIcon, SunIcon, AddIcon,ExternalLinkIcon,RepeatIcon, EditIcon, HamburgerIcon,  } from '@chakra-ui/icons';
import Head from 'next/head'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
        <>
            <Box bg="teal.400" px={4} borderBottomLeftRadius={11} borderBottomRightRadius={11}>
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
                            <MenuItem icon={<AddIcon/> } command='⌘T'>
                            New Tab
                            </MenuItem>
                            <MenuItem icon={<ExternalLinkIcon></ExternalLinkIcon>} command='⌘N'>
                            New Window
                            </MenuItem>
                            <MenuItem icon={<RepeatIcon/> } command='⌘⇧N'>
                            Open Closed Tab
                            </MenuItem>
                            <MenuItem icon={<EditIcon></EditIcon> } command='⌘O'>
                            Open File...
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    
                
                    <Box>Travelgram</Box>

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
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
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
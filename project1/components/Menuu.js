import { Container,Flex, VStack, Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, MenuDivider, HStack, Box, Spacer, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddIcon,ExternalLinkIcon,RepeatIcon, EditIcon  } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

const Menuu = () => {
  const [theeme, setTheme] = useState('light');
  const {toggleColorMode} = useColorMode();
  const s = (e) =>{
    e.preventDefault();
    setTheme(theeme=='light' ? 'dark' : 'light');
  }
  
  
  return (
    <Box p={7} h={0} w="full" position="fixed">
  <Flex>
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon></HamburgerIcon>}
        variant='outline'
      />
      <MenuList>
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
  
    <Spacer />
    <HStack spacing='10px'>
    <Button rounded={10} onClick={(e)=>{ toggleColorMode(); s(e)}} paddingRight={5}>{theeme}</Button>
    
    <Menu>
      <MenuButton as={Button} colorScheme='pink'>
        Profile
      </MenuButton>
      <MenuList>
        <MenuGroup title='Profile'>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Help'>
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  </HStack>
    
    
  </Flex>
  </Box>
  )
}

export default Menuu
import { Container,Flex, VStack, Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, MenuDivider, HStack, Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import { IconButton,HamburgerIcon,AddIcon,ExternalLinkIcon,RepeatIcon, EditIcon  } from '@chakra-ui/react'

const Menuu = () => {
  return (
    <Box p={7} h={0} w="full" position="fixed">
  <Flex >
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={HamburgerIcon}
        variant='outline'
      />
      <MenuList>
        <MenuItem icon={AddIcon } command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={ExternalLinkIcon } command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={RepeatIcon } command='⌘⇧N'>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={EditIcon } command='⌘O'>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  
    <Spacer />
    
    <Spacer />
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
    
  </Flex>
  </Box>
  )
}

export default Menuu
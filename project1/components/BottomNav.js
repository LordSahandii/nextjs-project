import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AddIcon, BellIcon, EditIcon, ChatIcon, Search2Icon } from "@chakra-ui/icons";
import {useState} from "react";
import { render } from "react-dom";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationIcon,
  BottomNavigationLabel,
  BottomNavigationStyleConfig
} from "chakra-ui-bottom-navigation";
import { Content } from "./content";
import { Icon } from "@chakra-ui/react";
import {MdSettings, MdHome} from 'react-icons/md'
import {GiCommercialAirplane} from 'react-icons/gi'


export default function BottomNav() {
  const [index, setIndex] = useState("value");

  console.log("render", { index });

  return (
    <Box p={10} py={20} >
      <Content children={index} />

      <BottomNavigation
        value={index}
        onChange={(newIndex) => {
          setIndex(newIndex);
        }}
        colorScheme="cyan"
        variant="float"
        showLabel="if-active"
        borderRadius={20}
        
        
      >
        <BottomNavigationItem >
          <BottomNavigationIcon as={GiCommercialAirplane} />
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="value">
          <BottomNavigationIcon as={MdHome}/>
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem >
          <BottomNavigationIcon as={ChatIcon} />
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem >
          <BottomNavigationIcon as={Search2Icon} />
          <BottomNavigationLabel></BottomNavigationLabel>
        </BottomNavigationItem>
        
        
      </BottomNavigation>
    </Box>
  );
}


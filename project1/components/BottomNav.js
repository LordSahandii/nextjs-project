import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AddIcon, BellIcon, EditIcon } from "@chakra-ui/icons";
import * as React from "react";
import { render } from "react-dom";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationIcon,
  BottomNavigationLabel,
  BottomNavigationStyleConfig
} from "chakra-ui-bottom-navigation";
import { Content } from "./content";

export default function BottomNav() {
  const [index, setIndex] = React.useState("value");

  console.log("render", { index });

  return (
    <Box p={10}>
      <Content index={index} />

      <BottomNavigation
        value={index}
        onChange={(newIndex) => {
          setIndex(newIndex);
        }}
        colorScheme="green"
        variant="float"
        showLabel="if-active"
      >
        <BottomNavigationItem>
          <BottomNavigationIcon as={AddIcon} />
          <BottomNavigationLabel>Label 1</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="value">
          <BottomNavigationIcon as={EditIcon} />
          <BottomNavigationLabel>Label 2</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem>
          <BottomNavigationIcon as={BellIcon} />
          <BottomNavigationLabel>Label 3</BottomNavigationLabel>
        </BottomNavigationItem>
      </BottomNavigation>
    </Box>
  );
}


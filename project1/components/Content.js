import { Box, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export function Content({ children }) {
  return (
    <Box>
      {children === 0 && (
        <>
          <Heading>Item 1</Heading>
          <Text>Content of a first item</Text>
        </>
      )}
      {children === "value" && (
        <>
          <Heading>Item 2</Heading>
          <Text>Content of a 2nd item</Text>
        </>
      )}
      {children === 2 && (
        <>
          <Heading>Item 3</Heading>
          <Text>Content of a 3rd item</Text>
        </>
      )}
    </Box>
  );
}

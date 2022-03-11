import { Box, Container, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

export function Content({ children }) {
  return (
    <Container>
      {children === 0 && (
        <>
          <Heading>Item 1</Heading>
          <Text>Content of a first item</Text>
          <Footer></Footer>
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
    </Container>
  );
}

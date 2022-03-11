import { Image, Box, Container } from "@chakra-ui/react"
export default function Custom404() {
    return (
        <Container maxH="container.xxl" maxW="container.xxl"  minH="container.sm" p={0}>
      <Image src="/err.jpeg" minH="container.sm"></Image>
      </Container>
    )
  }
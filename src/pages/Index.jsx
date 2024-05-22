import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} alignItems="flex-start">
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box p={5} shadow="md" borderWidth="1px" mb={8}>
            <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Link as={RouterLink} to="#">Recent Post 1</Link>
              <Link as={RouterLink} to="#">Recent Post 2</Link>
              <Link as={RouterLink} to="#">Recent Post 3</Link>
            </VStack>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="lg" mb={4}>Categories</Heading>
            <VStack spacing={4} align="stretch">
              <Link as={RouterLink} to="#">Category 1</Link>
              <Link as={RouterLink} to="#">Category 2</Link>
              <Link as={RouterLink} to="#">Category 3</Link>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Container maxW="container.md" p={4}>
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading as="h2" size="lg" mb={4}>About Me</Heading>
      <Text fontSize="md">This is the about page where you can write about yourself.</Text>
    </Box>
  </Container>
);

export default About;
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Container maxW="container.md" p={4}>
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading as="h2" size="lg" mb={4}>Contact</Heading>
      <Text fontSize="md">This is the contact page where you can provide your contact information.</Text>
    </Box>
  </Container>
);

export default Contact;
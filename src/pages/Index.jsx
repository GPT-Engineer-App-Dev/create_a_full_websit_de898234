import { Box, Button, Flex, Heading, Image, Link, Stack, Text, VStack, FormControl, FormLabel, Input, Textarea, Grid, GridItem, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt, FaBroom, FaClipboardList, FaCommentDots, FaUserTie } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.50");

  return (
    <VStack spacing={10}>
      {/* Navigation */}
      <Flex as="nav" w="100%" p={4} justify="space-between" align="center" bg={bgColor} color={textColor}>
        <Heading as="h1" size="lg">
          CleanItPro
        </Heading>
        <Stack as="ul" direction="row" spacing={4}>
          <Link as="li" href="#about-us">
            About Us
          </Link>
          <Link as="li" href="#services">
            Services
          </Link>
          <Link as="li" href="#request-quote">
            Request a Quote
          </Link>
          <Link as="li" href="#contact-us">
            Contact Us
          </Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Flex w="100%" p={10} align="center" direction={{ base: "column", md: "row" }} justify="space-around" bg={bgColor}>
        <VStack align="start" spacing={5}>
          <Heading as="h2" size="2xl">
            Professional Cleaning Services
          </Heading>
          <Text fontSize="xl">High quality, reliable cleaning services for your office, building, or facility. We mean clean!</Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2V8ZW58MHx8fHwxNzEyNTQyNDc1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cleaning Service" boxSize="300px" objectFit="cover" />
      </Flex>

      {/* About Us Section */}
      <Flex id="about-us" direction="column" align="center" w="100%" p={10} bg={bgColor} color={textColor}>
        <VStack spacing={5}>
          <Icon as={FaUserTie} w={10} h={10} />
          <Heading as="h3" size="lg">
            About Us
          </Heading>
          <Text textAlign="center" maxW="600px">
            CleanItPro has been delivering top-notch commercial cleaning services since 2005. Our team of professionals is dedicated to providing a clean and healthy environment for your business.
          </Text>
        </VStack>
      </Flex>

      {/* Services Section */}
      <Flex id="services" w="100%" p={10} direction="column" align="center" bg={bgColor} color={textColor}>
        <Heading as="h3" size="lg" mb={5}>
          Our Services
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ServiceCard icon={FaBroom} title="Daily Cleaning" description="Routine cleaning services to keep your space sparkling every day." />
          <ServiceCard icon={FaClipboardList} title="Deep Cleaning" description="Thorough cleaning that covers every nook and cranny of your facility." />
          <ServiceCard icon={FaCommentDots} title="Custom Solutions" description="Bespoke cleaning plans tailored to meet your specific needs." />
        </Grid>
      </Flex>

      {/* Request a Quote Section */}
      <Flex id="request-quote" direction="column" align="center" w="100%" p={10} bg={bgColor} color={textColor}>
        <Heading as="h3" size="lg" mb={5}>
          Request a Quote
        </Heading>
        <Box maxW="600px" w="100%">
          <FormControl id="email" mb={3} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="phone" mb={3} isRequired>
            <FormLabel>Phone number</FormLabel>
            <Input type="tel" />
          </FormControl>
          <FormControl id="details" mb={6} isRequired>
            <FormLabel>Details</FormLabel>
            <Textarea placeholder="Describe your cleaning needs" />
          </FormControl>
          <Button colorScheme="blue" w="100%">
            Submit Request
          </Button>
        </Box>
      </Flex>

      {/* Contact Us Section */}
      <Flex id="contact-us" direction="column" align="center" w="100%" p={10} bg={bgColor} color={textColor}>
        <Heading as="h3" size="lg" mb={5}>
          Contact Us
        </Heading>
        <VStack spacing={3}>
          <Flex align="center">
            <Icon as={FaPhoneAlt} mr={2} />
            <Text>+1 (555) 123 4567</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaEnvelope} mr={2} />
            <Text>support@cleanitpro.com</Text>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <GridItem p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.800")} color={useColorModeValue("gray.700", "white")}>
      <Flex direction="column" align="center" justify="center" h="100%">
        <Icon as={icon} w={16} h={16} mb={4} />
        <Heading as="h4" size="md" mb={4}>
          {title}
        </Heading>
        <Text textAlign="center">{description}</Text>
      </Flex>
    </GridItem>
  );
};

export default Index;

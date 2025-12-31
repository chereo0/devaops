import { Box, Container, Heading, SimpleGrid, Text, Stack, Icon, Flex, Button, Badge, HStack } from '@chakra-ui/react';
import { FaMobileAlt, FaLaptopCode, FaRocket, FaArrowRight, FaCloud, FaPalette, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AnimatedContent, BlurText, SpotlightCard } from '../components/reactbits';

const MotionBox = motion(Box);

const ServiceCard = ({ title, text, icon, index }) => {
  return (
    <MotionBox
      bg="rgba(26, 26, 46, 0.6)"
      backdropFilter="blur(20px)"
      boxShadow="0 8px 40px rgba(0, 0, 0, 0.3)"
      rounded="3xl"
      p={{ base: 6, md: 8 }}
      position="relative"
      overflow="hidden"
      border="1px solid"
      borderColor="rgba(191, 231, 161, 0.15)"
      whileHover={{ 
        y: -10, 
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(191, 231, 161, 0.3)',
      }}
      transition={{ duration: 0.3 }}
      h="full"
    >
      {/* Service Number */}
      <Text
        position="absolute"
        top={6}
        right={6}
        fontSize={{ base: '4xl', md: '6xl' }}
        fontWeight="bold"
        color="rgba(191, 231, 161, 0.08)"
        lineHeight={1}
      >
        0{index + 1}
      </Text>

      {/* Decorative gradient */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="4px"
        bg="linear-gradient(90deg, #BFE7A1 0%, #8fca6d 100%)"
        opacity={0}
        transition="opacity 0.3s ease"
        sx={{
          '.chakra-box:hover &': {
            opacity: 1,
          },
        }}
      />

      {/* Icon Container */}
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        rounded="2xl"
        bg="linear-gradient(135deg, rgba(191, 231, 161, 0.15) 0%, rgba(143, 202, 109, 0.1) 100%)"
        border="1px solid"
        borderColor="rgba(191, 231, 161, 0.2)"
        mb={6}
        position="relative"
        zIndex={1}
      >
        {icon}
      </Flex>

      {/* Content */}
      <Stack spacing={4} position="relative" zIndex={1}>
        <Heading size="lg" color="white" fontWeight="bold">
          {title}
        </Heading>
        <Text color="gray.400" fontSize="md" lineHeight="tall">
          {text}
        </Text>
        
        {/* Features */}
        <Stack spacing={2} mt={2}>
          <HStack spacing={2}>
            <Box w={2} h={2} rounded="full" bg="brand.300" />
            <Text color="gray.500" fontSize="sm">Modern Technologies</Text>
          </HStack>
          <HStack spacing={2}>
            <Box w={2} h={2} rounded="full" bg="brand.300" />
            <Text color="gray.500" fontSize="sm">24/7 Support</Text>
          </HStack>
        </Stack>

        <Button
          variant="ghost"
          color="brand.300"
          rightIcon={<FaArrowRight />}
          alignSelf="flex-start"
          fontWeight="medium"
          size="sm"
          mt={4}
          px={0}
          _hover={{ color: 'brand.400', bg: 'transparent' }}
        >
          Explore Service
        </Button>
      </Stack>
    </MotionBox>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Icon as={FaMobileAlt} w={8} h={8} color="brand.300" />,
      title: "Mobile Apps",
      text: "Building modern, user-friendly apps for iOS and Android platforms with seamless performance and intuitive design.",
    },
    {
      icon: <Icon as={FaLaptopCode} w={8} h={8} color="brand.300" />,
      title: "Web Development",
      text: "Creating responsive and scalable web systems using the latest technologies and best practices.",
    },
    {
      icon: <Icon as={FaRocket} w={8} h={8} color="brand.300" />,
      title: "App Upgrades",
      text: "Enhancing and modernizing existing applications to meet current standards and improve performance.",
    },
    {
      icon: <Icon as={FaCloud} w={8} h={8} color="brand.300" />,
      title: "Cloud Solutions",
      text: "Deploying and managing scalable cloud infrastructure for optimal performance and reliability.",
    },
    {
      icon: <Icon as={FaPalette} w={8} h={8} color="brand.300" />,
      title: "UI/UX Design",
      text: "Crafting beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
    },
    {
      icon: <Icon as={FaShieldAlt} w={8} h={8} color="brand.300" />,
      title: "Security",
      text: "Implementing robust security measures to protect your applications and user data.",
    },
  ];

  return (
    <Box 
      id="services" 
      py={{ base: 16, md: 24 }}
      bg="transparent"
      position="relative"
    >
      {/* Decorative glow */}
      <Box
        position="absolute"
        top="30%"
        right="-5%"
        w={{ base: '300px', md: '500px' }}
        h={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.06) 0%, transparent 70%)"
        filter="blur(80px)"
        display={{ base: 'none', md: 'block' }}
      />

      <Container maxW={'7xl'} px={{ base: 4, md: 8 }}>
        {/* Section Header */}
        <AnimatedContent distance={50} direction="vertical" duration={0.8}>
          <Box textAlign="center" mb={{ base: 10, md: 16 }}>
            <Text 
              color="brand.300" 
              fontWeight="semibold" 
              fontSize="sm" 
              textTransform="uppercase" 
              letterSpacing="widest"
              mb={3}
            >
              Our Services
            </Text>
            <Heading 
              as="h2" 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="white"
              mb={4}
            >
              <BlurText 
                text="What We" 
                delay={80} 
                animateBy="words"
                style={{ display: 'inline', justifyContent: 'center' }}
              />
              <Text as="span" bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text"> Offer</Text>
            </Heading>
            <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="600px" mx="auto" px={{ base: 2, md: 0 }}>
              Comprehensive digital solutions tailored to your unique business needs
            </Text>
          </Box>
        </AnimatedContent>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
          {services.map((service, index) => (
            <AnimatedContent 
              key={index} 
              distance={80} 
              direction="vertical" 
              delay={index * 0.1}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                text={service.text}
                index={index}
              />
            </AnimatedContent>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;

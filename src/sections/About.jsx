import { Box, Container, Heading, Text, Stack, SimpleGrid, Button, Icon, Flex, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDesktop, FaCheckCircle, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { AnimatedContent, BlurText, CountUp, SpotlightCard } from '../components/reactbits';

const MotionBox = motion(Box);

const AboutCard = ({ title, description, icon, hasLearnMore }) => {
  return (
    <MotionBox
      bg="rgba(26, 26, 46, 0.6)"
      backdropFilter="blur(20px)"
      rounded="3xl"
      boxShadow="0 8px 40px rgba(0, 0, 0, 0.3)"
      p={{ base: 6, md: 8 }}
      border="1px solid"
      borderColor="rgba(191, 231, 161, 0.15)"
      position="relative"
      overflow="hidden"
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}
      transition={{ duration: 0.3 }}
      h="full"
    >
      {/* Decorative gradient background */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w="200px"
        h="200px"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.1) 0%, transparent 70%)"
        borderBottomLeftRadius="full"
      />

      {/* Icon */}
      <Flex
        w={14}
        h={14}
        align="center"
        justify="center"
        rounded="2xl"
        bg="linear-gradient(135deg, rgba(191, 231, 161, 0.2) 0%, rgba(143, 202, 109, 0.1) 100%)"
        border="1px solid"
        borderColor="rgba(191, 231, 161, 0.2)"
        mb={6}
      >
        <Icon as={icon} w={7} h={7} color="brand.300" />
      </Flex>
      
      <Stack spacing={4} position="relative" zIndex={1}>
        <Heading size="md" color="white" fontWeight="bold">
          {title}
        </Heading>
        <Text color="gray.400" lineHeight="tall">
          {description}
        </Text>
        {hasLearnMore && (
          <Button
            variant="link"
            color="brand.300"
            rightIcon={<FaArrowRight />}
            alignSelf="flex-start"
            fontWeight="medium"
            _hover={{ color: 'brand.400' }}
          >
            Learn More
          </Button>
        )}
      </Stack>
    </MotionBox>
  );
};

const StatCard = ({ number, label }) => (
  <VStack spacing={2} align="center">
    <Text 
      fontSize={{ base: '3xl', md: '4xl' }}
      fontWeight="bold" 
      bgGradient="linear(to-r, brand.300, brand.500)"
      bgClip="text"
    >
      <CountUp to={parseInt(number)} duration={2.5} />{number.includes('+') ? '+' : number.includes('/') ? '/7' : ''}
    </Text>
    <Text color="gray.500" fontSize={{ base: 'xs', md: 'sm' }}>{label}</Text>
  </VStack>
);

const About = () => {
  return (
    <Box 
      id="about" 
      py={{ base: 16, md: 24 }}
      bg="transparent"
      position="relative"
    >
      {/* Decorative glow */}
      <Box
        position="absolute"
        top="50%"
        left="-10%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.05) 0%, transparent 70%)"
        filter="blur(60px)"
        transform="translateY(-50%)"
      />
      
      <Container maxW={'7xl'} position="relative" zIndex={1} px={{ base: 4, md: 8 }}>
        <Stack spacing={{ base: 10, md: 16 }}>
          {/* Section Header */}
          <AnimatedContent distance={50} direction="vertical" duration={0.8}>
            <Box textAlign="center">
              <Text 
                color="brand.300" 
                fontWeight="semibold" 
                fontSize="sm" 
                textTransform="uppercase" 
                letterSpacing="widest"
                mb={3}
              >
                About Us
              </Text>
              <Heading 
                as="h2" 
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                color="white"
                mb={4}
                maxW="700px"
                mx="auto"
              >
                <BlurText 
                  text="We Build Digital" 
                  delay={80} 
                  animateBy="words"
                  style={{ display: 'inline', justifyContent: 'center' }}
                />
                <Text as="span" bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text"> Experiences</Text>
              </Heading>
              <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="600px" mx="auto" px={{ base: 2, md: 0 }}>
                Transform your business with our cutting-edge development solutions that drive growth and innovation.
              </Text>
            </Box>
          </AnimatedContent>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <AnimatedContent distance={80} direction="vertical" delay={0}>
              <AboutCard
                icon={FaLightbulb}
                title="Innovative Approach"
                description="We leverage the latest technologies and creative thinking to deliver solutions that stand out and drive results."
                hasLearnMore={false}
              />
            </AnimatedContent>
            
            <AnimatedContent distance={80} direction="vertical" delay={0.15}>
              <AboutCard
                icon={FaUsers}
                title="Client-Focused"
                description="Your success is our priority. We work closely with you to understand your needs and exceed your expectations."
                hasLearnMore={true}
              />
            </AnimatedContent>

            <AnimatedContent distance={80} direction="vertical" delay={0.3}>
              <AboutCard
                icon={FaRocket}
                title="Rapid Delivery"
                description="Agile methodologies and efficient processes ensure your projects are delivered on time without compromising quality."
                hasLearnMore={false}
              />
            </AnimatedContent>
          </SimpleGrid>

          {/* Stats Row */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              bg="rgba(26, 26, 46, 0.4)"
              backdropFilter="blur(20px)"
              rounded="3xl"
              p={10}
              border="1px solid"
              borderColor="rgba(191, 231, 161, 0.1)"
            >
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                <StatCard number="150+" label="Projects Completed" />
                <StatCard number="50+" label="Happy Clients" />
                <StatCard number="5+" label="Years Experience" />
                <StatCard number="24/7" label="Support Available" />
              </SimpleGrid>
            </Box>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;

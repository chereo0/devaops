import { Container, Stack, Flex, Box, Heading, Text, Button, Icon, HStack, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobileAlt, FaCog, FaPlay, FaStar } from 'react-icons/fa';
import { BlurText, GradientText, ShinyText, Magnet, CountUp } from '../components/reactbits';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Hero = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="transparent"
      minH="100vh"
    >
      {/* Animated grid background */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="linear-gradient(rgba(191, 231, 161, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(191, 231, 161, 0.03) 1px, transparent 1px)"
        backgroundSize="60px 60px"
        opacity={0.5}
      />

      {/* Floating orbs */}
      <MotionBox
        position="absolute"
        top="15%"
        left="8%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.15) 0%, transparent 70%)"
        filter="blur(40px)"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        top="50%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(143, 202, 109, 0.1) 0%, transparent 70%)"
        filter="blur(60px)"
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        left="15%"
        w="150px"
        h="150px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.12) 0%, transparent 70%)"
        filter="blur(30px)"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative floating elements - hidden on mobile */}
      <MotionBox
        position="absolute"
        top="25%"
        left="5%"
        w={{ base: '40px', md: '80px' }}
        h={{ base: '40px', md: '80px' }}
        borderRadius="2xl"
        border="1px solid"
        borderColor="rgba(191, 231, 161, 0.2)"
        bg="rgba(191, 231, 161, 0.05)"
        backdropFilter="blur(10px)"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        display={{ base: 'none', md: 'block' }}
      />
      <MotionBox
        position="absolute"
        top="60%"
        left="12%"
        w={{ base: '30px', md: '50px' }}
        h={{ base: '30px', md: '50px' }}
        borderRadius="xl"
        bg="linear-gradient(135deg, rgba(191, 231, 161, 0.2) 0%, rgba(143, 202, 109, 0.1) 100%)"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        display={{ base: 'none', md: 'block' }}
      />
      <MotionBox
        position="absolute"
        bottom="25%"
        right="8%"
        w={{ base: '40px', md: '60px' }}
        h={{ base: '40px', md: '60px' }}
        borderRadius="full"
        border="1px solid"
        borderColor="rgba(191, 231, 161, 0.3)"
        bg="rgba(191, 231, 161, 0.08)"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        display={{ base: 'none', md: 'block' }}
      />
      
      <Container maxW={'7xl'} pt={{ base: 24, md: 36 }} pb={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        <Stack
          align={'center'}
          spacing={{ base: 6, md: 10 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          {/* Left Content */}
          <Stack flex={1} spacing={{ base: 5, md: 8 }} maxW="650px" align={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'left' }}>
            {/* Badge */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HStack>
                <Badge
                  px={4}
                  py={2}
                  bg="rgba(191, 231, 161, 0.1)"
                  color="brand.300"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="rgba(191, 231, 161, 0.3)"
                  fontSize="sm"
                  fontWeight="medium"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Icon as={FaStar} w={3} h={3} />
                  Trusted by 100+ companies
                </Badge>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={700}
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                letterSpacing="-0.02em"
              >
                <BlurText 
                  text="Innovative Solutions" 
                  delay={100} 
                  animateBy="words"
                  direction="top"
                  style={{ color: 'white', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}
                />
                <GradientText 
                  colors={["#BFE7A1", "#8fca6d", "#BFE7A1"]}
                  animationSpeed={3}
                  showBorder={false}
                >
                  <Text 
                    as="span" 
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
                    fontWeight={700}
                  >
                    for Web & Mobile
                  </Text>
                </GradientText>
              </Heading>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text color="gray.400" fontSize={{ base: 'lg', md: 'xl' }} maxW="lg" lineHeight="tall">
                We develop cutting-edge mobile apps, modern web systems, and upgrade legacy applications with expertise and precision.
              </Text>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <HStack spacing={{ base: 3, md: 4 }} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
                <Magnet padding={80} magnetStrength={3}>
                  <Button
                    as="a"
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
                    color="gray.900"
                    size="lg"
                    rounded="full"
                    px={8}
                    py={7}
                    fontSize="md"
                    fontWeight="semibold"
                    rightIcon={<FaArrowRight />}
                    boxShadow="0 4px 30px rgba(191, 231, 161, 0.3)"
                    _hover={{ 
                      bg: 'linear-gradient(135deg, #a8d98a 0%, #6db54d 100%)',
                      boxShadow: '0 8px 40px rgba(191, 231, 161, 0.4)',
                      textDecoration: 'none',
                    }}
                  >
                    Get Started
                  </Button>
                </Magnet>
                <Magnet padding={80} magnetStrength={3}>
                  <Button
                    as="a"
                    href="#projects"
                    variant="outline"
                    borderColor="rgba(191, 231, 161, 0.3)"
                    color="brand.300"
                    size="lg"
                    rounded="full"
                    px={8}
                  py={7}
                  fontSize="md"
                  leftIcon={<FaPlay />}
                  _hover={{ 
                    bg: 'rgba(191, 231, 161, 0.1)',
                    borderColor: 'brand.300',
                    textDecoration: 'none',
                  }}
                >
                  Watch Demo
                </Button>
                </Magnet>
              </HStack>
            </MotionBox>

            {/* Stats */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HStack spacing={{ base: 6, md: 10 }} mt={4} flexWrap="wrap" justify={{ base: 'center', lg: 'flex-start' }}>
                <Box textAlign={{ base: 'center', lg: 'left' }}>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="white">
                    <CountUp to={150} duration={2.5} />+
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.500">Projects Delivered</Text>
                </Box>
                <Box textAlign={{ base: 'center', lg: 'left' }}>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="white">
                    <CountUp to={98} duration={2} />%
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.500">Client Satisfaction</Text>
                </Box>
                <Box textAlign={{ base: 'center', lg: 'left' }}>
                  <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="white">
                    <CountUp to={5} duration={1.5} />+
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.500">Years Experience</Text>
                </Box>
              </HStack>
            </MotionBox>
          </Stack>

          {/* Right - Illustration */}
          <Flex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
            display={{ base: 'none', lg: 'flex' }}
          >
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              position="relative"
            >
              {/* Main Monitor/Screen Illustration */}
              <Box
                bg="rgba(26, 26, 46, 0.8)"
                backdropFilter="blur(20px)"
                rounded="3xl"
                boxShadow="0 25px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                p={6}
                w={{ base: '320px', md: '420px' }}
                h={{ base: '220px', md: '300px' }}
                position="relative"
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.2)"
              >
                {/* Screen Content */}
                <Box
                  bg="linear-gradient(135deg, rgba(191, 231, 161, 0.15) 0%, rgba(143, 202, 109, 0.1) 100%)"
                  rounded="2xl"
                  h="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="rgba(191, 231, 161, 0.15)"
                >
                  {/* Code symbols */}
                  <Icon as={FaCode} w={20} h={20} color="brand.300" opacity={0.8} />
                  
                  {/* Decorative lines */}
                  <Box position="absolute" top={4} left={4} right={4}>
                    <Box h={2} bg="brand.300" opacity={0.3} rounded="full" mb={2} w="60%" />
                    <Box h={2} bg="brand.300" opacity={0.2} rounded="full" mb={2} w="80%" />
                    <Box h={2} bg="brand.300" opacity={0.25} rounded="full" w="40%" />
                  </Box>
                </Box>
                
                {/* Monitor Stand */}
                <Box
                  position="absolute"
                  bottom="-35px"
                  left="50%"
                  transform="translateX(-50%)"
                  w="80px"
                  h="35px"
                  bg="linear-gradient(180deg, rgba(191, 231, 161, 0.2) 0%, rgba(143, 202, 109, 0.1) 100%)"
                  borderRadius="0 0 20px 20px"
                  border="1px solid"
                  borderTop="none"
                  borderColor="rgba(191, 231, 161, 0.2)"
                />
              </Box>

              {/* Floating Mobile Device */}
              <MotionBox
                position="absolute"
                top="-30px"
                right="-40px"
                bg="rgba(26, 26, 46, 0.9)"
                backdropFilter="blur(20px)"
                rounded="2xl"
                boxShadow="0 15px 40px rgba(0, 0, 0, 0.4)"
                p={3}
                w="90px"
                h="130px"
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.2)"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Box
                  bg="rgba(191, 231, 161, 0.1)"
                  rounded="xl"
                  h="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="1px solid"
                  borderColor="rgba(191, 231, 161, 0.15)"
                >
                  <Icon as={FaMobileAlt} w={7} h={7} color="brand.300" />
                </Box>
              </MotionBox>

              {/* Floating Gear/Settings */}
              <MotionBox
                position="absolute"
                bottom="30px"
                left="-50px"
                bg="linear-gradient(135deg, rgba(191, 231, 161, 0.2) 0%, rgba(143, 202, 109, 0.15) 100%)"
                rounded="full"
                p={4}
                boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.2)"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Icon as={FaCog} w={10} h={10} color="brand.300" />
              </MotionBox>
            </MotionBox>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;

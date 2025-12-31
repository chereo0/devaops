import { Box, Container, Flex, HStack, Link, Text, VStack, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaCode, FaHeart, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const FooterLink = ({ children, href }) => (
  <Link 
    href={href} 
    color="gray.400" 
    fontSize="sm"
    _hover={{ color: 'brand.300', textDecoration: 'none' }}
    transition="color 0.2s ease"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon, href, label }) => (
  <Link
    href={href}
    aria-label={label}
    p={2}
    rounded="lg"
    color="gray.500"
    _hover={{ 
      color: 'brand.300',
      bg: 'rgba(191, 231, 161, 0.1)',
    }}
    transition="all 0.2s ease"
  >
    <Icon as={icon} w={5} h={5} />
  </Link>
);

const Footer = () => {
  return (
    <Box
      bg="rgba(10, 10, 10, 0.95)"
      borderTop="1px solid"
      borderColor="rgba(191, 231, 161, 0.1)"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 8, md: 12 }} mb={{ base: 8, md: 12 }}>
          {/* Brand Column */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4} textAlign={{ base: 'center', sm: 'left' }}>
            <HStack spacing={2}>
              <Flex
                w={10}
                h={10}
                align="center"
                justify="center"
                rounded="xl"
                bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
              >
                <Icon as={FaCode} w={5} h={5} color="gray.900" />
              </Flex>
              <Text fontSize="xl" fontWeight="bold" bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text">
                devaops
              </Text>
            </HStack>
            <Text color="gray.500" fontSize="sm" maxW="250px">
              Building innovative digital solutions that drive business growth and user engagement.
            </Text>
            <HStack spacing={2} pt={2} justify={{ base: 'center', sm: 'flex-start' }}>
              <SocialIcon icon={FaInstagram} label="Instagram" href="https://www.instagram.com/devaops/" />
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Text color="white" fontWeight="semibold" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Quick Links
            </Text>
            <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Text color="white" fontWeight="semibold" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Services
            </Text>
            <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
              <FooterLink href="#">Mobile Development</FooterLink>
              <FooterLink href="#">Web Development</FooterLink>
              <FooterLink href="#">UI/UX Design</FooterLink>
              <FooterLink href="#">Cloud Solutions</FooterLink>
              <FooterLink href="#">App Upgrades</FooterLink>
            </VStack>
          </VStack>

          {/* Contact */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Text color="white" fontWeight="semibold" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Contact
            </Text>
            <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
              <Text color="gray.400" fontSize="sm">info@devaops.com</Text>
              <Text color="gray.400" fontSize="sm">+123-456-7890</Text>
              <Text color="gray.400" fontSize="sm">San Francisco, CA</Text>
            </VStack>
          </VStack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Box
          pt={{ base: 6, md: 8 }}
          borderTop="1px solid"
          borderColor="rgba(191, 231, 161, 0.1)"
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <HStack spacing={1} fontSize={{ base: 'xs', md: 'sm' }} color="gray.500" flexWrap="wrap" justify="center">
              <Text>© {new Date().getFullYear()} DevaOps. Made with</Text>
              <Icon as={FaHeart} w={3} h={3} color="brand.300" />
              <Text>All rights reserved.</Text>
            </HStack>

            <HStack spacing={6} fontSize="sm">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

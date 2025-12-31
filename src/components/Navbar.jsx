import { Box, Flex, Link, Button, Container, HStack, Icon, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaBars } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const NavLink = ({ href, children }) => (
  <Link 
    href={href} 
    fontWeight="medium"
    color="gray.300"
    position="relative"
    py={2}
    _hover={{ textDecoration: 'none', color: 'brand.300' }}
    _after={{
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      bg: 'brand.300',
      transition: 'width 0.3s ease',
    }}
    sx={{
      '&:hover::after': {
        width: '100%',
      },
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionBox
      bg="rgba(10, 10, 10, 0.8)"
      backdropFilter="blur(20px)"
      px={4}
      position="fixed"
      w="100%"
      zIndex={100}
      borderBottom="1px solid"
      borderColor="rgba(191, 231, 161, 0.1)"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.xl">
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo */}
          <MotionFlex
            as={motion.div}
            whileHover={{ scale: 1.05 }}
            alignItems="center"
            gap={3}
          >
            <Flex
              w={10}
              h={10}
              align="center"
              justify="center"
              rounded="xl"
              bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
              boxShadow="0 4px 20px rgba(191, 231, 161, 0.3)"
            >
              <Icon as={FaCode} w={5} h={5} color="gray.900" />
            </Flex>
            <Text fontSize="xl" fontWeight="bold" bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text">
              devaops
            </Text>
          </MotionFlex>

          {/* Navigation Links - Desktop */}
          <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </HStack>

          {/* Mobile Menu Button */}
          <HStack spacing={4}>
            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<FaBars />}
              variant="ghost"
              color="brand.300"
              onClick={onOpen}
              aria-label="Open menu"
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="rgba(0, 0, 0, 0.8)" backdropFilter="blur(10px)" />
        <DrawerContent bg="rgba(26, 26, 46, 0.95)" borderLeft="1px solid" borderColor="rgba(191, 231, 161, 0.2)">
          <DrawerCloseButton color="brand.300" />
          <DrawerHeader borderBottomWidth="1px" borderColor="rgba(191, 231, 161, 0.1)">
            <Text bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text" fontWeight="bold">
              Menu
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={8}>
              <Link href="#" color="gray.300" fontSize="lg" onClick={onClose} _hover={{ color: 'brand.300' }}>Home</Link>
              <Link href="#about" color="gray.300" fontSize="lg" onClick={onClose} _hover={{ color: 'brand.300' }}>About</Link>
              <Link href="#services" color="gray.300" fontSize="lg" onClick={onClose} _hover={{ color: 'brand.300' }}>Services</Link>
              <Link href="#projects" color="gray.300" fontSize="lg" onClick={onClose} _hover={{ color: 'brand.300' }}>Projects</Link>
              <Link href="#contact" color="gray.300" fontSize="lg" onClick={onClose} _hover={{ color: 'brand.300' }}>Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Navbar;

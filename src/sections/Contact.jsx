import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { AnimatedContent, BlurText, Magnet, ClickSpark } from '../components/reactbits';

const MotionBox = motion(Box);

const ContactInfo = ({ icon, label, value }) => (
  <HStack spacing={4} align="center">
    <Flex
      w={12}
      h={12}
      align="center"
      justify="center"
      rounded="xl"
      bg="linear-gradient(135deg, rgba(191, 231, 161, 0.15) 0%, rgba(143, 202, 109, 0.1) 100%)"
      border="1px solid"
      borderColor="rgba(191, 231, 161, 0.2)"
    >
      <Icon as={icon} w={5} h={5} color="brand.300" />
    </Flex>
    <Box>
      <Text color="gray.500" fontSize="sm">{label}</Text>
      <Text color="white" fontSize="md" fontWeight="medium">{value}</Text>
    </Box>
  </HStack>
);

const SocialButton = ({ icon, label, href }) => (
  <IconButton
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    icon={<Icon as={icon} w={5} h={5} />}
    bg="rgba(191, 231, 161, 0.1)"
    color="brand.300"
    rounded="xl"
    size="lg"
    border="1px solid"
    borderColor="rgba(191, 231, 161, 0.2)"
    _hover={{ 
      bg: 'rgba(191, 231, 161, 0.2)',
      borderColor: 'brand.300',
      transform: 'scale(1.1) translateY(-2px)',
    }}
    transition="all 0.2s"
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in your name, email, and message.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject || 'No subject')}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    
    // Lebanon phone number format: +961 78 974 626
    const phoneNumber = '96178974626';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Your message is ready to send via WhatsApp!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box 
      id="contact" 
      py={{ base: 16, md: 24 }}
      bg="transparent"
      position="relative"
    >
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w={{ base: '150px', md: '300px' }}
        h={{ base: '150px', md: '300px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.08) 0%, transparent 70%)"
        filter="blur(60px)"
        display={{ base: 'none', md: 'block' }}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="3%"
        w={{ base: '100px', md: '200px' }}
        h={{ base: '100px', md: '200px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(143, 202, 109, 0.06) 0%, transparent 70%)"
        filter="blur(40px)"
        display={{ base: 'none', md: 'block' }}
      />

      <Container maxW="7xl" position="relative" zIndex={1} px={{ base: 4, md: 8 }}>
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
              Get In Touch
            </Text>
            <Heading 
              as="h2" 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="white"
              mb={4}
            >
              <BlurText 
                text="Let's Work" 
                delay={80} 
                animateBy="words"
                style={{ display: 'inline', justifyContent: 'center' }}
              />
              <Text as="span" bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text"> Together</Text>
            </Heading>
            <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="600px" mx="auto" px={{ base: 2, md: 0 }}>
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Text>
          </Box>
        </AnimatedContent>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12 }}>
          {/* Contact Form */}
          <AnimatedContent distance={60} direction="horizontal" reverse={true}>
            <ClickSpark sparkColor="#BFE7A1" sparkRadius={20} sparkCount={10}>
              <Box
                bg="rgba(26, 26, 46, 0.6)"
                backdropFilter="blur(20px)"
                rounded="3xl"
                p={{ base: 6, md: 8 }}
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.15)"
                h="full"
              >
                <VStack spacing={{ base: 4, md: 6 }}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                    <FormControl>
                      <FormLabel color="gray.400" fontSize="sm">Full Name</FormLabel>
                      <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="rgba(191, 231, 161, 0.15)"
                      rounded="xl"
                      color="white"
                      _placeholder={{ color: 'gray.600' }}
                      _hover={{ borderColor: 'rgba(191, 231, 161, 0.3)' }}
                      _focus={{ 
                        borderColor: 'brand.300', 
                        boxShadow: '0 0 0 1px #BFE7A1',
                        bg: 'rgba(0, 0, 0, 0.3)',
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.400" fontSize="sm">Email Address</FormLabel>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="john@example.com"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="rgba(191, 231, 161, 0.15)"
                      rounded="xl"
                      color="white"
                      _placeholder={{ color: 'gray.600' }}
                      _hover={{ borderColor: 'rgba(191, 231, 161, 0.3)' }}
                      _focus={{ 
                        borderColor: 'brand.300', 
                        boxShadow: '0 0 0 1px #BFE7A1',
                        bg: 'rgba(0, 0, 0, 0.3)',
                      }}
                    />
                  </FormControl>
                </SimpleGrid>
                <FormControl>
                  <FormLabel color="gray.400" fontSize="sm">Subject</FormLabel>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    bg="rgba(0, 0, 0, 0.2)"
                    border="1px solid"
                    borderColor="rgba(191, 231, 161, 0.15)"
                    rounded="xl"
                    color="white"
                    _placeholder={{ color: 'gray.600' }}
                    _hover={{ borderColor: 'rgba(191, 231, 161, 0.3)' }}
                    _focus={{ 
                      borderColor: 'brand.300', 
                      boxShadow: '0 0 0 1px #BFE7A1',
                      bg: 'rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="gray.400" fontSize="sm">Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    bg="rgba(0, 0, 0, 0.2)"
                    border="1px solid"
                    borderColor="rgba(191, 231, 161, 0.15)"
                    rounded="xl"
                    color="white"
                    _placeholder={{ color: 'gray.600' }}
                    _hover={{ borderColor: 'rgba(191, 231, 161, 0.3)' }}
                    _focus={{ 
                      borderColor: 'brand.300', 
                      boxShadow: '0 0 0 1px #BFE7A1',
                      bg: 'rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </FormControl>
                <Magnet padding={50} magnetStrength={4}>
                  <Button
                    as={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    w="full"
                    size="lg"
                    bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
                    color="gray.900"
                    rounded="xl"
                    rightIcon={<FaWhatsapp />}
                    fontWeight="semibold"
                    boxShadow="0 4px 20px rgba(191, 231, 161, 0.3)"
                    _hover={{ 
                      boxShadow: '0 8px 30px rgba(191, 231, 161, 0.4)',
                    }}
                  >
                    Send via WhatsApp
                  </Button>
                </Magnet>
              </VStack>
            </Box>
            </ClickSpark>
          </AnimatedContent>

          {/* Contact Information */}
          <AnimatedContent distance={60} direction="horizontal" delay={0.2}>
            <VStack align="stretch" spacing={8} h="full" justify="center">
              <Box>
                <Heading size="lg" color="white" mb={2}>
                  Contact Information
                </Heading>
                <Text color="gray.400">
                  Reach out to us through any of these channels
                </Text>
              </Box>

              <VStack align="flex-start" spacing={6}>
                <ContactInfo 
                  icon={MdEmail} 
                  label="Email" 
                  value="info@devaops.com" 
                />
                <ContactInfo 
                  icon={FaPhone} 
                  label="Phone" 
                  value="+961 78 974 626" 
                />
                <ContactInfo 
                  icon={FaMapMarkerAlt} 
                  label="Location" 
                  value="Tripoli, Lebanon" 
                />
              </VStack>

              <Box pt={4}>
                <Text color="gray.400" mb={4}>Follow us on social media</Text>
                <HStack spacing={4}>
                  <SocialButton icon={FaInstagram} label="Instagram" href="https://www.instagram.com/devaops/" />
                </HStack>
              </Box>

              {/* Quick response badge */}
              <Box
                bg="rgba(191, 231, 161, 0.1)"
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.2)"
                rounded="2xl"
                p={{ base: 4, md: 6 }}
                mt={4}
              >
                <HStack spacing={{ base: 3, md: 4 }}>
                  <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
                  >
                    <Icon as={FaEnvelope} w={5} h={5} color="gray.900" />
                  </Flex>
                  <Box>
                    <Text color="white" fontWeight="semibold">Quick Response</Text>
                    <Text color="gray.400" fontSize="sm">We typically respond within 24 hours</Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </AnimatedContent>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;

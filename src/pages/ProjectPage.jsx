import { Box, Container, Heading, Text, Stack, Button, Icon, Flex, Badge, HStack, VStack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { AnimatedContent, BlurText } from '../components/reactbits';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MotionBox = motion(Box);

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <Box 
        minH="100vh" 
        bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)"
      >
        <Navbar />
        <Container maxW="7xl" py={32} textAlign="center">
          <Heading color="white" mb={4}>Project Not Found</Heading>
          <Text color="gray.400" mb={8}>The project you're looking for doesn't exist.</Text>
          <Button
            as={Link}
            to="/"
            leftIcon={<FaArrowLeft />}
            bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
            color="gray.900"
            rounded="full"
            _hover={{ transform: 'scale(1.05)' }}
          >
            Back to Home
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box 
      minH="100vh" 
      bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)"
      overflowX="hidden"
    >
      {/* Ambient glow effects */}
      <Box
        position="fixed"
        top="-20%"
        left="-10%"
        width="50%"
        height="50%"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.08) 0%, transparent 70%)"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="fixed"
        bottom="-30%"
        right="-10%"
        width="60%"
        height="60%"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.05) 0%, transparent 70%)"
        pointerEvents="none"
        zIndex={0}
      />

      <Navbar />
      
      {/* Hero Section */}
      <Box pt={{ base: 24, md: 32 }} pb={{ base: 12, md: 16 }} position="relative">
        <Container maxW="7xl" px={{ base: 4, md: 8 }}>
          {/* Breadcrumb */}
          <AnimatedContent distance={30} direction="vertical">
            <HStack spacing={2} mb={8}>
              <Button
                as={Link}
                to="/#projects"
                variant="ghost"
                size="sm"
                color="gray.400"
                leftIcon={<FaArrowLeft />}
                _hover={{ color: 'brand.300' }}
              >
                Back to Projects
              </Button>
            </HStack>
          </AnimatedContent>

          {/* Project Header */}
          <AnimatedContent distance={50} direction="vertical" delay={0.1}>
            <Stack spacing={6} mb={12}>
              {/* Featured Badge */}
              {project.featured && (
                <Badge
                  w="fit-content"
                  bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
                  color="gray.900"
                  px={4}
                  py={2}
                  rounded="full"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  Featured Project
                </Badge>
              )}
              
              {/* Title */}
              <Heading 
                as="h1" 
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                color="white"
                lineHeight="shorter"
              >
                <BlurText 
                  text={project.title} 
                  delay={50} 
                  animateBy="words"
                />
              </Heading>

              {/* Tags */}
              <HStack spacing={3} flexWrap="wrap">
                {project.tags?.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    bg="rgba(191, 231, 161, 0.1)" 
                    color="brand.300" 
                    px={4} 
                    py={2} 
                    rounded="full"
                    fontSize="sm"
                    border="1px solid"
                    borderColor="rgba(191, 231, 161, 0.2)"
                  >
                    {tag}
                  </Badge>
                ))}
              </HStack>

              {/* Short Description */}
              <Text color="gray.300" fontSize={{ base: 'lg', md: 'xl' }} maxW="800px">
                {project.description}
              </Text>

              {/* Action Buttons */}
              <HStack spacing={4} pt={4}>
                {project.liveDemo && (
                  <Button
                    as="a"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
                    color="gray.900"
                    size="lg"
                    rounded="full"
                    px={8}
                    rightIcon={<FaExternalLinkAlt />}
                    _hover={{ 
                      transform: 'scale(1.05)',
                      boxShadow: '0 10px 40px rgba(191, 231, 161, 0.3)',
                    }}
                    transition="all 0.3s"
                  >
                    View Live Demo
                  </Button>
                )}
              </HStack>
            </Stack>
          </AnimatedContent>
        </Container>
      </Box>

      {/* Project Preview */}
      <Box py={{ base: 8, md: 12 }} position="relative">
        <Container maxW="7xl" px={{ base: 4, md: 8 }}>
          <AnimatedContent distance={80} direction="vertical" delay={0.2}>
            <Box
              bg="rgba(26, 26, 46, 0.6)"
              backdropFilter="blur(20px)"
              rounded="3xl"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(191, 231, 161, 0.15)"
              p={{ base: 4, md: 8 }}
            >
              {/* Browser mockup */}
              <Box
                bg="rgba(10, 10, 10, 0.8)"
                rounded="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
              >
                {/* Browser header */}
                <HStack
                  bg="rgba(26, 26, 46, 0.8)"
                  px={4}
                  py={3}
                  spacing={2}
                  borderBottom="1px solid"
                  borderColor="rgba(255, 255, 255, 0.1)"
                >
                  <Box w={3} h={3} rounded="full" bg="red.400" />
                  <Box w={3} h={3} rounded="full" bg="yellow.400" />
                  <Box w={3} h={3} rounded="full" bg="green.400" />
                  <Box
                    flex={1}
                    mx={4}
                    bg="rgba(0, 0, 0, 0.3)"
                    rounded="md"
                    px={4}
                    py={1}
                  >
                    <Text fontSize="sm" color="gray.500" isTruncated>
                      {project.liveDemo || 'https://example.com'}
                    </Text>
                  </Box>
                </HStack>
                
                {/* Preview area with iframe or placeholder */}
                <Box
                  h={{ base: '300px', md: '500px', lg: '600px' }}
                  bg="linear-gradient(135deg, rgba(191, 231, 161, 0.05) 0%, rgba(143, 202, 109, 0.02) 100%)"
                  position="relative"
                >
                  {project.liveDemo && project.allowIframe ? (
                    <iframe
                      src={project.liveDemo}
                      title={project.title}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      {/* Grid pattern background */}
                      <Box
                        position="absolute"
                        inset={0}
                        backgroundImage="linear-gradient(rgba(191, 231, 161, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(191, 231, 161, 0.03) 1px, transparent 1px)"
                        backgroundSize="40px 40px"
                      />
                      
                      <Flex
                        position="absolute"
                        inset={0}
                        align="center"
                        justify="center"
                        flexDirection="column"
                        gap={6}
                        p={8}
                        textAlign="center"
                      >
                        <Icon as={project.icon} w={{ base: 16, md: 24 }} h={{ base: 16, md: 24 }} color="brand.300" opacity={0.8} />
                        <VStack spacing={3}>
                          <Heading size={{ base: 'md', md: 'lg' }} color="white">
                            {project.title}
                          </Heading>
                          <Text color="gray.400" fontSize={{ base: 'sm', md: 'md' }} maxW="500px">
                            Click below to view the live demo in a new tab
                          </Text>
                        </VStack>
                        {project.liveDemo && (
                          <Button
                            as="a"
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
                            color="gray.900"
                            size="lg"
                            rounded="full"
                            px={10}
                            py={6}
                            fontSize="lg"
                            fontWeight="bold"
                            rightIcon={<FaExternalLinkAlt />}
                            _hover={{ 
                              transform: 'scale(1.05)',
                              boxShadow: '0 15px 50px rgba(191, 231, 161, 0.4)',
                            }}
                            transition="all 0.3s"
                          >
                            Open Live Demo
                          </Button>
                        )}
                      </Flex>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </AnimatedContent>
        </Container>
      </Box>

      {/* Project Details */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="7xl" px={{ base: 4, md: 8 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12 }}>
            {/* Left: Full Description */}
            <AnimatedContent distance={50} direction="horizontal" delay={0.3}>
              <Box>
                <Heading size="lg" color="white" mb={6}>
                  About This Project
                </Heading>
                <Text 
                  color="gray.400" 
                  fontSize="md" 
                  lineHeight="tall"
                  whiteSpace="pre-line"
                >
                  {project.fullDescription}
                </Text>
              </Box>
            </AnimatedContent>

            {/* Right: Technologies */}
            <AnimatedContent distance={50} direction="horizontal" delay={0.4}>
              <Box
                bg="rgba(26, 26, 46, 0.6)"
                backdropFilter="blur(20px)"
                rounded="2xl"
                p={{ base: 6, md: 8 }}
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.15)"
              >
                <Heading size="md" color="white" mb={6}>
                  Technologies Used
                </Heading>
                <VStack spacing={3} align="stretch">
                  {project.technologies?.map((tech, idx) => (
                    <HStack
                      key={idx}
                      bg="rgba(191, 231, 161, 0.05)"
                      rounded="lg"
                      p={3}
                      border="1px solid"
                      borderColor="rgba(191, 231, 161, 0.1)"
                      _hover={{
                        borderColor: 'rgba(191, 231, 161, 0.3)',
                        bg: 'rgba(191, 231, 161, 0.1)',
                      }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaChevronRight} color="brand.300" w={3} h={3} />
                      <Text color="gray.300">{tech}</Text>
                    </HStack>
                  ))}
                </VStack>

                {project.liveDemo && (
                  <Box mt={8}>
                    <Button
                      as="a"
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      w="full"
                      variant="outline"
                      borderColor="rgba(191, 231, 161, 0.3)"
                      color="brand.300"
                      rounded="full"
                      size="lg"
                      rightIcon={<FaExternalLinkAlt />}
                      _hover={{ 
                        bg: 'rgba(191, 231, 161, 0.1)',
                        borderColor: 'brand.300',
                      }}
                    >
                      Visit Website
                    </Button>
                  </Box>
                )}
              </Box>
            </AnimatedContent>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Other Projects */}
      <Box py={{ base: 12, md: 20 }} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.05)">
        <Container maxW="7xl" px={{ base: 4, md: 8 }}>
          <AnimatedContent distance={30} direction="vertical">
            <Heading size="lg" color="white" mb={8}>
              Other Projects
            </Heading>
          </AnimatedContent>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {projectsData
              .filter(p => p.id !== project.id)
              .map((otherProject, index) => (
                <AnimatedContent key={otherProject.id} distance={50} direction="vertical" delay={index * 0.1}>
                  <MotionBox
                    as={Link}
                    to={`/project/${otherProject.id}`}
                    display="block"
                    bg="rgba(26, 26, 46, 0.6)"
                    backdropFilter="blur(20px)"
                    rounded="2xl"
                    p={6}
                    border="1px solid"
                    borderColor="rgba(191, 231, 161, 0.15)"
                    _hover={{ 
                      textDecoration: 'none',
                      borderColor: 'rgba(191, 231, 161, 0.3)',
                    }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HStack mb={4}>
                      <Flex
                        w={12}
                        h={12}
                        align="center"
                        justify="center"
                        rounded="xl"
                        bg="rgba(191, 231, 161, 0.1)"
                      >
                        <Icon as={otherProject.icon} w={6} h={6} color="brand.300" />
                      </Flex>
                    </HStack>
                    <Heading size="sm" color="white" mb={2}>
                      {otherProject.title}
                    </Heading>
                    <Text color="gray.400" fontSize="sm" noOfLines={2}>
                      {otherProject.description}
                    </Text>
                  </MotionBox>
                </AnimatedContent>
              ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProjectPage;

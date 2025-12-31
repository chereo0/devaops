import { Box, Container, Heading, SimpleGrid, Text, Stack, Button, Icon, Flex, Badge, HStack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AnimatedContent, BlurText, SpotlightCard, Magnet } from '../components/reactbits';
import { projectsData } from '../data/projectsData';

const MotionBox = motion(Box);

const ProjectCard = ({ id, title, description, icon, tags, featured, liveDemo, image }) => {
  return (
    <MotionBox
      as={Link}
      to={`/project/${id}`}
      display="block"
      bg="rgba(26, 26, 46, 0.6)"
      backdropFilter="blur(20px)"
      boxShadow="0 8px 40px rgba(0, 0, 0, 0.3)"
      rounded="3xl"
      overflow="hidden"
      position="relative"
      border="1px solid"
      borderColor={featured ? "rgba(191, 231, 161, 0.3)" : "rgba(191, 231, 161, 0.15)"}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
      }}
      transition={{ duration: 0.3 }}
      h="full"
      _hover={{ textDecoration: 'none' }}
      cursor="pointer"
    >
      {/* Featured Badge */}
      {featured && (
        <Badge
          position="absolute"
          top={4}
          left={4}
          zIndex={2}
          bg="linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)"
          color="gray.900"
          px={3}
          py={1}
          rounded="full"
          fontSize="xs"
          fontWeight="bold"
        >
          Featured
        </Badge>
      )}

      {/* Project Image/Illustration */}
      <Box
        h="200px"
        position="relative"
        overflow="hidden"
        bg="linear-gradient(135deg, rgba(191, 231, 161, 0.1) 0%, rgba(143, 202, 109, 0.05) 100%)"
      >
        {image ? (
          <Image 
            src={image} 
            alt={title} 
            objectFit="cover" 
            w="100%" 
            h="100%" 
          />
        ) : (
          <>
            {/* Grid pattern overlay */}
            <Box
              position="absolute"
              inset={0}
              backgroundImage="linear-gradient(rgba(191, 231, 161, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(191, 231, 161, 0.05) 1px, transparent 1px)"
              backgroundSize="20px 20px"
            />
            
            {/* Floating icon */}
            <Flex
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={24}
              h={24}
              align="center"
              justify="center"
              rounded="2xl"
              bg="rgba(26, 26, 46, 0.8)"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="rgba(191, 231, 161, 0.2)"
              boxShadow="0 10px 40px rgba(0, 0, 0, 0.3)"
            >
              <Icon as={icon} w={10} h={10} color="brand.300" />
            </Flex>

            {/* Decorative orbs */}
            <Box
              position="absolute"
              top={4}
              right={4}
              w="60px"
              h="60px"
              borderRadius="full"
              bg="radial-gradient(circle, rgba(191, 231, 161, 0.15) 0%, transparent 70%)"
            />
            <Box
              position="absolute"
              bottom={4}
              left={4}
              w="40px"
              h="40px"
              borderRadius="full"
              bg="radial-gradient(circle, rgba(143, 202, 109, 0.1) 0%, transparent 70%)"
            />
          </>
        )}
      </Box>

      {/* Content */}
      <Box p={{ base: 5, md: 6 }}>
        <Stack spacing={{ base: 3, md: 4 }}>
          {/* Tags */}
          <HStack spacing={2} flexWrap="wrap">
            {tags?.map((tag, idx) => (
              <Badge 
                key={idx} 
                bg="rgba(191, 231, 161, 0.1)" 
                color="brand.300" 
                px={3} 
                py={1} 
                rounded="full"
                fontSize="xs"
                border="1px solid"
                borderColor="rgba(191, 231, 161, 0.2)"
              >
                {tag}
              </Badge>
            ))}
          </HStack>

          <Heading size="md" color="white" fontWeight="bold">
            {title}
          </Heading>
          <Text color="gray.400" fontSize="sm" lineHeight="tall">
            {description}
          </Text>

          {/* Action Buttons */}
          <HStack spacing={4} pt={2}>
            {liveDemo && (
              <Button
                as="a"
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                variant="outline"
                borderColor="rgba(191, 231, 161, 0.3)"
                color="brand.300"
                rounded="full"
                size="sm"
                rightIcon={<FaExternalLinkAlt />}
                _hover={{ 
                  bg: 'rgba(191, 231, 161, 0.1)',
                  borderColor: 'brand.300',
                }}
              >
                Live Demo
              </Button>
            )}
            <Button
              variant="ghost"
              color="gray.400"
              rounded="full"
              size="sm"
              leftIcon={<FaEye />}
              _hover={{ 
                color: 'white',
                bg: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              View Details
            </Button>
          </HStack>
        </Stack>
      </Box>
    </MotionBox>
  );
};

const Projects = () => {
  const projects = projectsData;

  return (
    <Box 
      id="projects" 
      py={{ base: 16, md: 24 }}
      bg="transparent"
      position="relative"
    >
      {/* Decorative glow */}
      <Box
        position="absolute"
        top="20%"
        left="-10%"
        w={{ base: '300px', md: '500px' }}
        h={{ base: '300px', md: '500px' }}
        borderRadius="full"
        bg="radial-gradient(circle, rgba(191, 231, 161, 0.05) 0%, transparent 70%)"
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
              Portfolio
            </Text>
            <Heading 
              as="h2" 
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="white"
              mb={4}
            >
              <BlurText 
                text="Featured" 
                delay={80} 
                animateBy="words"
                style={{ display: 'inline', justifyContent: 'center' }}
              />
              <Text as="span" bgGradient="linear(to-r, brand.300, brand.500)" bgClip="text"> Projects</Text>
            </Heading>
            <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }} maxW="600px" mx="auto" px={{ base: 2, md: 0 }}>
              Explore our latest work and see how we've helped businesses achieve their digital goals
            </Text>
          </Box>
        </AnimatedContent>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
          {projects.map((project, index) => (
            <AnimatedContent
              key={index}
              distance={80}
              direction="vertical"
              delay={index * 0.15}
            >
              <ProjectCard {...project} />
            </AnimatedContent>
          ))}
        </SimpleGrid>

        {/* View All Button */}
        <AnimatedContent distance={30} direction="vertical" delay={0.5}>
          <Box textAlign="center" mt={12}>
            <Magnet padding={100} magnetStrength={3}>
              <Button
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="outline"
                borderColor="rgba(191, 231, 161, 0.3)"
                color="brand.300"
                size="lg"
                rounded="full"
                px={8}
                rightIcon={<FaArrowRight />}
                _hover={{ 
                  bg: 'rgba(191, 231, 161, 0.1)',
                  borderColor: 'brand.300',
                }}
              >
                View All Projects
              </Button>
            </Magnet>
          </Box>
        </AnimatedContent>
      </Container>
    </Box>
  );
};

export default Projects;

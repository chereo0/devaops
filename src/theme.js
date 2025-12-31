import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        color: 'white',
      },
      '::selection': {
        bg: 'brand.400',
        color: 'gray.900',
      },
    },
  },
  colors: {
    brand: {
      50: '#f4fcf0',
      100: '#e5f7dc',
      200: '#d4f2c8',
      300: '#BFE7A1', // Main pistachio
      400: '#a8d98a',
      500: '#8fca6d',
      600: '#6db54d',
      700: '#539a38',
      800: '#3d7a29',
      900: '#2a5a1c',
    },
    dark: {
      50: '#f5f5f5',
      100: '#e0e0e0',
      200: '#1a1a2e',
      300: '#16162a',
      400: '#121226',
      500: '#0e0e22',
      600: '#0a0a1e',
      700: '#06061a',
      800: '#020216',
      900: '#000012',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
        transition: 'all 0.3s ease',
      },
      variants: {
        solid: {
          bg: 'linear-gradient(135deg, #BFE7A1 0%, #8fca6d 100%)',
          color: 'gray.900',
          boxShadow: '0 4px 20px rgba(191, 231, 161, 0.3)',
          _hover: {
            bg: 'linear-gradient(135deg, #a8d98a 0%, #6db54d 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(191, 231, 161, 0.4)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        outline: {
          borderColor: 'brand.300',
          borderWidth: '2px',
          color: 'brand.300',
          _hover: {
            bg: 'rgba(191, 231, 161, 0.1)',
            borderColor: 'brand.400',
          },
        },
        ghost: {
          color: 'brand.300',
          _hover: {
            bg: 'rgba(191, 231, 161, 0.1)',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'white',
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.300',
      },
    },
    Link: {
      baseStyle: {
        transition: 'all 0.2s ease',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
})

export default theme

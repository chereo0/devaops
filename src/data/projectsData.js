import { FaMobileAlt, FaTshirt, FaHeartbeat } from 'react-icons/fa';

export const projectsData = [
  {
    id: "multi-store",
    icon: FaMobileAlt,
    title: "Multi Store - E-Commerce Platform",
    description: "A full-featured multi-vendor e-commerce platform with real-time inventory management, seamless checkout experience, and beautiful product showcases.",
    tags: ["React", "Next.js", "Vercel", "E-Commerce"],
    featured: true,
    liveDemo: "https://multi-storev2.vercel.app/home",
    allowIframe: true,
    image: null,
    fullDescription: `Multi Store is a comprehensive e-commerce platform designed to support multiple vendors and stores in a single marketplace. 

Key Features:
• Multi-vendor support with individual store pages
• Product categorization (Food, Fashion & Accessories, Market, Flowers, Self-Care, Electronics & Gadgets)
• Real-time search functionality for products and stores
• Beautiful product cards with pricing and pre-order options
• Responsive design that works on all devices
• Clean and modern UI with gradient effects
• Shopping cart with item management
• User authentication and profile management

The platform allows store owners to showcase their products with professional product cards, while customers can browse across all stores or filter by categories.`,
    technologies: ["React", "Next.js", "Chakra UI", "Vercel", "MongoDB", "Node.js"],
  },
  {
    id: "elite-fashion",
    icon: FaTshirt,
    title: "Elite - Fashion E-Commerce",
    description: "A modern e-commerce platform for clothing and fashion items with elegant design, product filtering, and seamless shopping experience.",
    tags: ["React", "Next.js", "Vercel", "Fashion"],
    featured: true,
    liveDemo: "https://elite-iota-gray.vercel.app/",
    allowIframe: true,
    image: null,
    fullDescription: `Elite is a premium fashion e-commerce platform designed for clothing and apparel shopping.

Key Features:
• Clean and elegant UI design for fashion products
• Product categorization by clothing type
• Advanced filtering and search functionality
• Product detail pages with size and color options
• Shopping cart and wishlist features
• Responsive design optimized for all devices
• Fast loading with Next.js optimization
• Secure checkout process

The platform provides a premium shopping experience for fashion enthusiasts with its modern design and intuitive navigation.`,
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "MongoDB", "Node.js"],
  },
  {
    id: "smart-care",
    icon: FaHeartbeat,
    title: "SmartCare - Healthcare System",
    description: "A comprehensive healthcare management system for patients and healthcare providers with appointment scheduling, medical records, and health monitoring.",
    tags: ["React", "Healthcare", "Vercel", "Medical"],
    featured: true,
    liveDemo: "https://smart-care-app.vercel.app/",
    allowIframe: false,
    image: null,
    fullDescription: `SmartCare is a modern healthcare management system designed to streamline healthcare services and patient management.

Key Features:
• Patient registration and profile management
• Appointment scheduling and reminders
• Medical records and history tracking
• Health monitoring and analytics
• Doctor and clinic directory
• Prescription management
• Responsive design for all devices
• Secure data handling and privacy compliance

The platform connects patients with healthcare providers, making it easier to manage health-related activities and access medical services efficiently.`,
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "MongoDB", "Node.js"],
  },
];

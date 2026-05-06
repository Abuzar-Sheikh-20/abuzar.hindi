import { assets } from "../assets/assets";

export const projects = [
  // GoGuide
  {
    id: "goguide",
    title: "GoGuide",
    subtitle: "Uber-like system for guides & drivers",

    mainImg: assets.goguide,

    overview: {
      intro:
        "A role-based tourist platform with admin panel where users can book guides and drivers with separate dashboards and backend system handling real-time flow.",

      points: [
        "Implemented multi-role system (Admin, Guide, Driver, User)",
        "Built JWT-based authentication and protected routes",
        "Designed REST APIs for booking management",
        "Integrated Cloudinary for secure file uploads",
        "Enabled real-time updates and live cab tracking",
      ],
    },

    problems: [
      {
        title: "Payment Integration (Razorpay)",
        points: [
          "Handling secure payment flow and callbacks",
          "Managing payment success/failure states",
          "Ensuring booking confirmation after payment",
        ],
      },
      {
        title: "Google Maps & Live Tracking",
        points: [
          "Integrating maps for location selection",
          "Handling real-time driver location updates",
          "Managing route and distance calculations",
        ],
      },
      {
        title: "Role-Based System Complexity",
        points: [
          "Managing multiple user roles (Admin, Guide, Driver, User)",
          "Separate dashboards and permissions for each role",
          "Protecting routes and data access",
        ],
      },
      {
        title: "Multi-Step Signup Flow",
        points: [
          "Handling multi-step forms with validations",
          "Managing temporary data across steps",
          "Ensuring smooth user experience",
        ],
      },
      {
        title: "File Upload & Verification",
        points: [
          "Uploading documents securely",
          "Handling image storage and preview",
          "Ensuring proper validation before submission",
        ],
      },
    ],

    features: [
      "Authentication system (JWT)",
      "Role-based dashboards",
      "Booking flow APIs",
      "Driver & Guide management",
      "File upload system",
      "ADMIN PANEL",
      "Notifications & real-time updates",
      "Payment integration",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Cloudinary",
      "Razorpay",
      "Google Maps API",
      "FIrebase Cloud Messaging",
    ],
    links: [
      {
        label: "User App",
        url: "https://www.goguide.in/",
      },
      {
        label: "Guide Panel",
        url: "https://www.goguide.in/signup/goguide-guide",
      },
      {
        label: "Driver Panel",
        url: "https://www.goguide.in/signup/goguide-driver",
      },
      {
        label: "Admin Panel",
        url: "https://adminsayodhya.goguide.in/",
      },
    ],

    screenshots: [
      {
        title: "Guide Dashboard",
        desc: "Manages bookings, availability, and profile, Payments & more",
        img: assets.guide,
      },
      {
        title: "Driver Panel",
        desc: "Manages bookings, availability, and profile, Payments & more",
        img: assets.driver,
      },
    ],
  },

  // Charitify
  {
    id: "charitify",
    title: "Charitify – NGO",
    subtitle:
      "Clean UI platform for managing user messages payments and donations",

    mainImg: assets.charitify,

    overview: {
      intro:
        "A simple and clean platform designed with a focus on usability, clarity, and structured UI flow.",

      points: [
        "Designed clean and responsive UI for better user experience",
        "Focused on readability and easy navigation",
        "Built reusable components for scalable frontend",
        "Optimized layout for mobile, tablet, and desktop",
      ],
    },

    problems: [
      {
        title: "Managing Content Clarity",
        points: [
          "Ensuring users can easily read and understand content",
          "Avoiding cluttered UI and confusing layouts",
          "Maintaining visual hierarchy for better readability",
        ],
      },
      {
        title: "User Blog Handling",
        points: [
          "Displaying user blogs in a structured format",
          "Keeping UI simple while handling dynamic content",
          "Ensuring smooth interaction with minimal confusion",
        ],
      },
      {
        title: "Responsive Layout Challenges",
        points: [
          "Maintaining consistency across different screen sizes",
          "Ensuring layouts adapt smoothly on mobile devices",
          "Avoiding UI breakage on smaller screens",
        ],
      },
    ],

    features: [
      "Clean and structured UI design",
      "Responsive layout for all devices",
      "User blogs display system",
      "Reusable UI components",
      "Optimized user experience",
    ],

    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],

    link: "https://charitify-three.vercel.app/",

    links: [
      {
        label: "Live Demo",
        url: "https://charitify-three.vercel.app/",
      },
      {
        label: "About Page",
        url: "https://charitify-three.vercel.app/about",
      },
      {
        label: "Causes Page",
        url: "https://charitify-three.vercel.app/causes",
      },
      {
        label: "Contact Page",
        url: "https://charitify-three.vercel.app/contact",
      },
    ],

    screenshots: [
      {
        title: "About Section",
        desc: "Structured display of user blogs with simple interaction.",
        img: assets.charitifyAbout,
      },
      {
        title: "Charitify Causes",
        desc: "Clean and minimal layout designed for clarity and readability.",
        img: assets.charitifyCauses,
      },
    ],
  },

  // forever
  {
    id: "forever",
    title: "E-commerce Platform",
    subtitle:
      "Full-stack e-commerce system with product management, authentication, and admin dashboard",

    mainImg: assets.ecommerce,

    overview: {
      intro:
        "A full-stack e-commerce application designed to handle complete product flow from browsing to checkout, including authentication, admin panel, and backend APIs.",

      points: [
        "Built full-stack architecture (Frontend + Backend + Database)",
        "Implemented user authentication and protected routes",
        "Developed admin panel for product and order management",
        "Designed REST APIs for product, cart, and user flow",
        "Handled responsive UI and smooth shopping experience",
      ],
    },

    problems: [
      {
        title: "Authentication System",
        points: [
          "Implementing secure login and signup flow",
          "Managing user sessions and protected routes",
          "Ensuring role-based access for admin and users",
        ],
      },
      {
        title: "Admin Panel Management",
        points: [
          "Managing products, categories, and orders efficiently",
          "Handling CRUD operations for products",
          "Keeping admin updates synced with frontend UI",
        ],
      },
      {
        title: "Product Presentation & Clarity",
        points: [
          "Displaying product information in a clean and engaging way",
          "Ensuring users quickly understand product value",
          "Maintaining visual hierarchy for better UX",
        ],
      },
      {
        title: "Cart & State Management",
        points: [
          "Managing cart items dynamically",
          "Handling add/remove/update logic smoothly",
          "Keeping UI in sync with cart state",
        ],
      },
      {
        title: "User Flow Optimization",
        points: [
          "Ensuring smooth navigation from product → cart → checkout",
          "Reducing friction in the buying process",
          "Keeping interactions simple and intuitive",
        ],
      },
    ],

    features: [
      "User authentication (login/signup)",
      "Admin panel with product management",
      "Product listing and detail pages",
      "Cart system with dynamic updates",
      "Order and checkout flow",
      "Responsive UI for all devices",
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Context API / State Management",
    ],

    links: [
      {
        label: "User App",
        url: "https://ecom-ten-henna.vercel.app/",
      },
      {
        label: "Admin Panel",
        url: "https://ecom-admin-tau-jade.vercel.app/",
      },
      {
        label: "Collection Page",
        url: "https://ecom-admin-tau-jade.vercel.app/collections",
      },
      {
        label: "Cart Panel",
        url: "https://ecom-admin-tau-jade.vercel.app/cart",
      },
    ],

    screenshots: [
      {
        title: "Product Collections",
        desc: "Organized display of products with clean UI.",
        img: assets.ecommerceCollections,
      },
      {
        title: "Product Detail Page",
        desc: "Detailed view with product info and actions.",
        img: assets.ecommerceProductDetail,
      },
    ],
  },
];

import { BookOpen, Building2, BrickWall, Camera, Podcast } from "lucide-react";

export const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive, user-friendly websites and web applications that drive results. Our team specializes in modern web technologies to ensure your site is fast, secure, and scalable. We focus on delivering high-quality solutions tailored to your business needs.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "CMS Integration",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },

  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that enhance user experience. We focus on creating designs that are not only visually appealing but also highly functional and user-centric. Our goal is to ensure a seamless and engaging user journey.",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Prototyping",
      "Design Systems",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Implementing strategic digital marketing solutions to boost your online presence. Our services include SEO, content strategy, and social media marketing to help you reach your target audience effectively. We aim to drive engagement and growth for your brand.",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media Marketing",
      "Analytics & Reporting",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    title: "Booklet Designs",
    description:
      "Crafting visually appealing and informative booklets that effectively communicate your message. We offer custom layouts and high-quality printing to ensure your booklets stand out. Our designs are tailored to meet your specific needs.",
    features: [
      "Custom Layouts",
      "High-Quality Printing",
      "Creative Illustrations",
    ],
    icon: <BookOpen />,
  },
  {
    title: "Corporate Profile",
    description:
      "Creating a strong and consistent brand identity that resonates with your audience. Our corporate profile services include brand strategy, logo design, and comprehensive brand guidelines. We help you build a professional and cohesive brand image.",
    features: ["Brand Strategy", "Logo Design", "Brand Guidelines"],
    icon: <Building2 />,
  },
  {
    title: "Graphic Design",
    description:
      "Delivering visually compelling designs that effectively communicate your brand message. Our graphic design services cover everything from logos to marketing materials and infographics. We aim to create designs that leave a lasting impression.",
    features: [
      "Logo Design",
      "Marketing Materials",
      "Illustrations",
      "Infographics",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 20l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
  },
  {
    title: "Murals",
    description:
      "Transforming spaces with large-scale, visually stunning murals that captivate and inspire. We offer custom designs and professional installation for both indoor and outdoor murals. Our murals are designed to make a bold statement.",
    features: [
      "Custom Designs",
      "Indoor & Outdoor",
      "Professional Installation",
    ],
    icon: <BrickWall />,
  },
  {
    title: "Photography",
    description:
      "Capturing moments with professional photography services that tell your story. Our services include event photography, product photography, and portrait photography, along with expert photo editing. We aim to deliver high-quality images that capture the essence of your moments.",
    features: [
      "Event Photography",
      "Product Photography",
      "Portrait Photography",
      "Photo Editing",
    ],
    icon: <Camera />,
  },
  {
    title: "Branding",
    description:
      "Creating a strong, cohesive brand identity that resonates with your audience. Our branding services include logo design, brand strategy, visual identity, and comprehensive brand guidelines. We help you build a brand that stands out.",
    features: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
    ],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 20l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
  },
  {
    title: "Social Media",
    description:
      "Enhancing your online presence with strategic social media management and content creation. We help you create engaging content, manage your accounts, and run effective ad campaigns. Our goal is to boost your brand's visibility and engagement.",
    features: [
      "Content Creation",
      "Account Management",
      "Analytics & Reporting",
      "Ad Campaigns",
    ],
    icon: <Podcast />,
  },
];

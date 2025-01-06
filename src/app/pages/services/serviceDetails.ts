import { services } from "../../components/home/servicesData";

export const serviceDetails = services.map((service) => ({
  ...service,
  process:
    service.title === "Publishing Services"
      ? [
          {
            title: "Manuscript Assessment",
            description:
              "Comprehensive evaluation of your manuscript, including content analysis, market potential, and target audience identification.",
          },
          {
            title: "Editorial Development",
            description:
              "Professional editing services including developmental editing, copyediting, and proofreading to polish your content.",
          },
          {
            title: "Design & Formatting",
            description:
              "Custom book design, cover creation, and professional formatting for both digital and print publications.",
          },
          {
            title: "Publication & Distribution",
            description:
              "Multi-platform publishing setup, ISBN registration, and distribution channel management.",
          },
          {
            title: "Marketing & Promotion",
            description:
              "Strategic marketing campaigns, author platform development, and promotional content creation.",
          },
          {
            title: "Analytics & Optimization",
            description:
              "Sales tracking, performance analytics, and continuous optimization of marketing strategies.",
          },
        ]
      : [
          {
            title: "Discovery",
            description:
              "Understanding your specific needs and objectives through detailed consultation",
          },
          {
            title: "Strategy",
            description:
              "Developing a comprehensive plan tailored to your goals",
          },
          {
            title: "Implementation",
            description: "Executing the strategy with precision and expertise",
          },
          {
            title: "Review",
            description: "Regular monitoring and optimization for best results",
          },
        ],
  caseStudies:
    service.title === "Publishing Services"
      ? [
          {
            title: "Bestseller Launch Success",
            description:
              "How we helped an independent author achieve bestseller status",
            metrics: [
              "100,000+ copies sold",
              "Featured in top 3 bookstores",
              "5x ROI on marketing spend",
            ],
          },
          {
            title: "Digital Publishing Transformation",
            description:
              "Modernizing a traditional publisher's digital presence",
            metrics: [
              "300% increase in digital sales",
              "50% reduction in production time",
              "Expanded to 10 new markets",
            ],
          },
        ]
      : [
          {
            title: "Client Success Story",
            description: "How we helped achieve significant results",
            metrics: [
              "50% increase in engagement",
              "30% cost reduction",
              "2x ROI",
            ],
          },
        ],
  pricing:
    service.title === "Publishing Services"
      ? {
          starter: {
            name: "Essential Publishing",
            features: [
              "Manuscript Assessment",
              "Basic Editorial Review",
              "Standard Cover Design",
              "Digital Publishing Setup",
              "Basic Marketing Package",
            ],
          },
          professional: {
            name: "Professional Publishing",
            features: [
              "Full Editorial Services",
              "Custom Cover Design",
              "Print & Digital Publishing",
              "Distribution Setup",
              "Advanced Marketing Package",
              "Author Website Setup",
            ],
          },
          enterprise: {
            name: "Premium Publishing",
            features: [
              "Complete Publishing Suite",
              "Premium Design Package",
              "Global Distribution",
              "Comprehensive Marketing",
              "Audiobook Production",
              "Author Platform Development",
              "Dedicated Project Manager",
            ],
          },
        }
      : {
          starter: {
            name: "Basic",
            features: ["Core features", "Basic support", "Monthly reports"],
          },
          professional: {
            name: "Professional",
            features: [
              "Advanced features",
              "Priority support",
              "Weekly reports",
            ],
          },
          enterprise: {
            name: "Enterprise",
            features: ["Custom solutions", "24/7 support", "Daily reports"],
          },
        },
  additionalInfo:
    service.title === "Publishing Services"
      ? {
          formats: [
            "Hardcover Books",
            "Paperbacks",
            "eBooks",
            "Audiobooks",
            "Digital Magazines",
          ],
          platforms: [
            "Amazon KDP",
            "Barnes & Noble Press",
            "Apple Books",
            "Google Play Books",
            "Kobo",
          ],
          marketingServices: [
            "Social Media Marketing",
            "Email Marketing",
            "Press Releases",
            "Book Launch Events",
            "Author Interviews",
          ],
        }
      : null,
}));

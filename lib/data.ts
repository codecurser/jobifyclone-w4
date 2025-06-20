export interface Job {
  id: string
  title: string
  company: string
  companyLogo: string
  location: string
  salary: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  experience: "Entry" | "Mid" | "Senior" | "Executive"
  skills: string[]
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
  featured: boolean
  urgent: boolean
  remote: boolean
}

export interface Company {
  id: string
  name: string
  logo: string
  description: string
  industry: string
  size: string
  location: string
  website: string
  rating: number
  reviewCount: number
  jobs: number
  benefits: string[]
  culture: string[]
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyLogo: "T",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    experience: "Senior",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining our web applications using modern technologies.",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with Next.js",
      "Knowledge of modern CSS frameworks",
      "Experience with testing frameworks",
    ],
    benefits: ["Health Insurance", "Dental Insurance", "401k", "Flexible PTO", "Remote Work"],
    postedDate: "2024-01-15",
    featured: true,
    urgent: false,
    remote: false,
  },
  {
    id: "2",
    title: "Product Manager",
    company: "StartupXYZ",
    companyLogo: "S",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Remote",
    experience: "Mid",
    skills: ["Strategy", "Analytics", "Agile", "User Research"],
    description:
      "Join our product team to help shape the future of our platform. You will work closely with engineering and design teams to deliver exceptional user experiences.",
    requirements: [
      "3+ years of product management experience",
      "Experience with agile methodologies",
      "Strong analytical skills",
      "Excellent communication skills",
      "Experience with user research",
    ],
    benefits: ["Health Insurance", "Stock Options", "Flexible Hours", "Learning Budget"],
    postedDate: "2024-01-16",
    featured: false,
    urgent: false,
    remote: true,
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignStudio",
    companyLogo: "D",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    type: "Full-time",
    experience: "Mid",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    description:
      "We are seeking a talented UX Designer to create intuitive and engaging user experiences for our digital products.",
    requirements: [
      "3+ years of UX design experience",
      "Proficiency in Figma",
      "Experience with user research",
      "Strong portfolio",
      "Knowledge of design systems",
    ],
    benefits: ["Health Insurance", "Creative Budget", "Flexible PTO", "Professional Development"],
    postedDate: "2024-01-17",
    featured: false,
    urgent: true,
    remote: false,
  },
  // Add more jobs...
]

export const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp Inc.",
    logo: "T",
    description: "Leading technology company focused on innovative solutions for modern businesses.",
    industry: "Technology",
    size: "1000-5000",
    location: "San Francisco, CA",
    website: "https://techcorp.com",
    rating: 4.8,
    reviewCount: 234,
    jobs: 45,
    benefits: ["Health Insurance", "Stock Options", "401k", "Flexible PTO"],
    culture: ["Innovation", "Collaboration", "Growth", "Diversity"],
  },
  {
    id: "2",
    name: "StartupXYZ",
    logo: "S",
    description: "Fast-growing startup revolutionizing the way people work and collaborate.",
    industry: "SaaS",
    size: "50-200",
    location: "Austin, TX",
    website: "https://startupxyz.com",
    rating: 4.6,
    reviewCount: 89,
    jobs: 12,
    benefits: ["Equity", "Flexible Hours", "Learning Budget", "Remote Work"],
    culture: ["Fast-paced", "Entrepreneurial", "Learning", "Impact"],
  },
  // Add more companies...
]

export const jobCategories = [
  { name: "Technology", count: "12,543", icon: "💻", slug: "technology" },
  { name: "Marketing", count: "8,234", icon: "📈", slug: "marketing" },
  { name: "Design", count: "5,678", icon: "🎨", slug: "design" },
  { name: "Sales", count: "9,876", icon: "💼", slug: "sales" },
  { name: "Finance", count: "6,543", icon: "💰", slug: "finance" },
  { name: "Healthcare", count: "4,321", icon: "🏥", slug: "healthcare" },
]

export const personalInfo = {
  name: 'Eshan Saxena',
  title: 'Computer Science Engineer',
  taglines: [
    'Full Stack Developer',
    'Computer Vision Engineer',
    'Data Science Enthusiast',
    'Problem Solver',
  ],
  bio: "I'm a final-year B.Tech Computer Science student passionate about building clean, scalable web applications and solving real-world problems through code. I enjoy working across the full stack and constantly exploring new technologies to grow as a developer.",
  aboutBio: "Pre-final year B.Tech computer science student passionate about IoT, Artificial Intelligence and Data Analysis. Eager to apply theoretical knowledge to real-world projects. Actively seeking challenging opportunities to further enhance my skills and contribute to innovative solutions.",
  whyHireMe: "You should hire me because I bring a rare combination of Computer Vision (Python), Data Science, Business Analysis, and Full-Stack Development expertise. I don't just write code — I understand business requirements and translate them into scalable, data-driven solutions. I work with a strong sense of ownership, clear communication, and attention to detail.",
  location: 'Agra, Uttar Pradesh, India',
  education: 'B.Tech in Computer Science and Engineering',
  interests: 'Traveling, Design, Music, Driving',
  email: 'eshanbsaxena@gmail.com',
  github: 'https://github.com/Eshan1402',
  linkedin: 'https://www.linkedin.com/in/eshan-saxena-3a6170276/',
  cvPath: '/profile.pdf',
};

export const skills = [
  { name: 'Full Stack Development', level: 90 },
  { name: 'Communication', level: 95 },
  { name: 'Problem Solving', level: 70 },
  { name: 'Computer Vision / ML', level: 75 },
  { name: 'Algorithm & Data Structures', level: 75 },
  { name: 'Data Science & Analytics', level: 70 },
];

export const techStack = [
  'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
  'MongoDB', 'PostgreSQL', 'TailwindCSS', 'OpenCV', 'Pandas',
];

export const stats = [
  { number: 2, suffix: '+', label: 'Years of Experience' },
  { number: 40, suffix: '+', label: 'Projects Completed' },
  { number: 9, suffix: '+', label: 'Unique Projects' },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Sports Store',
    description: 'Full-stack e-commerce platform for sports equipment with cart, auth, and admin dashboard.',
    image: '/images/projects/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/Eshan1402/Ecommerce-SportsStore',
    live: null,
  },
  {
    id: 2,
    title: 'Computer Vision Suite',
    description: 'Collection of computer vision projects including object detection, face recognition, and image segmentation.',
    image: '/images/projects/project2.jpg',
    tags: ['Python', 'OpenCV', 'TensorFlow'],
    category: 'cv',
    github: 'https://github.com/Eshan1402/Computer-Vision',
    live: null,
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization with advanced filtering and export capabilities.',
    image: '/images/projects/project3.jpg',
    tags: ['Python', 'Pandas', 'Streamlit'],
    category: 'data',
    github: 'https://github.com/Eshan1402',
    live: null,
  },
  {
    id: 4,
    title: 'Portfolio Website v1',
    description: 'Original personal portfolio built with pure HTML/CSS and Bootstrap showcasing skills and projects.',
    image: '/images/projects/project4.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'fullstack',
    github: 'https://github.com/Eshan1402',
    live: null,
  },
  {
    id: 5,
    title: 'IoT Smart Monitor',
    description: 'IoT-based smart environment monitoring system with real-time sensor data and alerts.',
    image: '/images/projects/project5.jpg',
    tags: ['Python', 'MQTT', 'Raspberry Pi'],
    category: 'data',
    github: 'https://github.com/Eshan1402',
    live: null,
  },
  {
    id: 6,
    title: 'REST API Service',
    description: 'Scalable RESTful API service with JWT authentication, rate limiting, and comprehensive documentation.',
    image: '/images/projects/project6.jpg',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    category: 'fullstack',
    github: 'https://github.com/Eshan1402',
    live: null,
  },
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'data', label: 'Data Science' },
];

export const experience = [
  {
    id: 1,
    role: 'Web Developer Intern',
    org: 'Career Point',
    period: '2023',
    type: 'work',
    description: 'Developed and maintained web applications, collaborated with design teams, and optimized frontend performance for improved user experience.',
  },
  {
    id: 2,
    role: 'Team Leader — Tech Inauguration',
    org: 'College Fest (2 Drones & 1 Rover)',
    period: '2023',
    type: 'leadership',
    description: 'Led the technical inauguration team for the annual college fest, coordinating drone and rover demonstrations for 500+ attendees.',
  },
  {
    id: 3,
    role: 'Operational Manager',
    org: 'Abacus Society',
    period: '2022 – 2024',
    type: 'leadership',
    description: 'Managed operations for the university\'s computational society, organizing events, workshops, and technical competitions.',
  },
  {
    id: 4,
    role: 'Finalist',
    org: 'i-Mobilithon Hackathon (Volkswagen Group)',
    period: '2023',
    type: 'achievement',
    description: 'Among top teams nationally in the VW Group\'s mobility innovation hackathon, pitching an AI-driven automotive solution.',
  },
];

export const education = [
  {
    id: 1,
    degree: 'B.Tech in CSE',
    institution: 'GLA University',
    period: '2022 – Present',
  },
  {
    id: 2,
    degree: 'Secondary School',
    institution: 'St. Francis Convent School',
    period: '2008 – 2022',
  },
];

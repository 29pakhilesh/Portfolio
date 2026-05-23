import { assetUrl } from './assetUrl'

export const profile = {
  name: 'Akhilesh Panigrahi',
  title: 'B.Tech CSE Student',
  tagline:
    'Third-year Computer Science student at JUIT — building web apps, browser-based systems, and scalable software. Open to internships.',
  email: '29p.akhilesh@gmail.com',
  phone: '+91 9873081614',
  location: 'Ghaziabad, India',
  resumeUrl: assetUrl('Akhilesh-Panigrahi-Resume.pdf'),
  photo: assetUrl('profile-hero.png'),
  photoAbout: assetUrl('profile.png'),
  available: true,
  social: {
    github: 'https://github.com/29pakhilesh',
    linkedin: 'https://www.linkedin.com/in/akhileshpanigrahi/',
    leetcode: 'https://leetcode.com/u/29pakhilesh/',
  },
}

export const stats = [
  { value: '14', label: 'Technologies', href: '#skills' },
  { value: '5', label: 'Certifications', href: '#skills' },
  { value: '8', label: 'Projects built', href: '#work' },
  { value: '2028', label: 'Graduating', href: '#about' },
]

export const about = [
  "I'm a B.Tech Computer Science student at Jaypee University of Information Technology, passionate about software development and problem solving.",
  'I build real-world systems — from a browser-based OS simulation to hostel complaint platforms with role-based dashboards and PostgreSQL backends.',
  'Certified in AWS Cloud, Python, C, DSA, and Cybersecurity. Active on LeetCode and always learning new tools to ship better software.',
]

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Jaypee University of Information Technology',
    location: 'Wakhnaghat, Solan',
    period: '2024 — 2028',
    detail: 'Relevant coursework: DSA, DBMS, Web Development',
  },
]

export const skills = [
  { category: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript'] },
  { category: 'Web & Backend', items: ['React', 'Node.js', 'Express', 'Next.js', 'HTML', 'CSS'] },
  { category: 'Databases & Tools', items: ['PostgreSQL', 'MySQL', 'Git', 'VS Code', 'Linux'] },
]

export const skillPills = [
  'React', 'Node.js', 'PostgreSQL', 'Python', 'C++', 'JavaScript',
  'Express', 'Next.js', 'MySQL', 'HTML', 'CSS', 'Git', 'Linux', 'AWS',
]

/** Click-to-open detail for each tech tile in the skills grid */
export const techDetails = {
  C: {
    category: 'Languages',
    summary:
      'Foundation language for systems thinking — memory, pointers, and low-level logic from coursework and certifications.',
    usages: [
      {
        project: 'C Programming — Basics to Advanced (Udemy)',
        context: 'Completed structured training on pointers, memory management, and advanced C patterns.',
      },
      {
        project: 'Data Structures & Algorithms',
        context: 'Implemented core DSA problems in C as part of university coursework and practice.',
      },
    ],
  },
  'C++': {
    category: 'Languages',
    summary: 'Used for structured OOP, file handling, and building console-based management systems.',
    usages: [
      {
        project: 'Parking Management System',
        context: 'Built vehicle entry/exit flows, GST billing, and persistent records with file I/O in C++.',
        github: 'https://github.com/29pakhilesh/Multi-Vehicle-Parking-Management-System',
      },
    ],
  },
  Python: {
    category: 'Languages',
    summary:
      'Primary language for automation, ML pipelines, APIs, and scripting — from tools to full-stack backends.',
    usages: [
      {
        project: 'Traffic Sign Recognition',
        context: 'Trained ResNet18 with PyTorch and served inference through a FastAPI backend.',
        github: 'https://github.com/29pakhilesh/Traffic-Sign-Recognition',
      },
      {
        project: 'PDF Merger & Splitter',
        context: 'Automated merge/split workflows with PyPDF2 for document handling.',
        github: 'https://github.com/29pakhilesh/splitter-merger-tool-for-pdfs',
      },
      {
        project: 'Python Bootcamp — Zero to Hero (Udemy)',
        context: 'Certified training covering OOP, scripting, and practical Python patterns.',
      },
    ],
  },
  JavaScript: {
    category: 'Languages',
    summary: 'Core language for interactive frontends, browser apps, and full-stack JavaScript projects.',
    usages: [
      {
        project: 'WebUnix — Browser-Based OS',
        context: 'Implemented desktop UI, app windows, auth, and a LocalStorage-backed file system.',
        github: 'https://github.com/29pakhilesh/Webunix',
      },
      {
        project: 'Hostel Complaint Management System',
        context: 'React frontend with dynamic forms, dashboards, and client-side state for complaint flows.',
        github: 'https://github.com/29pakhilesh/Hostel-Complaint-System',
      },
    ],
  },
  React: {
    category: 'Web & Backend',
    summary: 'Component-based UI for dashboards, forms, and data-heavy portfolio and product projects.',
    usages: [
      {
        project: 'Hostel Complaint Management System',
        context: 'Student and admin dashboards with role-based views and complaint tracking UI.',
        github: 'https://github.com/29pakhilesh/Hostel-Complaint-System',
      },
      {
        project: 'Green Computing Dashboard',
        context: 'Interactive charts and panels for resource and energy usage visualization.',
        github: 'https://github.com/29pakhilesh/Green-Computing-Dashboard',
      },
      {
        project: 'Automated Resume Scoring System',
        context: 'Upload UI, scoring results, and feedback views for resume–job matching.',
        github: 'https://github.com/29pakhilesh/Automated-Resume-Scoring-System',
      },
      {
        project: 'This portfolio',
        context: 'Built with React 19 and Vite — sections, theme toggle, scroll reveals, and contact form.',
      },
    ],
  },
  'Node.js': {
    category: 'Web & Backend',
    summary: 'Server-side JavaScript for REST APIs, auth flows, and connecting React frontends to databases.',
    usages: [
      {
        project: 'Hostel Complaint Management System',
        context: 'Express API for complaints, users, roles, and PostgreSQL persistence.',
        github: 'https://github.com/29pakhilesh/Hostel-Complaint-System',
      },
    ],
  },
  Express: {
    category: 'Web & Backend',
    summary: 'Lightweight HTTP layer for routing, middleware, and REST endpoints on Node.js.',
    usages: [
      {
        project: 'Hostel Complaint Management System',
        context: 'REST routes for complaints, authentication middleware, and admin/student APIs.',
        github: 'https://github.com/29pakhilesh/Hostel-Complaint-System',
      },
    ],
  },
  'Next.js': {
    category: 'Web & Backend',
    summary: 'React framework for SSR, routing, and production-ready web apps — actively learning and prototyping.',
    usages: [
      {
        project: 'Personal learning',
        context: 'Exploring App Router, API routes, and deployment patterns for future full-stack projects.',
      },
    ],
  },
  HTML: {
    category: 'Web & Backend',
    summary: 'Semantic structure and accessible markup for multi-page and single-page web experiences.',
    usages: [
      {
        project: 'WebUnix — Browser-Based OS',
        context: 'Layout for desktop shell, windows, and in-browser application frames.',
        github: 'https://github.com/29pakhilesh/Webunix',
      },
      {
        project: 'This portfolio',
        context: 'Semantic sections, meta tags, and accessible document structure.',
      },
    ],
  },
  CSS: {
    category: 'Web & Backend',
    summary: 'Custom styling, responsive layouts, animations, and theme systems without heavy UI libraries.',
    usages: [
      {
        project: 'WebUnix — Browser-Based OS',
        context: 'Window chrome, desktop grid, and app styling for a cohesive OS-like interface.',
        github: 'https://github.com/29pakhilesh/Webunix',
      },
      {
        project: 'This portfolio',
        context: 'Golden theme variables, light/dark mode, scroll reveals, and responsive project grid.',
      },
    ],
  },
  PostgreSQL: {
    category: 'Databases & Tools',
    summary: 'Relational database for structured data, roles, and complaint or user records at scale.',
    usages: [
      {
        project: 'Hostel Complaint Management System',
        context: 'Schemas for users, complaints, statuses, and role-based access with SQL queries.',
        github: 'https://github.com/29pakhilesh/Hostel-Complaint-System',
      },
    ],
  },
  MySQL: {
    category: 'Databases & Tools',
    summary: 'SQL fundamentals, queries, and relational modeling from coursework and practice.',
    usages: [
      {
        project: 'University coursework (DBMS)',
        context: 'Designed tables, joins, and queries for academic database assignments.',
      },
      {
        project: 'Online Quiz System',
        context: 'Relational storage patterns for users, questions, and quiz attempts (web stack).',
        github: 'https://github.com/29pakhilesh/Online-Quiz-System',
      },
    ],
  },
  Git: {
    category: 'Databases & Tools',
    summary: 'Version control for every project — branching, commits, GitHub, and CI-friendly workflows.',
    usages: [
      {
        project: 'All GitHub projects',
        context: 'Feature branches, meaningful commits, and public repos for coursework and portfolio work.',
        github: 'https://github.com/29pakhilesh',
      },
    ],
  },
  'VS Code': {
    category: 'Databases & Tools',
    summary: 'Primary editor for React, Node, Python, and C++ with extensions for debugging and Git integration.',
    usages: [
      {
        project: 'Day-to-day development',
        context: 'Used across hostel platform, portfolio, ML apps, and university assignments.',
      },
    ],
  },
  Linux: {
    category: 'Databases & Tools',
    summary: 'Comfortable with terminal workflows, deployment environments, and open-source tooling.',
    usages: [
      {
        project: 'Development environment',
        context: 'Terminal, package managers, and server-style workflows for building and testing apps.',
      },
      {
        project: 'Traffic Sign Recognition',
        context: 'Python virtual environments and model training/serving from the command line.',
        github: 'https://github.com/29pakhilesh/Traffic-Sign-Recognition',
      },
    ],
  },
}

export function getTechDetail(techName) {
  const base = techDetails[techName]
  if (!base) return null

  const knownProjects = new Set(base.usages.map((u) => u.project))
  const fromTags = projects
    .filter((p) => p.tags.includes(techName) && !knownProjects.has(p.title))
    .map((p) => ({
      project: p.title,
      context: p.description,
      github: p.github,
    }))

  const category =
    skills.find((g) => g.items.includes(techName))?.category ?? base.category

  return {
    ...base,
    category,
    usages: [...base.usages, ...fromTags],
  }
}

export const projects = [
  {
    title: 'Hostel Complaint Management System',
    description:
      'Web platform for students to submit and track hostel complaints with role-based dashboards (student/admin) and real-time updates.',
    highlights: [
      'Student and admin dashboards with separate workflows',
      'REST API with Express and PostgreSQL persistence',
      'Complaint status tracking from submission to resolution',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    period: 'Feb 2026 — Apr 2026',
    accent: '#d4af37',
    featured: true,
    github: 'https://github.com/29pakhilesh/Hostel-Complaint-System',
  },
  {
    title: 'WebUnix — Browser-Based OS',
    description:
      'Browser-based OS with multi-application desktop interface, LocalStorage file system, auth, and persistent sessions.',
    highlights: [
      'Desktop-style UI with draggable windows and app launcher',
      'LocalStorage-backed virtual file system',
      'Login flow with session persistence in the browser',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    period: 'Dec 2025',
    accent: '#d4af37',
    featured: true,
    github: 'https://github.com/29pakhilesh/Webunix',
  },
  {
    title: 'Online Quiz System',
    description:
      'Web-based quiz platform with login, MCQ tests, automated scoring, and question management — reducing manual evaluation.',
    highlights: [
      'User authentication and role-based quiz access',
      'MCQ test engine with automated scoring',
      'Question bank management for instructors',
    ],
    tags: ['Web', 'Auth', 'MCQ Engine'],
    period: 'Mar 2026',
    accent: '#d4af37',
    featured: false,
    github: 'https://github.com/29pakhilesh/Online-Quiz-System',
  },
  {
    title: 'Green Computing Dashboard',
    description:
      'Dashboard to visualize energy and resource usage in computing systems with performance monitoring insights.',
    highlights: [
      'Charts for CPU, memory, and energy-style metrics',
      'React-based UI for monitoring resource trends',
      'Built around sustainability and efficiency themes',
    ],
    tags: ['React', 'Data Viz', 'Sustainability'],
    period: 'Mar 2026',
    accent: '#d4af37',
    featured: false,
    github: 'https://github.com/29pakhilesh/Green-Computing-Dashboard',
  },
  {
    title: 'Parking Management System',
    description:
      'C++ system for vehicle entry/exit, GST-based billing, file handling, and automated record management.',
    highlights: [
      'Vehicle entry/exit logging with slot management',
      'GST-based billing and receipt generation',
      'File-based persistence for parking records',
    ],
    tags: ['C++', 'File I/O', 'Billing'],
    period: 'Nov 2025',
    accent: '#d4af37',
    featured: false,
    github: 'https://github.com/29pakhilesh/Multi-Vehicle-Parking-Management-System',
  },
  {
    title: 'PDF Merger & Splitter',
    description:
      'Python tool using PyPDF2 to merge multiple PDFs and split documents — automating document handling workflows.',
    highlights: [
      'Merge multiple PDFs into a single file',
      'Split PDFs by page ranges',
      'CLI-style automation for document batches',
    ],
    tags: ['Python', 'PyPDF2', 'Automation'],
    period: 'Jun — Jul 2025',
    accent: '#d4af37',
    featured: false,
    github: 'https://github.com/29pakhilesh/splitter-merger-tool-for-pdfs',
  },
  {
    title: 'Traffic Sign Recognition',
    description:
      'Deep learning web app with ResNet18 CNN to classify traffic signs from images and live webcam — built with PyTorch and FastAPI.',
    highlights: [
      'ResNet18 model trained for traffic sign classes',
      'Image upload and live webcam inference',
      'FastAPI backend serving predictions to the UI',
    ],
    tags: ['Python', 'PyTorch', 'FastAPI', 'Deep Learning'],
    period: 'May 2026',
    accent: '#d4af37',
    featured: false,
    github: 'https://github.com/29pakhilesh/Traffic-Sign-Recognition',
  },
  {
    title: 'Automated Resume Scoring System',
    description:
      'Full-stack app that scores resumes against a job description with semantic similarity, keyword coverage, and actionable feedback.',
    highlights: [
      'Resume–JD semantic similarity scoring',
      'Keyword coverage and gap analysis',
      'Actionable feedback for improving match strength',
    ],
    tags: ['React', 'TypeScript', 'FastAPI', 'SQLite'],
    period: 'Apr — May 2026',
    accent: '#d4af37',
    featured: false,
    github: 'https://github.com/29pakhilesh/Automated-Resume-Scoring-System',
  },
]

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Udemy',
    logo: assetUrl('icons/aws.png'),
    period: 'Feb 2026',
    skills: ['Cloud fundamentals', 'EC2', 'S3', 'IAM'],
    certificateUrl: assetUrl('certificates/aws-cloud-practitioner.pdf'),
    downloadName: 'Akhilesh-Panigrahi-AWS-Cloud-Practitioner.pdf',
  },
  {
    name: 'Python Bootcamp — Zero to Hero',
    issuer: 'Udemy',
    period: 'Jul 2025',
    skills: ['Python', 'OOP', 'Scripting'],
    certificateUrl: assetUrl('certificates/python-zero-to-hero.pdf'),
    downloadName: 'Akhilesh-Panigrahi-Python-Bootcamp.pdf',
  },
  {
    name: 'C Programming — Basics to Advanced',
    issuer: 'Udemy',
    period: 'Sep 2025',
    skills: ['C', 'Pointers', 'Memory management'],
    certificateUrl: assetUrl('certificates/c-programming-basics-to-advanced.pdf'),
    downloadName: 'Akhilesh-Panigrahi-C-Programming.pdf',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    period: 'Jun 2025',
    skills: ['Network security', 'Threats', 'Vulnerabilities'],
    certificateUrl: assetUrl('certificates/introduction-to-cybersecurity-cisco.pdf'),
    downloadName: 'Akhilesh-Panigrahi-Cisco-Cybersecurity.pdf',
  },
  {
    name: 'Data Structures and Algorithms',
    issuer: 'OnWingspan',
    period: 'Apr 2025',
    skills: ['DSA', 'Problem solving', 'Algorithms'],
    certificateUrl: assetUrl('certificates/data-structures-and-algorithms.pdf'),
    downloadName: 'Akhilesh-Panigrahi-DSA.pdf',
  },
]

export const strengths = [
  { label: 'Teamwork', icon: 'teamwork' },
  { label: 'Adaptability', icon: 'adaptability' },
  { label: 'Problem Solving', icon: 'problem' },
  { label: 'Quick Learner', icon: 'learner' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

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

export const projects = [
  {
    title: 'Hostel Complaint Management System',
    description:
      'Web platform for students to submit and track hostel complaints with role-based dashboards (student/admin) and real-time updates.',
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

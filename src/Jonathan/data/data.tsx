import {AcademicCapIcon, CalendarIcon, DownloadIcon, MapIcon, SparklesIcon} from '@heroicons/react/outline';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/Jonathan/1.jpg';
import churchImg from '../images/Jonathan/Church.jpg';
import covidImg from '../images/Jonathan/Covid.jpg';
import DoItImg from '../images/Jonathan/DOIT.png';
import heroImage from '../images/Jonathan/Moon.jpg';
import UnityImg from '../images/Jonathan/Unity.jpg';
import DiscordImg from '../images/Jonathan/Discord.png';
import HopMC from '../images/Jonathan/HopMC.jpg';

import {
  About,
  ContactSection,
  ContactType,
  Header,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'Bakhit | Software Engineering',
  description: "Jonathan Bakhit's personal website",
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Hobbies: 'hobbies',
  Testimonials: 'Words',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I am Jonathan Bakhit.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Software Engineer focused on Artificial Intelligence, backend systems, and distributed architectures. Currently pursuing a Master of Science in Computer Science at Georgia Tech.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Experience spanning industry, research, and large-scale system design, with a focus on scalable APIs, machine learning systems, and performance optimization.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/JonResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const headerData: Header = {
  returnButton: 'Home',
};

export const aboutData: About = {
  profileImageSrc: [profilepic],
  description: `Software engineer with experience building and scaling backend systems, distributed architectures, and AI-driven platforms across industry and research environments.`,
  aboutItems: [
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Location', text: 'Houston, TX', Icon: MapIcon},
    {label: 'Interests', text: 'AI Systems, Distributed Systems, Robotics', Icon: SparklesIcon},
    {label: 'Education', text: 'Georgia Tech / Johns Hopkins University', Icon: AcademicCapIcon},
  ],
};

export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Java', level: 10},
      {name: 'Python', level: 10},
      {name: 'JavaScript', level: 9},
      {name: 'C++', level: 8},
      {name: 'C#', level: 8},
      {name: 'Go', level: 7},
      {name: 'SQL', level: 7},
    ],
  },
  {
    name: 'Backend & Systems',
    skills: [
      {name: 'Node.js', level: 9},
      {name: 'Express', level: 9},
      {name: 'Distributed Systems', level: 8},
      {name: 'System Design', level: 9},
      {name: 'Docker', level: 8},
    ],
  },
  {
    name: 'AI / ML',
    skills: [
      {name: 'Machine Learning', level: 9},
      {name: 'NLP', level: 8},
      {name: 'LLMs', level: 8},
      {name: 'AI Agents', level: 8},
      {name: 'Data Pipelines', level: 8},
    ],
  },
  {
    name: 'Frontend & Tools',
    skills: [
      {name: 'React', level: 9},
      {name: 'HTML/CSS', level: 8},
      {name: 'Unity', level: 7},
      {name: 'Firebase', level: 7},
      {name: 'AWS', level: 8},
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'DoIt',
    description: 'Social challenge platform built with React, Node.js, MongoDB, Express.',
    url: 'https://doit-oose.herokuapp.com/',
    image: DoItImg,
  },
  {
    title: 'Church Website',
    description: 'Full-stack community website built in React.',
    url: 'https://testingwebsiteforchurch.netlify.app/',
    image: churchImg,
  },
  {
    title: 'Delineo Modeling Project',
    description: 'Large-scale epidemiological simulation platform.',
    url: 'https://covidweb.isi.jhu.edu/',
    image: covidImg,
  },
  {
    title: 'AnyTown COVID Simulation',
    description: 'Unity-based simulation for epidemiological modeling.',
    url: 'https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/',
    image: UnityImg,
  },
  {
    title: 'Discord Bot',
    description: 'Automation bot for stocks, alerts, and system monitoring.',
    url: 'https://github.com/ChrisBJHU/DiscordBot',
    image: DiscordImg,
  },
  {
    title: 'HopMC',
    description: 'Minecraft server backend and web infrastructure.',
    url: 'https://studentaffairs.jhu.edu/dmc/hopmc/',
    image: HopMC,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2026 - Present',
    location: 'Georgia Institute of Technology',
    title: 'M.S. Computer Science',
    content: <p className="text-sm text-neutral-800"></p>,
  },
  {
    date: '2020 - 2024',
    location: 'Johns Hopkins University',
    title: 'B.S. Computer Science, Applied Mathematics & Statistics',
    content: <p className="text-sm text-neutral-800">Minors: Robotics, Psychology, Mathematics</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2026 - Present',
    location: 'Dynamic Active',
    title: 'Senior Software Engineer',
    content: (
      <ul className="list-disc">
        <li>Scaled full-stack systems improving performance by 30% and enabling 2–3x user growth</li>
        <li>Built AI-driven automation systems reducing manual processing by 40%+ and improving accuracy by 25%</li>
        <li>Optimized backend architecture reducing API latency by 35%</li>
      </ul>
    ),
  },
  {
    date: 'Oct 2024 - March 2026',
    location: 'United States Patent and Trademark Office',
    title: 'Software Engineering Expert',
    content: (
      <ul className="list-disc">
        <li>Analyzed 1,000+ AI/software patents improving prior art evaluation efficiency by 40%</li>
        <li>Evaluated distributed systems and AI architectures for scalability and correctness</li>
        <li>Improved review accuracy by 30% through structural system analysis</li>
      </ul>
    ),
  },
  {
    date: 'March 2023 - May 2024',
    location: 'SkillLink',
    title: 'Software Engineer',
    content: (
      <ul className="list-disc">
        <li>Built core web platform enabling MVP launch and early adoption</li>
        <li>Designed scalable full-stack architecture improving stability by 30%</li>
        <li>Increased development velocity by 35% through modular system design</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2021 - Mar 2023',
    location: 'Delineo Modeling Project',
    title: 'Software Engineer & Team Lead',
    content: (
      <ul className="list-disc">
        <li>Built simulation platform supporting 50,000+ sessions and 1M+ data points per run</li>
        <li>Reduced execution time by 18% and latency by 22%</li>
        <li>Led 10+ member research team and improved release cycles by 5 weeks</li>
      </ul>
    ),
  },
];


export const contact: ContactSection = {
  headerText: 'Contact Me',
  description:
    'Open to new opportunities and collaborations. Feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'jonathanbakhit02@gmail.com',
      href: 'mailto:jonathanbakhit02@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Houston, TX, USA',
      href: 'https://www.google.ca/maps/place/Houston,+TX/@29.7559698,-95.3573194',
    },
    {
      type: ContactType.Instagram,
      text: '@BakhitJonathan',
      href: 'https://www.instagram.com/BakhitJonathan/',
    },
    {
      type: ContactType.Github,
      text: 'syncre02',
      href: 'https://github.com/syncre02',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/syncre02'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jonathanbakhit/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bakhitjonathan/'},
];
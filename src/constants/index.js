import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  firebase,
  android,
  arduino,
  cplus,
  csharp,
  elixir,
  java,
  mysql,
  opencv,
  php,
  python,
  sqlite,
  unity,
  bootstrap,
  mmcm,
  ritsumeikan,
  winnoven,
  fiverr,
  afs,
  akp,
  api,
  devcon,
  dice,
  fwdp,
  gdsc,
  nocode,
  ssc,
  wtm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "App/Game Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  }, 
  {
    name: "C++",
    icon: cplus,
  }, 
  {
    name: "PHP",
    icon: php,
  },
];

const workExperiences = [
  {
    title: "Freelance Graphic Designer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Designed engaging profile frames for social media to enhance event promotion and visibility.",
      "Collaborated with clients to understand their branding needs and deliver tailored graphic solutions.",
      "Applied graphic design principles to create visually appealing and impactful designs."
    ],
  },
  {
    title: "Metaverse VR Team Lead (Internship)",
    company_name: "Winnoven, Inc.",
    location: "Deltaware, USA",
    icon: winnoven,
    iconBg: "#383E56",
    date: "May 2022 - May 2022",
    points: [
      "Pioneered the creation of a new department within Winnoven, Inc., leading the development of a VR game concept specifically for this new Metaverse VR gaming department.",
      "Led the conceptualization and development of the VR game with fellow interns over a 2-week period.",
      "Received commendation from the CEO for outstanding performance and leadership during the internship.",
    ],
  },
];

const educationExperiences = [
  {
    school_name: "Mapúa Malayan Colleges Mindanao",
    location: "Davao City, Philippines",
    degree: "Bachelor of Science in Computer Science",
    icon: mmcm,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    achievements: [
      "Received a sponsored flight to and from Korea for the 2024 Industrial LINCage Festival for Global Leaders",
      "Consistent President's Lister & Dean's Lister",
    ],
  },
  {
    school_name: "Mapúa Malayan Colleges Mindanao",
    location: "Davao City, Philippines",
    degree: "Senior High School, ICT Track - Specializing in Programming",
    icon: mmcm,
    iconBg: "#E6DEDD",
    date: "2020 - 2022",
    achievements: [
      "Graduated with Highest Honors (1st Honors)",
      "Graduated with a GWA of 99.5",
      "Most Outstanding High School Graduate of Mapúa Malayan Colleges Mindanao",
      "JCI Youth Excellence Awardee",
      "Academic Excellence Award (Top 10) Scholarship",
    ],
  },
  {
    school_name: "Ritsumeikan Uji Senior High School",
    location: "Kyoto, Japan",
    degree: "Exchange Program",
    icon: ritsumeikan,
    iconBg: "#E6DEDD",
    date: "2019 - 2020",
    achievements: [
      "Exchange Student under the Asia Kakehashi Project Scholarship",
    ],
  },
];


const volunteeringExperiences = [
  {
    title: "MMCM Supreme Student Council",
    date: "2024 - Present",
    icon: ssc,
    iconBg: "#E6DEDD",
    points: [
      "External Vice President",
    ],
  },
  {
    title: "Google's Women Techmakers",
    date: "2024 - Present",
    icon: wtm,
    iconBg: "#E6DEDD",
    points: [
      "Ambassador",
      "Member (2023 - 2024)",
    ],
  },
  {
    title: "Google Developer Student Clubs Mapúa-MCM",
    date: "2024 - Present",
    icon: gdsc,
    iconBg: "#E6DEDD",
    points: [
      "Executive Consultant",
      "Chief Executive Officer/Lead (2023 - 2024)",
      "Chief Communications Officer (2022 - 2023)",
    ],
  },
  {
    title: "Google Developer Groups Davao",
    date: "2023 - Present",
    icon: gdsc,
    iconBg: "#E6DEDD",
    points: [
      "Externals Team Lead",
      "Externals Team Member (2022 - 2023)",
    ],
  },
  {
    title: "Davao Interschool Computer Enthusiasts",
    date: "2023 - Present",
    icon: dice,
    iconBg: "#E6DEDD",
    points: [
      "Member",
    ],
  },
  {
    title: "Filipino Web Development Peers",
    date: "2023 - Present",
    icon: fwdp,
    iconBg: "#E6DEDD",
    points: [
      "Member",
    ],
  },
  {
    title: "No Code Philippines",
    date: "2023 - Present",
    icon: nocode,
    iconBg: "#E6DEDD",
    points: [
      "Volunteer",
    ],
  },
  {
    title: "DEVCON Davao",
    date: "2023 - Present",
    icon: devcon,
    iconBg: "#E6DEDD",
    points: [
      "Volunteer",
    ],
  },
  {
    title: "MMCM Association of Proactive Innovators",
    date: "2023 - 2024",
    icon: api,
    iconBg: "#E6DEDD",
    points: [
      "Co-Founder",
      "External Vice President",
    ],
  },
  {
    title: "Google Developer Student Clubs Philippines",
    date: "2023 - 2024",
    icon: gdsc,
    iconBg: "#E6DEDD",
    points: [
      "Mindanao Representative",
    ],
  },
  {
    title: "AFS Intercultural Programs Philippines",
    date: "2023 - Present",
    icon: afs,
    iconBg: "#E6DEDD",
    points: [
      "Alumni Coordinator - Davao Community",
      "Volunteer (2020 - Present)",
    ],
  },
  {
    title: "Asia Kakehashi Project Philippines Alumni",
    date: "2022 - 2023",
    icon: akp,
    iconBg: "#E6DEDD",
    points: [
      "Creative Media and Communications Committee Head",
      "Deputy Executive Director (2021 - 2022)",
      "Secretary-General (2020 - 2021)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, workExperiences, educationExperiences, volunteeringExperiences, testimonials, projects };

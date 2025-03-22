
export interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  date: string;
  category: string;
}

export interface ArticleItem {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  readTime: string;
}

export interface ResumeItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

export interface SkillItem {
  id: number;
  name: string;
  level: number; // 1-5
}

export const videoData: VideoItem[] = [
  {
    id: 1,
    title: "Exclusive Interview with Tech CEO",
    description: "A deep dive into the future of artificial intelligence with industry leaders",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "May 15, 2023",
    category: "Technology"
  },
  {
    id: 2,
    title: "Breaking News: Climate Summit",
    description: "Coverage of the international climate conference and its implications",
    thumbnail: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "March 10, 2023",
    category: "Environment"
  },
  {
    id: 3,
    title: "Inside the Capitol: Political Analysis",
    description: "An in-depth look at recent legislative developments and their impact",
    thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "February 28, 2023",
    category: "Politics"
  },
  {
    id: 4,
    title: "Economic Forecast 2023",
    description: "Financial experts analyze market trends and provide outlook for the year ahead",
    thumbnail: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "January 12, 2023",
    category: "Finance"
  },
  {
    id: 5,
    title: "Healthcare Crisis Investigation",
    description: "Special report on challenges facing the healthcare system",
    thumbnail: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    date: "December 5, 2022",
    category: "Healthcare"
  }
];

export const articleData: ArticleItem[] = [
  {
    id: 1,
    title: "The Evolution of AI in Journalism",
    description: "How artificial intelligence is transforming news gathering and reporting",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "/articles/1",
    date: "April 22, 2023",
    category: "Technology",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Sustainable Fashion: Beyond the Buzzwords",
    description: "An investigation into the reality of sustainability claims in the fashion industry",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "/articles/2",
    date: "March 15, 2023",
    category: "Environment",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "The Changing Landscape of Global Politics",
    description: "Analysis of shifting international alliances and power dynamics",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "/articles/3",
    date: "February 8, 2023",
    category: "Politics",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Cryptocurrency: Investment or Speculation?",
    description: "A balanced look at the volatile world of digital currencies",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "/articles/4",
    date: "January 30, 2023",
    category: "Finance",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Mental Health in the Workplace",
    description: "How companies are addressing employee wellness post-pandemic",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    url: "/articles/5",
    date: "December 18, 2022",
    category: "Health",
    readTime: "9 min read"
  }
];

export const resumeData = {
  experience: [
    {
      id: 1,
      company: "Global News Network",
      role: "Senior Producer",
      period: "2020 - Present",
      description: "Lead producer for prime-time news segments, managing a team of reporters and coordinating live broadcasts. Developed award-winning documentary series on environmental issues."
    },
    {
      id: 2,
      company: "City News Channel",
      role: "News Producer",
      period: "2017 - 2020",
      description: "Produced daily news segments, conducted interviews, and edited video content. Specialized in political reporting and election coverage."
    },
    {
      id: 3,
      company: "Regional Media Group",
      role: "Associate Producer",
      period: "2015 - 2017",
      description: "Assisted in production of weekly news magazine, researched stories, and coordinated with field reporters. Developed digital content strategy that increased online engagement by 40%."
    }
  ],
  education: [
    {
      id: 1,
      institution: "Columbia University",
      degree: "Master of Science in Journalism",
      period: "2013 - 2015"
    },
    {
      id: 2,
      institution: "University of California, Berkeley",
      degree: "Bachelor of Arts in Communications",
      period: "2009 - 2013"
    }
  ],
  skills: [
    { id: 1, name: "Video Production", level: 5 },
    { id: 2, name: "Investigative Reporting", level: 5 },
    { id: 3, name: "Content Strategy", level: 4 },
    { id: 4, name: "Adobe Premiere Pro", level: 4 },
    { id: 5, name: "Leadership", level: 4 },
    { id: 6, name: "Social Media Management", level: 3 },
    { id: 7, name: "Data Journalism", level: 3 }
  ],
  certifications: [
    "Certified Broadcast Journalist (CBJ)",
    "Advanced Video Editing Certification",
    "Digital Media Strategy Certificate"
  ]
};

export const aboutData = {
  bio: "I'm Dana, a senior news producer with over 8 years of experience in broadcast journalism. My passion lies in crafting compelling narratives that inform and inspire audiences. Throughout my career, I've had the privilege of covering major global events, political developments, and social issues that shape our world.\n\nMy approach to journalism combines rigorous fact-checking, creative storytelling, and a commitment to ethical reporting. I believe in the power of journalism to drive positive change and hold power to account.",
  mission: "My mission is to produce high-quality journalism that cuts through the noise, providing audiences with clear, accurate, and contextual information they need to understand our complex world. I strive to amplify diverse voices and perspectives that are often overlooked in mainstream media coverage.",
  values: [
    "Accuracy and integrity in reporting",
    "Empathy and respect for subjects and sources",
    "Innovation in storytelling techniques",
    "Commitment to public service",
    "Continuous learning and adaptation"
  ]
};

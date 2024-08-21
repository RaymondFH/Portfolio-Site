import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: "AI-Powered Biblical Wisdom Tool",
    description: "An application that uses Claude AI to provide Biblical wisdom for problem-solving.",
    image: "/images/ai-bible-tool.jpg",
    tags: ["Next.js", "React", "AI Integration", "Claude API"],
    link: "https://ihaveaproblem.xyz"
  },
  {
    title: "League of Legends Performance Tracker",
    description: "A novelty Discord bot that tracks and reports player performance in League of Legends and Valorant games.",
    image: "/images/lol-tracker.jpg",
    tags: ["Python", "Discord API", "Riot Games API"],
    link: "https://github.com/RaymondFH/fee-dar"
  },
  {
    title: "Personal Blog",
    description: "A casual blog where I share insights on philosophy, my work, and technology.",
    image: "/images/tech-blog.jpg",
    tags: ["Next.js", "Content Creation", "SEO"],
    link: "https://coolguyblog.com"
  },
  {
    title: "Music Production Portfolio",
    description: "A collection of music albums I've written, produced, and/or engineered.",
    image: "/images/music-portfolio.jpg",
    tags: ["Audio Engineering", "Music Production", "Mixing"],
    link: "https://open.spotify.com/playlist/1vjNIw6GNF9LeBJYLvOiCE"
  },
  // Add more projects as needed
];

const PortfolioPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">My Portfolio</h1>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Explore a collection of my projects spanning web development, AI integration, audio engineering, and digital marketing. Each project represents a unique challenge and showcases my diverse skill set.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

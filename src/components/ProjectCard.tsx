import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <Link href={link} className="text-blue-600 hover:text-blue-800 font-semibold">
          View Project →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

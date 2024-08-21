import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="bg-gray-800 shadow-xl rounded-lg p-8 text-gray-200">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <Image 
          src="/your-photo.jpg" 
          alt="Raymond Housteau II" 
          width={200} 
          height={200} 
          className="rounded-full mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">Raymond Housteau II</h1>
          <p className="text-xl">
            A multifaceted professional with a passion for technology, creativity, and continuous learning.
          </p>
        </div>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
        <p className="mb-4">
          With a diverse skill set spanning digital marketing, audio engineering, and web development, I bring a unique perspective to every project I undertake. My experience includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2"><strong>Web Development</strong>: Proficient in modern web technologies including React, Next.js, and full-stack JavaScript development. I've created complex web applications, such as an AI-powered tool that provides Biblical wisdom (ihaveaproblem.xyz).</li>
          <li className="mb-2"><strong>Digital Marketing</strong>: Strong foundation in digital marketing strategies, content creation, and online presence optimization.</li>
          <li className="mb-2"><strong>Audio Engineering</strong>: Extensive experience in audio production, sound design, and music technology, showcasing my technical proficiency and creative problem-solving skills.</li>
          <li className="mb-2"><strong>Content Creation</strong>: Skilled in creating engaging, informative content, as demonstrated through my personal tech blog (coolguyblog.com).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects and Achievements</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Developed an AI wrapper tool that integrates Claude AI to solve problems using wisdom from the Bible.</li>
          <li className="mb-2">Created various Discord bots, including a League of Legends performance tracker and HuggingFace AI chatbot, showcasing my ability to work with APIs and create functional applications.</li>
          <li className="mb-2">Produced and engineered many music albums and songs for various artists across the world, handling everything from composition to final production and release strategy.</li>
          <li className="mb-2">Provided live sound for various clients including O.A.R., Live Nation, Ilthy, Kent State University, The City of Elyria, The City of Oberlin, and more. </li>
          <li className="mb-2">Continuously working on web development projects, always pushing to learn and apply new technologies.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Philosophy and Approach</h2>
        <p className="mb-4">
          I believe in the power of interdisciplinary thinking. My background in music and audio has given me a unique approach to problem-solving in the tech world. I'm a firm believer in continuous learning and am always excited to dive into new technologies and concepts.
        </p>
        <p className="mb-4">
          My goal is to bridge the gap between technical innovation and practical application, creating solutions that are not just functional, but also intuitive and impactful.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
        <p className="mb-4">
          I'm currently expanding my skills in full-stack developement and product management, particularly in the AI and machine learning space. I'm excited about the potential of AI to transform industries and am working on projects that integrate these cutting-edge technologies with user-friendly interfaces.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beyond Work</h2>
        <p className="mb-4">
          When I'm not coding or experimenting with new tech, you might find me working on music, reading about the latest tech trends, or exploring philosophical concepts. I'm always open to interesting conversations and new ideas!
        </p>
      </section>

      <div className="mt-8 bg-gray-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SkillTag skill="React" />
          <SkillTag skill="Next.js" />
          <SkillTag skill="JavaScript" />
          <SkillTag skill="Audio Engineering" />
          <SkillTag skill="Digital Marketing" />
          <SkillTag skill="Content Creation" />
          <SkillTag skill="AI Integration" />
          <SkillTag skill="Product Management" />
          <SkillTag skill="Full-Stack Development" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          View My Portfolio
        </Link>
      </div>
    </div>
  )
}

const SkillTag = ({ skill }: { skill: string }) => (
  <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
    {skill}
  </span>
)

export default AboutPage
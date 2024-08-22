import Link from 'next/link'
import { FaGithub, FaLinkedin, FaBlog, FaNewspaper } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Raymond Housteau II</h1>
        <p className="text-xl mb-8 text-gray-500">Web Developer | Audio Engineer | Digital Marketer</p>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 max-w-2xl mx-auto border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome to My Portfolio</h2>
          <p className="mb-6 text-gray-600">
            I blend creativity with technical expertise to build innovative web solutions. 
            Explore my work and discover how I can bring value to your next project.
          </p>
          <Link href="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            View My Portfolio
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Latest Project</h3>
            <p className="text-gray-600 mb-4">AI-powered Biblical Wisdom Tool</p>
            <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 transition duration-300">Learn More →</Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Recent Blog Post</h3>
            <p className="text-gray-600 mb-4">The Modern Renaissance Man</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition duration-300">Read More →</Link>
          </div>
        </div>
        
        {/* New links section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/RaymondFH" className="group flex flex-col items-center" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-gray-600 group-hover:text-blue-600 transition duration-300" />
              <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-600 transition duration-300">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rhousteauii/" className="group flex flex-col items-center" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-gray-600 group-hover:text-blue-600 transition duration-300" />
              <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-600 transition duration-300">LinkedIn</span>
            </a>
            <a href="https://coolguyblog.com" className="group flex flex-col items-center" target="_blank" rel="noopener noreferrer">
              <FaBlog className="text-4xl text-gray-600 group-hover:text-blue-600 transition duration-300" />
              <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-600 transition duration-300">Worklog</span>
            </a>
            <a href="https://substack.com/@coolguyblog" className="group flex flex-col items-center" target="_blank" rel="noopener noreferrer">
              <FaNewspaper className="text-4xl text-gray-600 group-hover:text-blue-600 transition duration-300" />
              <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-600 transition duration-300">Substack</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
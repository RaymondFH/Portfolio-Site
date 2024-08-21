import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center px-4 py-8">
      <h1 className="text-5xl font-bold mb-6 text-blue-400">Raymond Housteau II</h1>
      <p className="text-xl mb-8 text-blue-200">Web Developer | Audio Engineer | Digital Marketer</p>
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Welcome to My Digital Space</h2>
        <p className="mb-4 text-gray-300">
          I blend creativity with technical expertise to build innovative web solutions. 
          Explore my work and discover how I can bring value to your next project.
        </p>
        <Link href="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          View My Portfolio
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">Latest Project</h3>
          <p className="text-gray-300">AI-powered Biblical Wisdom Tool</p>
          <Link href="/portfolio" className="text-blue-400 hover:underline">Learn More</Link>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">Recent Blog Post</h3>
          <p className="text-gray-300">The Modern Renaissance Man</p>
          <Link href="/blog" className="text-blue-400 hover:underline">Read More</Link>
        </div>
      </div>
    </div>
  )
}
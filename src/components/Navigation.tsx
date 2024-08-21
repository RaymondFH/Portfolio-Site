import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-white text-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">RH II</Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-blue-600 transition duration-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition duration-300">About</Link></li>
          <li><Link href="/portfolio" className="hover:text-blue-600 transition duration-300">Portfolio</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600 transition duration-300">Blog</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
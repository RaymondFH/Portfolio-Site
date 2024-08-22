import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Blog</h1>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Explore my thoughts on web development, AI, audio engineering, and more. Here, I share insights, experiences, and reflections on my journey in tech and creativity.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(({ id, date, title, excerpt }) => (
            <Link href={`/blog/${id}`} key={id} className="block h-full">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{date}</p>
                  <p className="text-gray-700">{excerpt}</p>
                </div>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
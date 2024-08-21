import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>
      <div className="grid gap-8">
        {posts.map(({ id, date, title, excerpt }) => (
          <Link href={`/blog/${id}`} key={id} className="block">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold mb-2 text-blue-300">{title}</h2>
              <p className="text-gray-400 text-sm mb-4">{date}</p>
              <p className="text-gray-300">{excerpt}</p>
              <span className="inline-block mt-4 text-blue-400 hover:text-blue-300">Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
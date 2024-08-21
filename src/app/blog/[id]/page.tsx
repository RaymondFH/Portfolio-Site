import { getPostData, getSortedPostsData } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)

  return (
    <div className="container mx-auto px-4 py-8 text-gray-200">
      <h1 className="text-4xl font-bold mb-4 text-blue-300">{postData.title}</h1>
      <p className="text-gray-400 mb-4">{postData.date}</p>
      <div 
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        className="prose prose-invert max-w-none
          prose-headings:text-blue-300
          prose-p:text-gray-300
          prose-a:text-blue-400 hover:prose-a:text-blue-300
          prose-strong:text-gray-200
          prose-ul:text-gray-300 prose-ol:text-gray-300
          prose-li:marker:text-blue-500"
      />
    </div>
  )
}
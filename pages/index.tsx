import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Tumble Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPostsData.map(({ id, title, date }) => (
          <a key={id} href={`/blog/${id}`} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 block">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-500 text-sm">{date}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
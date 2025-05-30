import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map(file => ({
    params: { slug: file.replace('.md', '') }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join('posts', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      title: data.title,
      date: data.date,
      contentHtml,
    }
  }
}

export default function Post({ title, date, contentHtml }) {
  return (
    <article className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white max-w-2xl w-full shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{date}</p>
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </article>
  )
}
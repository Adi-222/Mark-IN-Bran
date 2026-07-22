import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const revalidate = 60

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug }
  })

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen px-4 md:px-6">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-primary mb-8 hover:underline underline-offset-4">
            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
            Back to Blog
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant">
              {post.author && (
                <div className="flex items-center">
                  <span className="font-medium mr-2">By {post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-on-surface-variant/50 mr-2"></span>
                </div>
              )}
              <time>
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          </header>

          {post.mainImage && (
            <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-2xl overflow-hidden bg-surface-variant">
              <Image
                src={post.mainImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                unoptimized
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            ) : (
              <p className="text-on-surface-variant">This post has no content.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

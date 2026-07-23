import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post = null;
  try {
    post = await prisma.post.findUnique({
      where: { slug: params.slug }
    });
  } catch (error) {
    console.error('Database connection error:', error);
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen px-4 md:px-6">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-primary mb-8 hover:opacity-80 transition-opacity font-medium tracking-wide uppercase text-xs">
            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
            Back to Blog
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight text-on-surface dark:text-[#EDEDED]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant dark:text-[#A0A0A0] font-medium tracking-wide text-sm uppercase">
              {post.author && (
                <div className="flex items-center">
                  <span className="mr-2">By {post.author}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
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
            <div className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-3xl overflow-hidden bg-surface-variant dark:bg-[#1A1A1A] shadow-2xl border border-outline-variant/10 dark:border-white/5">
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

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-p:leading-relaxed prose-p:text-on-surface/90 dark:prose-p:text-[#C8C8C8]">
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

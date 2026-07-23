import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'

export const revalidate = 60

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Prisma error during build:', error)
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-on-surface dark:text-[#EDEDED]">Blog</h1>
          
          {posts.length === 0 ? (
            <p className="text-on-surface-variant dark:text-[#A0A0A0] text-lg">No posts published yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col border border-outline-variant/30 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-colors bg-surface-container/30 dark:bg-white/[0.02] shadow-sm hover:shadow-md">
                  {post.mainImage ? (
                    <div className="relative h-48 w-full overflow-hidden bg-surface-variant dark:bg-[#1A1A1A]">
                      <Image
                        src={post.mainImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized // Because it's an external URL from anywhere
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-surface-variant dark:bg-[#1A1A1A] flex items-center justify-center">
                      <span className="text-on-surface-variant/50 dark:text-white/20 material-symbols-outlined text-4xl">image</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-primary mb-3 font-medium">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <h2 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors line-clamp-2 text-on-surface dark:text-[#EDEDED]">
                      {post.title}
                    </h2>
                    <p className="text-on-surface-variant dark:text-[#A0A0A0] mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-primary font-medium">
                      Read Article <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

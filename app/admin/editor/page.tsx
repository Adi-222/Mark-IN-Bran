'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function AdminEditor() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [mainImage, setMainImage] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const handleSlugify = () => {
    setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, slug, excerpt, content, mainImage, published: true })
      })

      if (res.ok) {
        setSuccess('Post published successfully!')
        setTitle('')
        setSlug('')
        setExcerpt('')
        setContent('')
        setMainImage('')
        // Could router.push('/blog') here
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to save post')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-[#0F0F0F] pt-24 px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Editor Form */}
        <div className="w-full lg:w-1/2 bg-surface-container border border-outline-variant/20 rounded-2xl p-6 shadow-sm">
          <h1 className="text-3xl font-display font-medium text-on-surface mb-8">Write a Post</h1>
          
          <form onSubmit={handleSave} className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium text-on-surface-variant mb-2 block">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={handleSlugify}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface"
                placeholder="Post title"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-on-surface-variant mb-2 block">Slug (URL)</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface"
                placeholder="post-url-slug"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-on-surface-variant mb-2 block">Image URL (Optional)</label>
              <input
                type="url"
                value={mainImage}
                onChange={(e) => setMainImage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface"
                placeholder="https://..."
              />
              <p className="text-xs text-on-surface-variant mt-2">Since you are using a raw MySQL database, you must paste a direct image URL here instead of uploading files.</p>
            </div>

            <div>
              <label className="text-sm font-medium text-on-surface-variant mb-2 block">Excerpt</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface h-20 resize-y"
                placeholder="Short summary for the blog list page..."
                required
              />
            </div>

            <div className="flex-grow flex flex-col">
              <label className="text-sm font-medium text-on-surface-variant mb-2 block">Content (Markdown)</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface min-h-[400px] resize-y font-mono text-sm"
                placeholder="Write your markdown here..."
                required
              />
            </div>

            {error && <p className="text-red-500 font-medium">{error}</p>}
            {success && <p className="text-green-500 font-medium">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary py-3 rounded-xl font-medium mt-4 hover:bg-primary/90 transition-colors disabled:opacity-70"
            >
              {loading ? 'Publishing...' : 'Publish Post'}
            </button>
          </form>
        </div>

        {/* Live Preview */}
        <div className="w-full lg:w-1/2 bg-surface-container border border-outline-variant/20 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col">
          <h2 className="text-xl font-display font-medium text-on-surface mb-6 border-b border-outline-variant/20 pb-4">Live Preview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none overflow-y-auto flex-grow pr-4">
            {title && <h1>{title}</h1>}
            {mainImage && <img src={mainImage} alt="Cover" className="w-full rounded-xl object-cover h-[300px]" />}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || '*Start writing to see preview...*'}
            </ReactMarkdown>
          </div>
        </div>

      </div>
    </div>
  )
}

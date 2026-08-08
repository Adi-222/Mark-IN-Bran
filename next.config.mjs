/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'images.unsplash.com', 'cdn.sanity.io']
    },
    async headers() {
        return [
            {
                // Force HTML and API routes to revalidate
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, must-revalidate',
                    },
                ],
            },
            {
                // Protect Next.js static assets with long-term caching
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    }
};

export default nextConfig;

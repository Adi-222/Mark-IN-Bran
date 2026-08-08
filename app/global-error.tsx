'use client';

import { useEffect, useState } from 'react';
import { Inter, Fraunces } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isChunkError, setIsChunkError] = useState(false);

  useEffect(() => {
    console.error('Next.js Global Root Error Caught:', error);
    
    const errorString = error?.message?.toLowerCase() || '';
    const isChunk = 
      error.name === 'ChunkLoadError' || 
      errorString.includes('loading chunk') || 
      errorString.includes('failed to fetch dynamically imported module');
      
    if (isChunk) {
      setIsChunkError(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [error]);

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-surface dark:bg-[#0F0F0F] text-on-surface dark:text-[#EDEDED] font-body min-h-screen flex items-center justify-center p-6 text-center">
        {isChunkError ? (
          <div className="max-w-md w-full bg-surface-container-low dark:bg-[#141414] p-8 rounded-3xl shadow-2xl border border-outline-variant/20 dark:border-white/10">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl animate-spin">sync</span>
            </div>
            <h2 className="text-xl font-serif font-bold mb-3">
              Updating to latest version...
            </h2>
            <p className="text-on-surface-variant dark:text-[#A0A0A0] text-sm">
              We found a new version of the website. Refreshing automatically to apply updates.
            </p>
          </div>
        ) : (
          <div className="max-w-md w-full bg-surface-container-low dark:bg-[#141414] p-8 rounded-3xl shadow-2xl border border-outline-variant/20 dark:border-white/10">
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">error</span>
            </div>
            
            <h2 className="text-2xl font-serif font-bold mb-4">
              Critical System Error
            </h2>
            
            <p className="text-on-surface-variant dark:text-[#A0A0A0] mb-8 text-sm leading-relaxed">
              A fatal error occurred in the root layout. The error details have been logged to the browser console.
            </p>
            
            <button
              onClick={() => reset()}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              Attempt Recovery
            </button>
          </div>
        )}
      </body>
    </html>
  );
}

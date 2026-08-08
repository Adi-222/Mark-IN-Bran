'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isChunkError, setIsChunkError] = useState(false);

  useEffect(() => {
    console.error('Next.js Client-Side Error Caught:', error);
    
    // Check if the error is related to missing JS chunks (stale HTML)
    const errorString = error?.message?.toLowerCase() || '';
    const isChunk = 
      error.name === 'ChunkLoadError' || 
      errorString.includes('loading chunk') || 
      errorString.includes('failed to fetch dynamically imported module');
      
    if (isChunk) {
      setIsChunkError(true);
      // Auto-reload the page to fetch the fresh HTML and new chunks
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [error]);

  if (isChunkError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-surface dark:bg-[#0F0F0F] text-center font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-surface-container-low dark:bg-[#141414] p-8 rounded-3xl shadow-2xl border border-outline-variant/20 dark:border-white/10"
        >
          <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl animate-spin">sync</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-on-surface dark:text-[#EDEDED] mb-3">
            Updating to latest version...
          </h2>
          <p className="text-on-surface-variant dark:text-[#A0A0A0] text-sm">
            We found a new version of the website. Refreshing automatically to apply updates.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-surface dark:bg-[#0F0F0F] text-center font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-surface-container-low dark:bg-[#141414] p-8 rounded-3xl shadow-2xl border border-outline-variant/20 dark:border-white/10"
      >
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-3xl">error</span>
        </div>
        
        <h2 className="text-2xl font-serif font-bold text-on-surface dark:text-[#EDEDED] mb-4">
          Something went wrong
        </h2>
        
        <p className="text-on-surface-variant dark:text-[#A0A0A0] mb-8 text-sm leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry, the exact technical details have been logged to the console for the developer.
        </p>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="w-full bg-surface dark:bg-[#202020] text-on-surface dark:text-[#EDEDED] px-6 py-3 rounded-xl font-medium hover:bg-surface-variant dark:hover:bg-[#2A2A2A] border border-outline-variant/30 dark:border-white/10 transition-all"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

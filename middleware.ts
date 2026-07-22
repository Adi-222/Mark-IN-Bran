import { NextRequest, NextResponse } from 'next/server';
import { updateSession, decrypt } from './lib/auth';

export async function middleware(request: NextRequest) {
  // Update session if it exists
  const res = await updateSession(request);

  // Protect /admin routes (except login) and /api/posts routes (for POST/PUT/DELETE)
  const pathname = request.nextUrl.pathname;
  const isProtectedAdminRoute = pathname.startsWith('/admin') && pathname !== '/admin';
  const isProtectedApiRoute = pathname.startsWith('/api/posts') && request.method !== 'GET';

  if (isProtectedAdminRoute || isProtectedApiRoute) {
    const session = request.cookies.get('session')?.value;
    
    if (!session) {
      if (isProtectedApiRoute) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    try {
      await decrypt(session);
    } catch (error) {
      if (isProtectedApiRoute) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return res || NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/posts/:path*'],
};

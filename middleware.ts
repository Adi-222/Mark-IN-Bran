import { NextRequest, NextResponse } from 'next/server';
import { updateSession, decrypt } from './lib/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Define our protected routes
  const isProtectedAdminRoute = pathname.startsWith('/admin') && pathname !== '/admin';
  const isProtectedApiRoute = pathname.startsWith('/api/posts') && request.method !== 'GET';

  // 1. If it's a protected route, strictly enforce session checking
  if (isProtectedAdminRoute || isProtectedApiRoute) {
    const session = request.cookies.get('session')?.value;
    
    if (!session) {
      if (isProtectedApiRoute) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    try {
      // Validate the token exists and is valid
      await decrypt(session);
    } catch (error) {
      // If token is expired or fake, boot them out
      if (isProtectedApiRoute) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      const response = NextResponse.redirect(new URL('/admin', request.url));
      response.cookies.delete('session'); // Clear the bad cookie
      return response;
    }
  }

  // 2. If they are authenticated (or on a public page), try to refresh their session token
  try {
    const res = await updateSession(request);
    return res || NextResponse.next();
  } catch (error) {
    // If update fails silently, just continue the request
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (e.g. .svg, .jpg, .jpeg)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|HEIC)$).*)',
  ],
};

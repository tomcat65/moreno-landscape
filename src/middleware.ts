import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Content Security Policy (CSP)
  // Allow self, Google Analytics, Google Tag Manager, and Formspree
  // Note: 'unsafe-inline' and 'unsafe-eval' needed for Next.js hydration
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://formspree.io",
    "frame-src 'none'", // Prevents embedding (clickjacking protection)
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://formspree.io",
    "frame-ancestors 'none'", // Prevents clickjacking (XFO alternative)
    "upgrade-insecure-requests",
    "require-trusted-types-for 'script'", // Trusted Types for DOM XSS protection
  ].join('; ');

  // Strict Transport Security (HSTS)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // Content Security Policy
  response.headers.set('Content-Security-Policy', csp);

  // Cross-Origin-Opener-Policy (COOP)
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

  // Cross-Origin-Resource-Policy (CORP) - prevents some cross-origin attacks
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

  // X-Frame-Options (redundant with CSP frame-ancestors but good for older browsers)
  response.headers.set('X-Frame-Options', 'DENY');

  // X-Content-Type-Options
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Referrer-Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions-Policy
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};


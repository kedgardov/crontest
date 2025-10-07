import { NextRequest, NextResponse } from "next/server";
import { SupportedLangs } from "./locales/locales";

const locales = ['en', 'es'];

function getLocale(r: NextRequest): SupportedLangs {
    const loc = r.headers.get('accept-language');
    if ( !loc ) return "en"
    const l = loc.split('-')[0];
    if ( l === 'es' ) return 'es';
    return 'en';
}

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some( l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`);
    
    if ( pathnameHasLocale ) return NextResponse.next();

    const l = getLocale(request);
    request.nextUrl.pathname = `/${l}${pathname}`;
    return NextResponse.redirect(request.nextUrl);

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
        '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
    ],
}
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "./lib/i18n";

const LOCALE_HEADER = "x-locale";

function pathnameHasLocale(pathname: string): boolean {
  return locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/" || pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && !isLocale(first)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}/${segments.join("/")}`;
    return NextResponse.redirect(url);
  }

  if (!pathnameHasLocale(pathname)) {
    return NextResponse.next();
  }

  const locale = isLocale(first ?? "") ? first! : defaultLocale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

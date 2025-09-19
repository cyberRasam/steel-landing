import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Only redirect if user is on the root path
  if (pathname === "/") {
    if (hostname.includes("raspina.shop")) {
      return NextResponse.redirect(new URL("/raspina", request.url));
    } else if (hostname.includes("dibajahansanat.site")) {
      return NextResponse.redirect(new URL("/diba", request.url));
    }
    // Default fallback
    return NextResponse.redirect(new URL("/raspina", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

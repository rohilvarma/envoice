import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./lib/constants";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Authentication logic
  const isLoginPath = path === ROUTES.LOGIN;
  const isAuthenticated = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  if (isAuthenticated) {
    // Redirect from login to dashboard
    if (isLoginPath) {
      return NextResponse.redirect(new URL(ROUTES.DASHBOARD.ROOT, request.url));
    }

    // const nextResponse = NextResponse.next();
    // nextResponse.headers.set("X-Requested-Path", path);
    // return nextResponse;
  } else {
    if (!isLoginPath) {
      return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
    }
  }

  return NextResponse.next();
}

import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./lib/constants";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === ROUTES.LOGIN;
  
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET
  })

  if (isPublicPath && token){
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url))
  }

  if(!isPublicPath && !token) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    `/dashboard`,
    '/login'
  ]
}

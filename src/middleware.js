import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  const cookieStore = cookies().get("access")?.value;
  if (!cookieStore) return NextResponse.redirect(new URL("/", request.url));
  console.log(cookieStore);
}
export const config = {
  matcher: "/admin-dashboard/:path*",
};

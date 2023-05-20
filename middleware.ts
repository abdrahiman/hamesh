import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// export const config = { matcher: ["/dashboard/:path*"] };
export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: new Headers(request.headers),
    },
  });

  // let res = await fetch(`${request.nextUrl.origin}/api/getSession`, {
  //   method: "GET",
  // });
  // let user = await res.json();
  // if (user?.isAdmin) {
  //   return response;
  // } else {
  //   return NextResponse.redirect(`${request.nextUrl.origin}/auth`);
  // }
  return response;
}

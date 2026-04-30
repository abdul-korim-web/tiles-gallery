// import { NextResponse } from "next/server";
// import { auth } from "@/lib/auth";

// export async function proxy(request) {
//   const session = await auth.api.getSession({
//     headers: request.headers,
//   });

//   const pathname = request.nextUrl.pathname;

//   if (!session) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/tiles","/tiles/:path", "/profile"],
// };

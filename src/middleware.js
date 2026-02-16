import { auth } from '@/lib'

/* For reference
import { NextResponse } from "next/server"

export default function middleware(request) {
  console.log('req: ', request)
  return NextResponse.redirect(new URL("/about", request.url))
}
*/

export default middleware = auth

export const config = {
  matcher: ['/account'],
}

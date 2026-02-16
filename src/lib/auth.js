import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // const authorized = !!auth?.user
      // if (!authorized)
      //   return Response.redirect(new URL('/api/auth/signin', request.url))
      return !!auth?.user
    },
  },
  pages: {
    signIn: '/login',
  },
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig)

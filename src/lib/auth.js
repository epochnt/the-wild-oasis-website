import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { createGuest, getGuest } from '@/lib/data-service'

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
    //sign in runs after the success for signIn but before the session has started (middleware middleware)
    async signIn({ user, account, profile }) {
      console.log(user, profile, account)
      try {
        const guest = await getGuest(user.email)
        if (!guest)
          await createGuest({ email: user.email, fullName: user.name })
        return true
      } catch (error) {
        return false
      }
    },

    async session({ session }) {
      const guest = await getGuest(session.user.email)
      session.user.guestId = guest.id
      return session
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

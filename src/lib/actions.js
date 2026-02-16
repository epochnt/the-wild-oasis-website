'use server'

import { signIn, signOut } from './auth'

export async function signInAction() {
  // @arg 1 provider/s -> you can also dynamically pick the list from /api/auth/providers
  // @arg 2 path to redirect when auth passes
  await signIn('google', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}

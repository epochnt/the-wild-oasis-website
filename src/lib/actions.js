'use server'

import { auth, signIn, signOut } from '@/lib/auth'
import { deleteBooking, getBookings, updateGuest } from '@/lib/data-service'
import { revalidatePath } from 'next/cache'

// Mutations
export async function updateProfile(formData) {
  const session = await auth()
  if (!session) throw new Error('You must be logged in')

  const nationalID = formData.get('nationalID')
  const [nationality, countryFlag] = formData.get('nationality')?.split('%')

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error('Please provide a valid national Id')

  const updateData = { nationalID, nationality, countryFlag }
  await updateGuest(session.user.guestId, updateData)

  revalidatePath('/account/profile')
}

export async function deleteReservationAction(bookingId) {
  const session = await auth()
  if (!session) throw new Error('You must be logged in')

  const guestBookings = await getBookings(session.user.guestId)
  const validId = guestBookings.some(booking => booking.id === bookingId)

  if (!validId) throw new Error('You are not allowed to deleted this booking')
  await deleteBooking(bookingId)

  revalidatePath('/account/reservations')
}

// Auth actions
export async function signInAction() {
  // @arg 1 provider/s -> you can also dynamically pick the list from /api/auth/providers
  // @arg 2 path to redirect when auth passes
  await signIn('google', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}

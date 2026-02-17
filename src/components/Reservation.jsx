import { getBookedDatesByCabinId, getSettings, auth } from '@/lib'
import { DateSelector } from './DateSelector'
import { ReservationForm } from './ReservationForm'
import { LoginMessage } from './LoginMessage'

export async function Reservation({ cabin }) {
  const [settings, bookedDates, session] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
    auth(),
  ])

  return (
    <div className="border-primary-800 grid min-h-100 grid-cols-2 overflow-hidden border">
      <DateSelector {...{ cabin, settings, bookedDates }} />
      {session ? (
        <ReservationForm {...cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  )
}

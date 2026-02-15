import { getBookedDatesByCabinId, getSettings } from '@/lib'
import { DateSelector } from './DateSelector'
import { ReservationForm } from './ReservationForm'

export async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ])
  return (
    <div className="border-primary-800 grid min-h-100 grid-cols-2 border">
      <DateSelector {...{ cabin, settings, bookedDates }} />
      <ReservationForm maxCapacity={cabin.maxCapacity} />
    </div>
  )
}

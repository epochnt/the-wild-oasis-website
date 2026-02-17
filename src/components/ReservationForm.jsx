'use client'

import Image from 'next/image'
import { differenceInDays } from 'date-fns'
import { useReservation } from '@/context'
import { createReservationAction } from '@/lib/actions'
import { SumbitButton } from '@/components/SumbitButton'

export function ReservationForm({
  maxCapacity,
  id,
  regularPrice,
  discount,
  user,
}) {
  const { range = {}, resetRange } = useReservation()

  const startDate = range.from
  const endDate = range.to

  const numNights = differenceInDays(endDate, startDate)
  const cabinPrice = numNights * (regularPrice - discount)

  const reservationData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  }
  const createReservation = createReservationAction.bind(null, reservationData)

  return (
    <div className="items-stretch">
      <div className="bg-primary-800 text-primary-300 flex items-center justify-between px-16 py-2">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <Image
            referrerPolicy="no-referrer"
            className="rounded-full"
            src={user.image}
            alt={user.name}
            height={32}
            width={32}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async formData => {
          await createReservation(formData)
          resetRange()
        }}
        className="bg-primary-900 flex h-full flex-col gap-5 px-16 py-10 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(x => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SumbitButton pendingLabel="...Booking">Reserve Now</SumbitButton>
          )}
        </div>
      </form>
    </div>
  )
}

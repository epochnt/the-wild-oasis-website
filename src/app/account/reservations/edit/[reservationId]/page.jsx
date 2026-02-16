import { SumbitButton } from '@/components/SumbitButton'
import { getBooking, getCabin, updateReservationAction } from '@/lib'

export const metadata = {
  title: 'Edit Reservation',
}

export default async function Page({ params }) {
  const { reservationId } = await params
  const { numGuests, cabinId, observations } = await getBooking(
    reservationId,
    'numGuests,cabinId, observations'
  )
  const { maxCapacity } = await getCabin(cabinId, 'maxCapacity')

  return (
    <div>
      <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
        Edit Reservation #{reservationId}
      </h2>

      <form
        action={updateReservationAction}
        className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
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
            defaultValue={observations}
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SumbitButton pendingLabel="Updating...">
            Update Reservation
          </SumbitButton>
        </div>
        <input
          name="bookingId"
          hidden={true}
          type="text"
          defaultValue={reservationId}
        />
      </form>
    </div>
  )
}

function Button() {}

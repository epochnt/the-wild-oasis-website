import { getBookedDatesByCabinId, getCabin } from '@/lib'

export async function GET(Request, { params }) {
  const { cabinId } = await params
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ])
    return Response.json({ cabin, bookedDates })
  } catch (error) {
    return Response.json({ message: error.message ?? 'Error Cabin Not Found' })
  }
}

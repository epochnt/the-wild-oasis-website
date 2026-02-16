import { SelectCountry, UpdateProfileForm } from '@/components'
import { auth, getGuest } from '@/lib'

export const metaData = {
  title: 'Update Profile',
}

export default async function Page() {
  const { user } = await auth()
  const guest = await getGuest(user.email)

  return (
    <UpdateProfileForm guest={guest}>
      <SelectCountry
        name="nationality"
        id="nationality"
        className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
        defaultCountry={guest.nationality}
      />
    </UpdateProfileForm>
  )
}

import { getCurrentGuest } from '@/app/services/guest.service'

export const getGuestData = async (id:string, pin:string) => {
  const data = await getCurrentGuest(id, pin)

  return data
}
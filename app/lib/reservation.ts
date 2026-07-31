import { getSmartRSV } from '@/app/services/reservation.service'

export const getSmartRSVData = async (id:string, pin:string) => {
  const data = await getSmartRSV(id, pin)

  return data
}
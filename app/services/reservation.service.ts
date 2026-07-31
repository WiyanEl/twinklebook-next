const API_URL = 'https://api.twinklebook.com'

export const getSmartRSV = async (id:string, pin: string) => {
  const res = await fetch(`${API_URL}/api/Event/GetSmartRSVPData?url=ervanandadelyn&pin=638510`)

  if (!res.ok) {
    throw new Error('Failed get smart rsvp')
  }

  return res.json()
}
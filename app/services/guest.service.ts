const API_URL = 'https://api.twinklebook.com'

export const getCurrentGuest = async (id:string, pin: string) => {
  const res = await fetch(`${API_URL}/api/Event/GetCurrentGuest?url=${id}&pin=${pin}`)

  if (!res.ok) {
    throw new Error('Failed get current guest')
  }

  return res.json()
}
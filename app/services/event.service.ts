const API_URL = 'https://api.twinklebook.com'

export const getCurrentEvent = async (url: string) => {
  const res = await fetch(
    `${API_URL}/api/Event/GetCurrentEvent?url=${url}`,
    {
      cache: 'no-store',
    }
  )

  // if (!res.ok) {
  //   throw new Error('Failed get current event')
  // }

  return res.json()
}

export const getEventContent = async (id: number) => {
  const res = await fetch(
    `${API_URL}/api/Event/GetEventContent?id=${id}`,
    {
      cache: 'no-store',
    }
  )

  // if (!res.ok) {
  //   throw new Error('Failed get event content')
  // }

  return res.json()
}
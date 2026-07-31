const API_URL = 'https://api.twinklebook.com'

export const getCurrentEvent = async (url: string) => {
  const res = await fetch(`${API_URL}/api/Event/GetCurrentEvent?url=${url}`)

  if (!res.ok) {
    throw new Error('Failed get current event')
  }

  return res.json()
}

export const getEventTemplate = async (id: string) => {
  const res = await fetch(`${API_URL}/web/api/Template/GetSingleItem?id=${id}`)
  
  if (!res.ok) {
    throw new Error('Failed get event template')
  }

  return res.json()
}

export const getEventContent = async (id: string) => {
  const res = await fetch(`${API_URL}/api/Event/GetEventContent?id=${id}`)
  
  if (!res.ok) {
    throw new Error('Failed get event content')
  }

  return res.json()
}

export const getGuestEventSessionByPinNew = async (id: string, pin:string) => {
  const res = await fetch(`${API_URL}/api/Event/GetGuestEventSessionByPinNew?pin=${pin}&eventId=${id}`)

  if (!res.ok) {
    throw new Error('Failed get guest event session by pin new')
  }

  return res.json()
}

export const GetAllPersonalGuestMessages = async (id: string) => {
  const res = await fetch(`${API_URL}/api/Event/GetAllPersonalGuestMessages?eventId=${id}`)

  if (!res.ok) {
    throw new Error('Failed get event all message')
  }

  return res.json()
}

export const OpenInvitation = async (payload: Record<string, any>) => {
  const response = await fetch(`${API_URL}/api/Event/OpenInvitation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to open invitation');
  }

  return response.json();
}

export const SubmitPersonalGuestMessage = async (payload: Record<string, any>) => {
  const response = await fetch(`${API_URL}/api/Event/SubmitPersonalGuestMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to submit personal guest message');
  }

  return response.json();
}

import { getCurrentEvent, getEventContent, getEventTemplate, getGuestEventSessionByPinNew, GetAllPersonalGuestMessages, OpenInvitation, SubmitPersonalGuestMessage } from '@/app/services/event.service'

let eventId = ''
let templateId = ''

export const getEventData = async (url: string) => {

  const data = await getCurrentEvent(url)

  eventId = data.id
  templateId = data.templateId

  return data
}

export const getContentData = async () => {
  const data = await getEventContent(eventId)

  return data
}

export const getEventTemplateData = async () => {
  const data = await getEventTemplate(templateId)

  return data
}

export const getGuestEventSessionByPinNewData = async (id:string) => {
  const data = await getGuestEventSessionByPinNew(eventId, id)

  return data
}

export const GetAllPersonalGuestMessagesData = async (id?: string) => {
  const data = await GetAllPersonalGuestMessages(id ?? eventId)

  return data
}

export const PostOpenInvitation = async (payload: Record<string, any>) => {
  const data = await OpenInvitation(payload)

  return data
}

export const PostPersonalGuestMesage = async (payload: Record<string, any>) => {
  const data = await SubmitPersonalGuestMessage(payload)

  return data
}
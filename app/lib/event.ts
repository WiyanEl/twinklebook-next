import {
  getCurrentEvent,
  getEventContent,
} from '@/app/services/event.service'

import { buildEventData } from './parser'

export const getEventData = async (url: string) => {

  const dataEvent = await getCurrentEvent(url)

  const eventId = dataEvent.eventID

  const dataContent = await getEventContent(eventId)

  return buildEventData(
    dataEvent,
    dataContent
  )
}
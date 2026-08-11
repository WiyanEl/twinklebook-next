import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { getEventData, getContentData, getEventTemplateData, getGuestEventSessionByPinNewData, GetAllPersonalGuestMessagesData } from '@/app/lib/event'
import { getGuestData } from '@/app/lib/guest'
import { getSmartRSVData } from '@/app/lib/reservation'
import WeddingKevinMichelle from '@/app/components/WeddingKevinMichelle'
import WeddingRonaldVissi from '@/app/components/WeddingRonaldVissi'

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  const template = await getEventTemplateData()

  return {
    title: template?.title ?? 'Wedding Invitation'
  }
}

export default async function Page({
    params,
}: Props) {

  const { id } = await params
  const pin = (await cookies()).get('pin')!.value

  const event = await getEventData(id)
  const content = await getContentData()
  const template = await getEventTemplateData()
  const guest = await getGuestData(id, pin)
  const reservation = await getSmartRSVData(id, pin)
  const eventSession = await getGuestEventSessionByPinNewData(pin)
  const messages = await GetAllPersonalGuestMessagesData()

  const data = {
    event: event,
    content: content,
    template: template,
    guest: guest,
    reservation: reservation,
    eventSession: eventSession,
    messages: messages
  }

  return (
    <WeddingRonaldVissi
      data={data}
      isPreview={false}
      dataValidation={null}
    />
  )
}
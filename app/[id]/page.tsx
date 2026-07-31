import { getEventData } from '@/app/lib/event'
import WeddingKevinMichelle from '@/app/components/WeddingKevinMichelle'

interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function Page({
    params,
}: Props) {

  const { id } = await params

  const data = await getEventData(id)

  return (
    <WeddingKevinMichelle
      data={{}}
      isPreview={false}
      dataValidation={null}
    />
  )
}
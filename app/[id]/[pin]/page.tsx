'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  params: Promise<{
    id: string
    pin: string
  }>
}

export default function Page({
  params,
}: Props) {

  const router = useRouter()

  useEffect(() => {
    params.then(({ id, pin }) => {
      localStorage.setItem('pin', pin)
      document.cookie = `pin=${pin}; path=/`;
      router.replace(`/${id}`);
    })
  }, [params, router])

  return (
    <div className="flex h-screen items-center justify-center">
      Loading...
    </div>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { useMemo } from 'react'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { usePreloader } from '../../hooks/preLoader'
import SectionLoading from '../Loader/SectionLoading'

import Header from './Header'
import Hero from './Hero'
import Profile from './Profile'
import CountingDown from './CountingDown'
import Location from './Location'
import PlacesToStay from './PlacesToStay'
import Gallery from './Gallery'
import Dresscode from './Dresscode'
import WeddingGift from './WeddingGift'
// import ThingsToDo from './ThingsToDo'
import Wishes from './Wishes'
import Footer from './Footer'

interface Props {
  data: any
  isPreview: boolean
  dataValidation: any
}

export default function WeddingAryaRana({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  console.log(data)
  
  const dataEvent = data?.event
  const dataContent = data?.content
  const dataGallery = dataContent?.galleryImageData

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)

    check()

    window.addEventListener('resize', check)

    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.animate')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const animation = el.dataset?.animate

            if (animation) {
              el.classList.add(animation)
            }
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isOpen])

  useEffect(() => {
    if (!audioRef.current) return

    if (isOpen) {
      audioRef.current.play().catch((error) => {
        console.log('Audio gagal diputar:', error)
      })
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [isOpen])

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current

      if (!audio) return

      if (document.hidden) {
        audio.pause()
        setIsPlaying(false)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const mediaUrls = useMemo(() => {
    if (!data) {
      return []
    }

    const galleryImages = (dataGallery ?? []).map(
      (item: any) =>
      `https://media.twinklebook.com/${item.url}`
    )

    const primaryImage = dataContent?.primaryImageData?.[0]?.url ? `https://media.twinklebook.com/${dataContent.primaryImageData[0].url}` : null

    return [
      ...galleryImages,
      , primaryImage
    ].filter(Boolean)
  }, [data, dataGallery])

  const {
    loaded,
    progress,
  } = usePreloader(
    data !== null
      ? mediaUrls
      : null
  )

  if (!loaded) {
    return (
      <SectionLoading
        progress={progress}
      />
    )
  }

  const toggleAudio = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Audio play failed:', error)
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={`https://media.twinklebook.com/${dataContent?.backgroundSoundData?.url}`}
      />
      <Header isOpen={isOpen} />
      <Hero data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Profile data={data} isOpen={isOpen} />
      <CountingDown data={data} isOpen={isOpen} />
      <Location data={data} isOpen={isOpen} />
      <PlacesToStay data={data} isOpen={isOpen} />
      <Gallery data={data} isMobile={isMobile} />
      <Dresscode data={data} isOpen={isOpen} />
      <WeddingGift data={data} isOpen={isOpen} />
      {/* <ThingsToDo data={data} isOpen={isOpen} /> */}
      <Wishes data={data} isOpen={isOpen} />
      <Footer data={data} isOpen={isOpen} />
      <button type="button" onClick={toggleAudio} aria-label={isPlaying ? 'Pause music' : 'Play music'} className="
          fixed
          z-[999]
          right-[20px]
          bottom-[20px]
          md:right-[30px]
          md:bottom-[30px]
          w-[45px]
          h-[45px]
          md:w-[50px]
          md:h-[50px]
          rounded-full
          flex
          items-center
          justify-center
          bg-black/40
          backdrop-blur-sm
          border
          border-white/40
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-black/60
          active:scale-90
        "
      >
        {isPlaying ? (
          <HiVolumeUp className="text-[21px]" />
        ) : (
          <HiVolumeOff className="text-[21px]" />
        )}
      </button>
    </>
  )
}
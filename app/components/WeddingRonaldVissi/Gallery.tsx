'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

import 'swiper/css'
import 'swiper/css/pagination'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

type Props = {
  data: any
  isOpen: boolean
  isMobile: boolean
}

type GalleryImage = {
  src: string
  thumb: string
}

export default function Gallery({ data, isOpen, isMobile }: Props) {
  const galleryRef = useRef<any>(null)
  const dataContent = data?.content
  const dataGallery = dataContent?.galleryImageData

  const images: GalleryImage[] = dataGallery.map((item: any) => {
    const imageUrl = `https://media.twinklebook.com/${item.url}`

    return {
      src: imageUrl,
      thumb: imageUrl,
    }
  })

  // if (isMobile) {
  //   images = [
  //     {
  //       src: '/images/ronald-dan-vissi/mobile/img-gallery-1.png',
  //       thumb: '/images/ronald-dan-vissi/mobile/img-gallery-1.png'
  //     },
  //     {
  //       src: '/images/ronald-dan-vissi/mobile/img-gallery-1.png',
  //       thumb: '/images/ronald-dan-vissi/mobile/img-gallery-1.png'
  //     },
  //   ]
  // } else {
  //   images = [
  //     {
  //       src: '/images/ronald-dan-vissi/mobile/img-gallery-1.png',
  //       thumb: '/images/ronald-dan-vissi/mobile/img-gallery-1.png'
  //     },
  //     {
  //       src: '/images/ronald-dan-vissi/mobile/img-gallery-1.png',
  //       thumb: '/images/ronald-dan-vissi/mobile/img-gallery-1.png'
  //     },
  //   ]
  // }

  const openGallery = (index: number) => {
    galleryRef.current?.openGallery(index)
  }

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="relative w-full overflow-hidden px-[25px] pb-[80px]">
          <div
            className="h-full"
          >
            <Swiper
              pagination={{ dynamicBullets: true, clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="cursor-pointer" onClick={() => openGallery(i)}>
                    <Image
                      src={img.src}
                      alt={`Gallery ${i}`}
                      width={1531}
                      height={945}
                      className="w-[398px] h-[460px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <LightGallery
              onInit={(ref) => (galleryRef.current = ref.instance)}
              dynamic
              dynamicEl={images}
              plugins={[lgZoom, lgThumbnail]}
              speed={500}
            />
          </div>
        </div>
      </section>
    </>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

import 'swiper/css'
import 'swiper/css/pagination'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

type Props = {
  isOpen: boolean
  isMobile: boolean
}

export default function Gallery({ isOpen, isMobile }: Props) {
  const galleryRef = useRef<any>(null)

  let images = []

  if (isMobile) {
    images = [
      {
        src: '/images/kevin-dan-michelle/img-gallery-1-mobile.png',
        thumb: '/images/kevin-dan-michelle/img-gallery-1-mobile.png'
      },
      {
        src: '/images/kevin-dan-michelle/img-gallery-1-mobile.png',
        thumb: '/images/kevin-dan-michelle/img-gallery-1-mobile.png'
      },
    ]
  } else {
    images = [
      {
        src: '/images/kevin-dan-michelle/img-gallery-1.png',
        thumb: '/images/kevin-dan-michelle/img-gallery-1.png'
      },
      {
        src: '/images/kevin-dan-michelle/img-gallery-1.png',
        thumb: '/images/kevin-dan-michelle/img-gallery-1.png'
      },
    ]
  }

  const openGallery = (index: number) => {
    galleryRef.current?.openGallery(index)
  }

  return (
    <>
      {isOpen ? (
        <section id="gallery" className="gallery">
          <div className="relative w-full overflow-hidden">
            <div
              className="h-full"
            >
              <Swiper
                pagination={{ dynamicBullets: true, clickable: true }}
                modules={[Pagination]}
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="cursor-pointer" onClick={() => openGallery(i)}>
                      <Image
                        src={img.src}
                        alt={`Gallery ${i}`}
                        width={1531}
                        height={945}
                        className="w-[398px] md:w-full h-[598px] md:h-[949px] object-cover"
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
      ) : null}
    </>
  )
}
'use client'

import { useEffect, useState } from 'react'

const BREAKPOINT = 1024

const IMAGES_DESKTOP: string[] = [
    '/images/ronald-dan-vissi/desktop/bg-hero.png',
    '/images/ronald-dan-vissi/desktop/img-popup-hero.png',
]

const IMAGES_MOBILE: string[] = [
    '/images/ronald-dan-vissi/mobile/arrow-right.png',
    '/images/ronald-dan-vissi/mobile/bg-counting-down.png',
    '/images/ronald-dan-vissi/mobile/bg-footer.png',
    '/images/ronald-dan-vissi/mobile/bg-profile.png',
    '/images/ronald-dan-vissi/mobile/bg-wedding-gift.png',
    '/images/ronald-dan-vissi/mobile/bg-wishes.png',
    '/images/ronald-dan-vissi/mobile/icon-checked-fill.png',
    '/images/ronald-dan-vissi/mobile/icon-checked.png',
    '/images/ronald-dan-vissi/mobile/icon-menu-toggle.png',
    '/images/ronald-dan-vissi/mobile/icon-message.png',
    '/images/ronald-dan-vissi/mobile/icon-question.png',
    '/images/ronald-dan-vissi/mobile/icon-send.png',
    '/images/ronald-dan-vissi/mobile/icon-warning.png',
    '/images/ronald-dan-vissi/mobile/icon-whatsapp.png',
    '/images/ronald-dan-vissi/mobile/img-gallery-1.png',
    '/images/ronald-dan-vissi/mobile/img-iman-seiman.png',
    '/images/ronald-dan-vissi/mobile/img-pengantin-pria.png',
    '/images/ronald-dan-vissi/mobile/img-pengantin-wanita.png',
    '/images/ronald-dan-vissi/mobile/img-popup-hero.png',
    '/images/ronald-dan-vissi/mobile/logo-provite.png',
]

const MEDIA_COMMON: string[] = [
    '/images/ronald-dan-vissi/mobile/video-bg-hero.mp4',
]

function preloadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
        const img = new Image()

        img.onload = () => resolve()
        img.onerror = () => resolve()

        img.src = src
    })
}

export function usePreloader(mediaUrls: string[] | null) {
    const [progress, setProgress] = useState(0)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (mediaUrls === null) {
        return
        }

        const isDesktop = window.innerWidth >= BREAKPOINT

        const staticImages = [
        ...(isDesktop ? IMAGES_DESKTOP : IMAGES_MOBILE),
        ...MEDIA_COMMON,
        ]

        const mediaToLoad = [
        ...staticImages,
        ...mediaUrls,
        ]

        const uniqueMedia = [...new Set(mediaToLoad)]

        const total = uniqueMedia.length

        if (total === 0) {
        setProgress(100)
        setLoaded(true)
        return
        }

        let count = 0

        uniqueMedia.forEach((src) => {
        preloadImage(src).finally(() => {
            count++

            const currentProgress = Math.round(
            (count / total) * 100
            )

            setProgress(currentProgress)

            if (count === total) {
            setLoaded(true)
            }
        })
        })
    }, [mediaUrls])

    return {
        loaded,
        progress,
    }
}
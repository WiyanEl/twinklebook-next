'use client'

import { useEffect, useState } from 'react'

const BREAKPOINT = 1024

const IMAGES_DESKTOP: string[] = [
    // '/images/arya-dan-rana/desktop/bg-hero.png',
    // '/images/arya-dan-rana/desktop/img-popup-hero.png',
]

const IMAGES_MOBILE: string[] = [
    '/images/arya-dan-rana/mobile/arrow-right.png',
    '/images/arya-dan-rana/mobile/bg-counting-down.png',
    '/images/arya-dan-rana/mobile/bg-footer.png',
    '/images/arya-dan-rana/mobile/bg-hero.png',
    '/images/arya-dan-rana/mobile/bg-kertas-profile.png',
    '/images/arya-dan-rana/mobile/bg-kertas-wedding-gift.png',
    '/images/arya-dan-rana/mobile/bg-location.png',
    '/images/arya-dan-rana/mobile/bg-profile.png',
    '/images/arya-dan-rana/mobile/bg-wedding-gift.png',
    '/images/arya-dan-rana/mobile/bg-wishes.png',
    '/images/arya-dan-rana/mobile/icon-checked-fill.png',
    '/images/arya-dan-rana/mobile/icon-checked.png',
    '/images/arya-dan-rana/mobile/icon-menu-toggle.png',
    '/images/arya-dan-rana/mobile/icon-message.png',
    '/images/arya-dan-rana/mobile/icon-question.png',
    '/images/arya-dan-rana/mobile/icon-send.png',
    '/images/arya-dan-rana/mobile/icon-warning.png',
    '/images/arya-dan-rana/mobile/icon-whatsapp.png',
    '/images/arya-dan-rana/mobile/img-atas-dresscode.png',
    '/images/arya-dan-rana/mobile/img-bawah-dresscode.png',
    '/images/arya-dan-rana/mobile/img-dresscode.png',
    '/images/arya-dan-rana/mobile/img-gallery-1.png',
    '/images/arya-dan-rana/mobile/img-gelas-location.png',
    '/images/arya-dan-rana/mobile/img-kanan-atas-hero.png',
    '/images/arya-dan-rana/mobile/img-kanan-atas-location.png',
    '/images/arya-dan-rana/mobile/img-kanan-atas-profile.png',
    '/images/arya-dan-rana/mobile/img-kanan-atas-wedding-gift.png',
    '/images/arya-dan-rana/mobile/img-kanan-bawah-hero.png',
    '/images/arya-dan-rana/mobile/img-kanan-bawah-location.png',
    '/images/arya-dan-rana/mobile/img-kanan-bawah-profile.png',
    '/images/arya-dan-rana/mobile/img-kanan-bawah-wedding-gift.png',
    '/images/arya-dan-rana/mobile/img-kiri-atas-hero.png',
    '/images/arya-dan-rana/mobile/img-kiri-atas-location.png',
    '/images/arya-dan-rana/mobile/img-kiri-atas-profile.png',
    '/images/arya-dan-rana/mobile/img-kiri-atas-wedding-gift.png',
    '/images/arya-dan-rana/mobile/img-kiri-bawah-hero.png',
    '/images/arya-dan-rana/mobile/img-kiri-bawah-location.png',
    '/images/arya-dan-rana/mobile/img-kiri-bawah-profile.png',
    '/images/arya-dan-rana/mobile/img-kiri-bawah-wedding-gift.png',
    '/images/arya-dan-rana/mobile/img-kiri-tengah-profile.png',
    '/images/arya-dan-rana/mobile/logo-bca.png',
    '/images/arya-dan-rana/mobile/logo-provite.png',
    '/images/arya-dan-rana/mobile/logo-singkatan-pengantin.png',
]

const MEDIA_COMMON: string[] = [
    // '/images/ronald-dan-vissi/mobile/video-bg-hero.mp4',
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
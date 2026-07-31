'use client'

export const useScrollSmooth = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return

    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    handleScrollDown
  }
}
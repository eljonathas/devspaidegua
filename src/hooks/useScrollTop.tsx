import { useState, useEffect } from 'react'

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollTop
}

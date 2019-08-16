import { useState, useEffect } from 'react'

export function useScroll() {
  const [isReachedBottom, setIsReachedBottom] = useState()

  const handleScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight

    setIsReachedBottom(scrolledToBottom)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { isReachedBottom }
}

export default {
  useScroll,
}

import React, { useEffect, useRef } from 'react'
import { Howl } from 'howler'

const MUSIC_SRC = `${import.meta.env.BASE_URL}audio/music.mp3`

export default function Player(){
  const soundRef = useRef<Howl | null>(null)
  const fallbackRef = useRef<HTMLAudioElement | null>(null)
  const played = useRef(false)

  useEffect(()=>{
    const fallback = new Audio(MUSIC_SRC)
    fallback.loop = true
    fallback.volume = 0.6
    fallback.preload = 'auto'
    fallbackRef.current = fallback

    const howl = new Howl({
      src: [MUSIC_SRC],
      loop: true,
      volume: 0.6,
      preload: true,
    })

    howl.on('playerror', ()=>{
      try { fallback.play() } catch{}
    })

    soundRef.current = howl

    return ()=>{
      howl.unload()
      fallback.pause()
      fallback.src = ''
      fallbackRef.current = null
      soundRef.current = null
    }
  },[])

  useEffect(()=>{
    const tryPlay = ()=>{
      if(played.current) return
      played.current = true
      const howl = soundRef.current
      const fallback = fallbackRef.current
      if(howl) howl.play()
      else if(fallback) fallback.play().catch(()=>{})
      removeListeners()
    }

    const removeListeners = ()=>{
      window.removeEventListener('click', tryPlay)
      window.removeEventListener('touchstart', tryPlay)
      window.removeEventListener('scroll', tryPlay)
    }

    window.addEventListener('click', tryPlay)
    window.addEventListener('touchstart', tryPlay)
    window.addEventListener('scroll', tryPlay, { passive: true })

    return removeListeners
  },[])

  return null
}

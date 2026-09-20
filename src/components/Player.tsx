import React, { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

const MUSIC_SRC = `${import.meta.env.BASE_URL}audio/music.mp3`

export default function Player(){
  const soundRef = useRef<Howl | null>(null)
  const fallbackRef = useRef<HTMLAudioElement | null>(null)

  useEffect(()=>{
    const fallback = new Audio(MUSIC_SRC)
    fallback.loop = true
    fallback.volume = 0.6
    fallbackRef.current = fallback

    const howl = new Howl({
      src: [MUSIC_SRC],
      loop: true,
      volume: 0.6,
    })

    howl.on('playerror', ()=>{
      fallback.play().catch(()=>{})
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
      const howl = soundRef.current
      const fallback = fallbackRef.current
      if(!howl && !fallback) return
      if(howl){
        howl.play()
      } else if(fallback) {
        fallback.play().catch(()=>{})
      }
    }

    const handleInteraction = ()=>{
      tryPlay()
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
    }

    window.addEventListener('click', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)

    return ()=>{
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
    }
  },[])

  return null
}

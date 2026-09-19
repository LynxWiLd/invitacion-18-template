import React, { useEffect, useState } from 'react'
import { Howl } from 'howler'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

// Música ubicada en public/audio/
const MUSIC_SRC = `${import.meta.env.BASE_URL}audio/music.mp3`

let sound: any = null
let fallbackAudio: HTMLAudioElement | null = null

export default function Player(){
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(()=>{
    console.log('[Player] inicializando audio, src=', MUSIC_SRC)

    // Fallback con Audio nativo
    fallbackAudio = new Audio(MUSIC_SRC)
    fallbackAudio.loop = true
    fallbackAudio.volume = 0.6
    fallbackAudio.addEventListener('play', ()=> console.log('[Player][fallback] play'))
    fallbackAudio.addEventListener('error', (e)=> console.error('[Player][fallback] error', e))

    sound = new Howl({
      src: [MUSIC_SRC],
      loop: true,
      volume: 0.6,
      onload: ()=> console.log('[Player][howl] loaded'),
      onloaderror: (id: number, err: any)=> console.error('[Player][howl] loaderror', id, err),
    })

    sound.on('play', ()=> console.log('[Player][howl] play'))
    sound.on('playerror', (id: number, err: any)=>{
      console.error('[Player][howl] playerror', id, err)
      // intentar fallback
      fallbackAudio?.play().catch(e=> console.error('[Player][fallback] play() failed', e))
      setPlaying(true)
    })

    return ()=>{
      sound?.unload()
      fallbackAudio = null
    }
  },[])

  const tryPlay = ()=>{
    if(!sound && !fallbackAudio) return
    try{
      if(sound){
        const id = sound.play()
        console.log('[Player] howler play id=', id)
        setPlaying(true)
      } else if(fallbackAudio) {
        fallbackAudio.play().then(()=> setPlaying(true)).catch(e=> console.error('[Player] fallback play error', e))
      }
    }catch(e){
      console.error('[Player] play exception', e)
      fallbackAudio?.play().catch(err=> console.error('[Player] fallback play exception', err))
    }
  }

  const [muted, setMuted] = useState(false)

  const toggleMute = ()=>{
    const next = !muted
    setMuted(next)
    try{
      if(sound) sound.mute(next)
      if(fallbackAudio) fallbackAudio.muted = next
      console.log('[Player] muted=', next)
    }catch(e){ console.error('[Player] mute error', e) }
  }

  return (
    <>
      {!started && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={()=>{ setStarted(true); tryPlay() }}>
          <button className="w-full max-w-[360px] text-center px-6 py-3 bg-white text-black rounded-lg">Tocá para entrar</button>
        </div>
      )}

      {/* Botón flotante para mute/unmute */}
      <button
        aria-label={muted ? 'Desmutear' : 'Mutear'}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg touch-target"
      >
        {muted ? <VolumeX /> : <Volume2 />}
      </button>
    </>
  )
}

import React, { useEffect, useRef, useState } from 'react'

const BALLOONS = [
  { left: '3%', size: 40, animDuration: '14s', animDelay: '0s' },
  { left: '18%', size: 35, animDuration: '16s', animDelay: '1s' },
  { left: '45%', size: 45, animDuration: '13s', animDelay: '0.5s' },
  { left: '72%', size: 30, animDuration: '15s', animDelay: '1.5s' },
  { left: '88%', size: 38, animDuration: '17s', animDelay: '0.8s' },
]

export default function FloatingBalloons(){
  const [visible, setVisible] = useState(false)
  const started = useRef(false)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(()=>{
    const onScroll = ()=>{
      if(!started.current && window.scrollY > 50){
        started.current = true
        setVisible(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  if(prefersReduced || !visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {BALLOONS.map((b, i) => (
        <div
          key={i}
          className="balloon-float"
          style={{
            position: 'absolute',
            left: b.left,
            bottom: -80,
            width: b.size,
            animationDuration: b.animDuration,
            animationDelay: b.animDelay,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/balloon1.png`}
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      ))}
    </div>
  )
}

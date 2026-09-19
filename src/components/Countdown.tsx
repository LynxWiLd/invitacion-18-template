import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = { fechaISO: string }

function getRemaining(fechaISO: string){
  const diff = new Date(fechaISO).getTime() - Date.now()
  const s = Math.max(0, Math.floor(diff/1000))
  const days = Math.floor(s/86400)
  const hours = Math.floor((s%86400)/3600)
  const minutes = Math.floor((s%3600)/60)
  const seconds = s%60
  return { days, hours, minutes, seconds }
}

export default function Countdown({ fechaISO }: Props){
  const [time, setTime] = useState(()=> getRemaining(fechaISO))

  useEffect(()=>{
    const id = setInterval(()=> setTime(getRemaining(fechaISO)), 1000)
    return ()=> clearInterval(id)
  },[fechaISO])

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-cursiva text-2xl mb-4">Faltan</h3>
      <div className="flex gap-4">
        {['days','hours','minutes','seconds'].map((k,i)=>{
          const val = (time as any)[k]
          return (
            <div key={k} className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div key={val} initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} exit={{y:10,opacity:0}} transition={{duration:0.3}} className="text-2xl font-serif">
                  {String(val).padStart(2,'0')}
                </motion.div>
              </AnimatePresence>
              <small className="text-xs">{k.toUpperCase()}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

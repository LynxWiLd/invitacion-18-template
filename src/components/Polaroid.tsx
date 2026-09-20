import React from 'react'
import { motion } from 'framer-motion'

export default function Polaroid({ fotos }: { fotos: string[] }){
  return (
    <div className="relative flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4">
        {fotos.map((f,i)=> (
          <motion.div key={f} initial={{rotate:-12 + i*4, scale:0.92}} animate={{rotate:-4 + i*2, scale:1}} transition={{type:'spring', stiffness:70}} className="polaroid">
            <img src={f} alt={`Foto de la celebración ${i + 1}`} className="object-cover" loading="lazy" style={{width:120,height:150}} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

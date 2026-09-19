import React from 'react'
import { motion } from 'framer-motion'

type Props = { nombre: string; fechaISO: string; hora: string }

export default function Hero({ nombre, fechaISO, hora }: Props){
  return (
    <header className="hero">
      <img src="/images/balloon1.png" className="balloon float1" alt="globo" />
      <img src="/images/balloon2.png" className="balloon float2" alt="globo" />

      <motion.div className="hero-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}>

        <div className="mis">Mis</div>
        <div className="numero-18" aria-hidden>
          18
        </div>

        <motion.div className="nombre-neon mt-2">{nombre}</motion.div>

        <p className="hero-sub mt-4">Te espero para festejar este gran día conmigo.</p>

        <p className="mt-6 italic tracking-widest text-plata2">{new Date(fechaISO).toLocaleDateString('es-AR')} · {hora}</p>
      </motion.div>
    </header>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import Polaroid from './Polaroid'

type Props = { nombre: string; fechaISO: string; hora: string; fotos: string[] }

export default function Hero({ nombre, fechaISO, hora, fotos }: Props){
  const fecha = new Date(fechaISO)
  const fechaValida = !isNaN(fecha.getTime())
  const fechaStr = fechaValida ? fecha.toLocaleDateString('es-AR') : fechaISO

  return (
    <header className="hero">
      <img src={`${import.meta.env.BASE_URL}images/balloon1.png`} className="balloon float1" alt="Globo decorativo" />
      <img src={`${import.meta.env.BASE_URL}images/balloon2.png`} className="balloon float2" alt="Globo decorativo" />

      <motion.div className="hero-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}>

        <div className="mis">Mis</div>
        <div className="numero-18" aria-label="18 años">
          18
        </div>

        <motion.div className="nombre-neon mt-2">{nombre}</motion.div>

        <p className="hero-sub mt-4">Te espero para festejar este gran día conmigo.</p>

        <p className="mt-6 italic tracking-widest text-plata2">{fechaStr} · {hora}</p>

        <div className="mt-8">
          <Polaroid fotos={fotos} />
        </div>
      </motion.div>
    </header>
  )
}

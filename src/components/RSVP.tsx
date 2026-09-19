import React from 'react'
import confetti from 'canvas-confetti'

type Props = { telefono: string }

export default function RSVP({ telefono }: Props){
  const confirmar = ()=>{
    confetti({ particleCount: 100, spread: 70, colors: ['#fff','#e8e8e8','#b8b8b8'] })
    const text = encodeURIComponent('¡Confirmo mi asistencia!')
    const url = `https://wa.me/${telefono.replace(/[^0-9]/g,'')}?text=${text}`
    window.open(url,'_blank')
  }

  return (
    <div className="bg-black/30 p-6 rounded-xl text-center">
      <h4 className="font-cursiva text-xl">Confirmá tu asistencia</h4>
      <button onClick={confirmar} className="mt-4 px-4 py-2 bg-white text-black rounded">Confirmar asistencia</button>
    </div>
  )
}

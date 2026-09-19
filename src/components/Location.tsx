import React from 'react'
import { MapPin } from 'lucide-react'

type Props = { direccion: string; telefono: string }

export default function Location({ direccion, telefono }: Props){
  const openMap = ()=>{
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`
    window.open(url,'_blank')
  }

  return (
    <div className="bg-black/40 p-6 rounded-xl text-center">
      <MapPin className="mx-auto" />
      <h4 className="font-cursiva text-xl mt-2">{direccion}</h4>
      <button onClick={openMap} className="mt-4 px-4 py-2 bg-white text-black rounded">Ver ubicación en el mapa</button>
      <p className="mt-2 text-sm">Tel: {telefono}</p>
    </div>
  )
}

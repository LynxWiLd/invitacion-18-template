import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

export default function Gallery({ fotos }: { fotos: string[] }){
  return (
    <div className="relative">
      <h4 className="font-cursiva text-xl mb-4">Galería</h4>
      <Swiper spaceBetween={20} slidesPerView={1.1} centeredSlides>
        {fotos.map((f,i)=> (
          <SwiperSlide key={i}>
            <div className="p-2 bg-black/30 rounded-lg">
              <img src={f} className="w-full rounded" alt={`g-${i}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

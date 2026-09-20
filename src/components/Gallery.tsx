import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Gallery({ fotos }: { fotos: string[] }){
  return (
    <div className="relative">
      <h4 className="font-cursiva text-xl mb-4">Galería</h4>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {fotos.map((f,i)=> (
          <SwiperSlide key={f}>
            <div className="p-2 bg-black/30 rounded-lg">
              <img src={f} className="w-full rounded" alt={`Foto de la galería ${i + 1}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-center text-xs text-plata3 mt-3 italic">Deslizá para ver más</p>
    </div>
  )
}

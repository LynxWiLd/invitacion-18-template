import React from 'react'
import Hero from './components/Hero'
import Player from './components/Player'
import Countdown from './components/Countdown'
import Location from './components/Location'
import Gifts from './components/Gifts'
import Polaroid from './components/Polaroid'
import DressCode from './components/DressCode'
import RSVP from './components/RSVP'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FloatingBalloons from './components/FloatingBalloons'
import { invitacion } from './data/invitacion'

export default function App(){
  return (
    <div className="min-h-screen stars">
      <Player />
      <FloatingBalloons />
      <main className="app-main max-w-[480px] mx-auto">
        <section className="min-h-screen">
          <Hero nombre={invitacion.nombre} fechaISO={invitacion.fechaISO} hora={invitacion.hora} />
        </section>

        <section className="py-8">
          <Polaroid fotos={invitacion.fotos} />
        </section>

        <section className="py-8">
          <Countdown fechaISO={invitacion.fechaISO} />
        </section>

        <section className="py-8">
          <Location direccion={invitacion.direccion} telefono={invitacion.telefono} />
        </section>

        <section className="py-8">
          <Gifts alias={invitacion.alias} />
        </section>

        <section className="py-8">
          <DressCode />
        </section>

        <section className="py-8">
          <RSVP telefono={invitacion.telefono} />
        </section>

        <section className="py-8">
          <Gallery fotos={invitacion.fotos} />
        </section>

        <Footer />
      </main>
    </div>
  )
}

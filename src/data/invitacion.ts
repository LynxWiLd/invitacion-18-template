export type Invitacion = {
  nombre: string
  fechaISO: string
  hora: string
  direccion: string
  telefono: string
  alias: string
  fotos: string[]
}

export const invitacion: Invitacion = {
  nombre: 'Valentina',
  fechaISO: '2026-11-07T21:00:00',
  hora: '21:00',
  direccion: 'Salón Las Palmas - Av. Principal 123',
  telefono: '+5491123456789',
  alias: 'VAL18.GIFT.ALIAS',
  fotos: ['/images/foto1.webp','/images/foto2.jpeg']
}

declare module '*.css'
declare module '*.scss'
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'

declare module 'howler'
declare module 'canvas-confetti'
declare module 'swiper/react'
declare module 'swiper'
declare module 'swiper/css'
declare module 'swiper/css/pagination'

interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly VITE_APP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

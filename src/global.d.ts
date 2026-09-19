declare module '*.css'
declare module '*.scss'
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module 'howler'
declare module 'canvas-confetti'

interface ImportMetaEnv {
  readonly VITE_APP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

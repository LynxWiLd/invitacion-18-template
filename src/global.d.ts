declare module '*.css'
declare module '*.scss'
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'

interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly VITE_APP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

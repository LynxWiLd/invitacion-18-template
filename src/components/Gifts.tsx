import React, { useState } from 'react'

type Props = { alias: string }

export default function Gifts({ alias }: Props){
  const [copied, setCopied] = useState(false)
  const copy = async ()=>{
    await navigator.clipboard.writeText(alias)
    setCopied(true)
    setTimeout(()=>setCopied(false),2000)
  }

  return (
    <div className="bg-black/30 p-6 rounded-xl text-center">
      <h4 className="font-cursiva text-xl">Regalos</h4>
      <p className="mt-2">Si querés colaborar, usá el alias:</p>
      <button onClick={copy} className="mt-3 px-4 py-2 border rounded border-plata2">{alias}</button>
      {copied && <div className="mt-2 text-sm">¡Alias copiado!</div>}
    </div>
  )
}

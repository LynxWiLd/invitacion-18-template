import React, { useEffect, useState } from 'react'

type Props = { alias: string }

export default function Gifts({ alias }: Props){
  const [copied, setCopied] = useState(false)

  useEffect(()=>{
    if(!copied) return
    const id = setTimeout(()=>setCopied(false),2000)
    return ()=> clearTimeout(id)
  },[copied])

  const copy = async ()=>{
    try{
      await navigator.clipboard.writeText(alias)
      setCopied(true)
    }catch{
      const textArea = document.createElement('textarea')
      textArea.value = alias
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
    }
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

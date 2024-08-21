import React, { useRef } from 'react'
import Card from './Card'


const Fourground = () => {
 const ref= useRef(null);
  const data=[
    {
      desc:"Georgia, wrap me up in all your  I want ya in my armsOh, let me hold ya I'll never let you go again like I did Oh, I used to say",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"pink"},
    },
    {
      desc:"I would never fall in love again until I found her I said I would never fall, unless it's you I fall into I was lost within the darkness, but then I found her I found you",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"purple"},
    },
    {
      desc:"Georgia pulled me in I asked to love her once again You fell, I caught ya I'll never let you go again like I did Oh, I used to say",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Upload",tagColor:"pink"},
    },
    {
      desc:"I would never fall in love again until I found her I said I would never fall unless it's you I fall into I was lost within the darkness, but then I found her I found you",
      filesize:".9mb",
      close:false,
      tag:{isOpen:true,tagTitle:"Upload",tagColor:"purple"},
    },
  ]
  return (
  <>
  <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>    
  {data.map((item,index)=>(
  <Card data={item} reference={ref}/>
))}  
  </div>

  </>
  )
}

export default Fourground
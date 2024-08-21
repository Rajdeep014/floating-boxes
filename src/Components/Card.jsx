import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({data,reference}) => {
  return (
  <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className=' flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden
      '>
      <FaFileAlt/>
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full  left-0'>  
      <div className='flex items-center justify-between mb-3 py-3 px-8 '> 
    
      <h5 >{data.filesize}</h5>

     <span className='w-7 h-7 rounded-full flex items-center justify center bg-zinc-600'>
      { data.close ? <IoMdClose size=".7em color-'#fff"/>:   <MdOutlineFileDownload size=".7em color-'#fff"/>}
  
     </span>

        </div>
        {data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.tagColor==="pink"? "bg-pink-600": " bg-purple-600"} flex items-center justify-center`} >
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
           </div>}
       
      </div>
      
        
      </motion.div> 
  </>
  )
}

export default Card 

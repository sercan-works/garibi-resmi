import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import plak from '../assets/img/plak.png'
const Eq = () => {
const [degree,setDegree] = useState<number>(20)

useEffect(() => {
    
       
        
           setTimeout(() => {
            setDegree(degree + 1)
           }, 1000);
                
        
            
       
}, [])

console.log(`rotate-[${degree}deg] transform-gpu`);

  return (
    <div className='absolute rounded-xl bottom-10 left-20 '>
        <div className={`rotate-[15deg] transform-gpu`}>
            <Image src={plak} width='75' height='75' alt='plak'/>
        </div>

        
    </div>
  )
}

export default Eq
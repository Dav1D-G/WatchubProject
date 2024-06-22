'use client'
import Image from 'next/image'
import { useState } from 'react';
import england_flag from '@/public/icons/england.svg'
import poland_flag from '@/public/icons/poland.svg'


export function Language()
{
    const [isActive , setIsActive] = useState(false);
    return(
        <div className='language'>
            <div className={`${isActive ? 'active' : ''}`} onClick={(e)=>setIsActive(()=>!isActive)}>
                <Image src={england_flag} alt='' width={35} height={35}/>
            </div>
            <div className={`${!isActive ? 'active' : ''}`} onClick={(e)=>setIsActive(()=>!isActive)}>
                <Image src={poland_flag} alt='' width={35} height={35}/>
            </div>
        </div>
    )
}
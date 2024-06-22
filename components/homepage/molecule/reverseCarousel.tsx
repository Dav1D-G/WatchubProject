'use client'
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { right_direction , left_direction ,  imageVariants } from "@/utils/movie-carousel";
import right_arrow from '@/public/icons/carousel-right-arrow.svg';
import left_arrow from '@/public/icons/carousel-left-arrow.svg';
import Image from "next/image";

interface ReverseCarouselProps {
    setMovie : Dispatch<SetStateAction<number>>
    movieCarousel : string[]
    isLargeScreen : boolean
}

export function ReverseCarousel({setMovie , movieCarousel , isLargeScreen }:ReverseCarouselProps)
{
    const [positionIndexes , setPositionIndexes] = useState([0,1,2,3,4]);
    const [isForward , setIsForward] = useState(true);

    const handleNext = (isForward : boolean) => {
        setIsForward(isForward);
        setPositionIndexes((prevIndexes) => {
            const updateIndexes = prevIndexes.map((prevIndex)=> (prevIndex + 1) % 5);  
            return updateIndexes;
        });
    }


    useEffect(()=>{
        if(!isLargeScreen)
            return;
        setMovie(positionIndexes[4]);
    },[setMovie,positionIndexes,isLargeScreen])

    useEffect(()=>{
        if(!isLargeScreen)
            return;
        const interval = setInterval(()=>handleNext(true),10000);
        return ()=> clearInterval(interval);
    },[])

    return(
        <>
            <div className="reverse-carousel">
                {movieCarousel.slice().reverse().map((image,index)=>(
                    <motion.img 
                        key={index}
                        src={image}
                        alt={image}
                        className="image-carousel"
                        initial='center'
                        animate={`${isForward ? right_direction[positionIndexes[index]] : left_direction[positionIndexes[index]]}`}
                        variants={imageVariants}
                        transition={{duration : 1}}
                    />
                ))}
            </div>
            <div className="button-carousel">
                <div className="left-arrow" onClick={()=>handleNext(false)}>
                    <Image src={left_arrow} alt="left-arrow"/>
                </div>
                <div className="right-arrow" onClick={()=>handleNext(true)}>
                    <Image src={right_arrow} alt="left-arrow"/>
                </div>
            </div>
        </>
        
    )
}
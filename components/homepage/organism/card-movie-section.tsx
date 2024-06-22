'use client'
import { CardMovie } from '@/components/homepage/molecule/card';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import arrow_right from '@/public/icons/arrow-right-carousel.svg'
import arrow_left from '@/public/icons/arrow-left-carousel.svg'
import Image from 'next/image';

interface MovieProps {
    type : string ,
    carouselMovies : { image : string , id : string }[],
}

export function CardMovieSection({type , carouselMovies }:MovieProps)
{

    let [ref , {width}] = useMeasure();
    let [carouselRef, { width: carouselWidth }] = useMeasure();
    const [xTranslation, setXTranslation] = useState(0);
    const controls = useAnimation();
    
    // const xTranslation = useMotionValue(0);

    // useEffect(()=>{
    //     let controls;
    //     let finalPosition = -width / 2 - 8;

    //     controls = animate(xTranslation , [0,finalPosition], {
    //         ease : 'linear',
    //         duration : 50,
    //         repeat :Infinity,
    //         repeatType : 'loop',
    //         repeatDelay : 0
    //     })

    //     return ()=> controls.stop();
    // },[xTranslation,width ]);

    const handlePrev = () => {
        const newX = Math.min(xTranslation + width, 0); // Prevent moving beyond the start
        setXTranslation(newX);
        controls.start({ x: newX , transition : {duration : 2 , ease : 'easeOut'} });
    };

    const handleNext = () => {
        const newX = Math.max(xTranslation - width, -carouselWidth + width); // Prevent moving beyond the end
        setXTranslation(newX);
        controls.start({ x: newX , transition : {duration : 2 , ease : 'easeOut'} });
    };

    return(
        <div className='type-movies'>
            <div className='type-movie-title'>
                <p className='krub-regular'>{type}</p>
            </div>
            <motion.div className='relative' ref={ref} whileTap={{cursor : 'grabbing'}}>
                <div className='absolute text-white z-40  bg-black rounded-md h-[200px] flex justify-center items-center bg-opacity-80' onClick={()=>handlePrev()}>
                    <button>
                        <Image src={arrow_left} alt="arrow-left-carousel"/>
                    </button>
                </div>
                <motion.div className='carousel-movies relative' animate={controls} ref={carouselRef} drag='x' dragConstraints={{right : 0 , left: -carouselWidth + width}}>   {/* style={{x : xTranslation}} */}
                    {[...carouselMovies , ...carouselMovies].map((item,idx)=>(
                    <CardMovie image={item.image} key={idx} id={item.id}/> 
                    ))}
                </motion.div>
                <div className='absolute text-white z-40 bg-black rounded-md right-0 h-[200px] flex justify-center items-center bg-opacity-80' onClick={()=>handleNext()}>
                    <button>
                        <Image src={arrow_right} alt="arrow-right-carousel"/>
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
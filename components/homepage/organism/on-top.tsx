'use client'
import Image from "next/image"
import { Carousels } from '@/components/homepage/molecule/carousel';
import { ReverseCarousel } from '@/components/homepage/molecule/reverseCarousel';
import star from '@/public/icons/star.svg';
import play from '@/public/icons/play.svg';
import plus from '@/public/icons/plus.svg';
import useNextMediaQuery from '@mui/material/useMediaQuery';

import { useState } from "react";
import { movieCarousel , movieCarousel_2  ,  right_direction , left_direction ,  imageVariants } from "@/utils/movie-carousel";
import { filterImageTable } from "@/utils/filterImageTable";
import Link from "next/link";

// export const right_direction = [
//     'center',
//     'right',
//     "right_away",
//     'left_away',
//     "left"  
// ]

// export const left_direction = [
//     'center',
//     'left',
//     "left_away",
//     'right_away',
//     "right"  
// ]



export function OnTop()
{
    const isLargeScreen = useNextMediaQuery('(min-width: 1280px)');
    const picturesTable = filterImageTable(movieCarousel_2);
    const [movie , setMovie] = useState(4);
    return(
        <>
            <div className='on-top-section'>
                <div className='on-top-movies'>
                    <div className='on-top-main-title'>
                        <div className='main-title'>
                            <p className='koulen-regular'>ON <span>TOP</span></p>
                        </div>
                        <div className='image-movie'>
                            <Image src={star} alt='star-image' width={30} height={30}/>
                        </div>
                    </div>
                    <div className='on-top-movie-title'>
                        <p className='koulen-regular'>{movieCarousel_2[movie].Title}</p>
                    </div>
                    <div className='on-top-description'>
                        <p className='krub-regular'>
                            {movieCarousel_2[movie].Description}
                        </p>
                    </div>
                    <div className='on-top-buttons'>
                        <div className='play-button'>
                            <Link href={`/homepage/movie/${movieCarousel_2[movie].imdbID}`} className={'play-button'}>
                                <Image src={play} alt='play' width={25} height={25}/>
                                <p className='koulen-regular'>PLAY</p>
                            </Link>
                        </div>
                        <div className='watchlist-button'>
                            <button>
                                <Image src={plus} alt='plus' width={25} height={25}/>
                                <p className='koulen-regular'>WATCHLIST</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='on-top-info relative z-0'>
                    <Carousels movieCarousel={picturesTable} isLargeScreen={isLargeScreen} setMovie={setMovie}/>
                    <ReverseCarousel setMovie={setMovie} movieCarousel={picturesTable} isLargeScreen={isLargeScreen}/>
                </div>  
            </div>
        </>
    )
}

function useMediaQuery(arg0: string) {
    throw new Error("Function not implemented.");
}

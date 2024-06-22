'use client'
import { Carousel } from "flowbite-react";
import movie_1 from '@/public/photos/MV5BMTQ3NzAyMDUyOF5BMl5BanBnXkFtZTcwMDMzMDM5OA@@._V1_SX300.jpg';
import movie_2 from '@/public/photos/MV5BMjA0OTA3ODU4M15BMl5BanBnXkFtZTcwNDY3NTM1OA@@._V1_SX300.jpg';
import movie_3 from '@/public/photos/MV5BN2I3YjZiNmQtMWVmZi00Y2NjLTkzYzctZmU3OTYxNjg4NzczXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg';
import movie_4 from '@/public/photos/MV5BYmI3ZGQzMTEtZjg3Zi00MmNlLWI3MTgtNDdkMDAxODFmOTQxXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg';
import Image from "next/image";
import { movieCarousel } from "@/utils/movie-carousel";
import { Dispatch, SetStateAction } from "react";

type CarouselsProps = {
  movieCarousel : string[]
  isLargeScreen : boolean
  setMovie : Dispatch<SetStateAction<number>>
}

export function Carousels({movieCarousel , isLargeScreen , setMovie}: CarouselsProps) {

  return (
    <div className="h-[420px] xl:h-[100px] 2xl:h-[400px] xl:hidden relative">
      <Carousel leftControl=' ' rightControl=' ' slideInterval={5000} onSlideChange={(index)=> (!isLargeScreen && setMovie(index))}>
            {movieCarousel.map((el,index)=>(
              <div className="flex h-full w-full items-center justify-center rounded-md" key={index}>
                <img src={el} alt="image"/>
              </div>
            ))}
      </Carousel>
    </div>
  );
}

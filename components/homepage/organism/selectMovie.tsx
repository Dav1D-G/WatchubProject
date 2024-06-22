'use client'
import { typeMovies } from "@/utils/type-movies"
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import arrow_down from '@/public/icons/arrow-down-type-movie.svg';
import Link from "next/link";


type SelectMovieProps = {
    params : string
}


export function SelectMovie({  params }: SelectMovieProps)
{
    const [isDropDown , setIsDropDown] = useState(false);

    const handleDropDown = () => {
        setIsDropDown(!isDropDown);
    }

    return(
        <>
            <div className="search-type-options">
                <button className="search-option" onClick={handleDropDown}>
                    <p className="koulen-regular">{params}</p>
                    <img src={arrow_down.src} alt="arrow-down"/>
                </button>
                <div className={`list-movies ${isDropDown ? "absolute" : "hidden"}`}>
                    <ul className="list">
                        {typeMovies.map((el,index)=>(
                            <li key={index} className="koulen-regular">
                                <Link href={`/homepage/movies/${el}`}>{el}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
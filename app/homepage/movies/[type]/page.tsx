'use client'
import { SelectMovie } from "@/components/homepage/organism/selectMovie";
import { Browser } from "@/components/homepage/organism/browser";

import { CardsMovies } from "@/components/homepage/organism/cards-movies";
import { useEffect, useState } from "react";
import { getTypeMovies } from "@/utils/getTypeMovies";
interface MoviePageProps 
{
    params : {type : string}
}

type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
  

export default function MoviesTypePage({ params }: MoviePageProps)
{
    // const data : { Title: string, Year: string, imdbID: string, Type: string,Poster: string }[] = await getTypeMovies(params.type);
    const [data, setData] = useState<Movie[]>([]);
    const [isPopular , setIsPopular] = useState(false);
    const [isYear , setIsYear] = useState(false);
    const [isRuntime , setIsRuntime] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const typeMovies = await getTypeMovies(params.type);
            setData(typeMovies);
        };
        fetchData();
    },[params.type]);    

    return(
        <section className="movies-page">
            <div className="search-movie">
                <div className="browser-movies ">                  
                    <Browser />
                </div>
                <div className="search-type">
                    <div className="search-type-title">
                        <p className="koulen-regular">FILM</p>
                    </div>
                    <SelectMovie params={params.type} />
                </div>
            </div>

            <div className="filter-movie">
                <button className="popular relative" onClick={()=>setIsPopular(!isPopular)}>
                    <p className="koulen-regular ">POPULAR</p>
                    <ul className={`option-filter ${isPopular ? 'absolute flex' : "hidden"}`}>
                        <li className="koulen-regular">DESCENDING</li>
                        <li className="koulen-regular">ASCENDING</li>
                    </ul>
                </button>
                <button className="year relative" onClick={()=>setIsYear(!isYear)}>
                    <p className="koulen-regular">YEAR</p>
                    <ul className={`option-filter ${isYear ? 'absolute' : "hidden"}`}>
                        <li className="koulen-regular">DESCENDING</li>
                        <li className="koulen-regular">ASCENDING</li>
                    </ul>
                </button>
                <button className="runtime relative" onClick={()=>setIsRuntime(!isRuntime)}>
                    <p className="koulen-regular">RUNTIME</p>
                    <ul className={`option-filter ${isRuntime ? 'absolute' : "hidden"}`}>
                        <li className="koulen-regular">DESCENDING</li>
                        <li className="koulen-regular">ASCENDING</li>
                    </ul>
                </button>
                
            </div>

            <div className="movies-section">
                <div className="movie-type-title">
                    <p className="koulen-regular">{params.type}</p>
                </div>
                <CardsMovies data={data} />
            </div>
        </section>
    )
}
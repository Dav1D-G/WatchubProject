'use client'
import Link from "next/link";


type CardMoviesProps = {
    data : { Title: string, Year: string, imdbID: string, Type: string,Poster: string }[] 
}

export function CardsMovies({data}:CardMoviesProps)
{
    return(
        <>
            <div className="movie-list">
                <ul className="image-movies">
                    {data.map((el,index)=>(
                        <li className="item-movie" key={index}>
                            <Link href={`/homepage/movie/${el.imdbID}`}>
                                <img src={el.Poster} alt="image-movie" className="w-full h-full"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
import { starRating } from "@/utils/starRating";
import { starView } from "@/utils/startView"
import arrow_right_play from '@/public/icons/arrow-right-play.svg';
import plus from '@/public/icons/plus-movie.svg';
import { actorsFilter } from "@/utils/actorsFilter";
import Image from "next/image";

interface MoviePageProps 
{
    params : {id : string}
}

type ReturnData = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [
      { Source: string, Value: string },
      { Source: string, Value: string }
    ],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}

async function getMovieDetails(id : string)
{
    const response = await fetch(`http://www.omdbapi.com/?apikey=80d6a346&i=${id}`);
    const data = await response.json();
    return data;
}

export default async function MoviePage({ params }: MoviePageProps)
{
    const data : ReturnData = await getMovieDetails(params.id);
    const rating : number = starRating(data.imdbRating);
    const actors : string[] = actorsFilter(data.Actors);

    return(
        <section className="movie-details-page">
            <div className="movie-image">
                <img src={data.Poster} alt="movie-image"/>
            </div>
            <div className="movie-details">
                <div className="movie-details-title">
                    <p className="koulen-regular ">
                        {data.Title}
                    </p>
                </div>
                <div className="movie-rating">
                    <div className="star-rating">
                        {starView[rating].map((el,index)=>(
                            <img src={el.src} key={index} alt="start-image"/>
                        ))}
                    </div>
                    <div className="value-rating">
                        <p>
                            {`(${data.Ratings[0].Value})`}
                        </p>
                    </div>
                </div>
                <div className="movie-properties">
                    <div className="movie-data">
                        <p className="koulen-regular">{data.Year}</p>
                        <p className="koulen-regular">{data.Genre}</p>
                        <p className="koulen-regular">{data.Language}</p>
                        <p className="koulen-regular">{data.Runtime}</p>
                    </div>
                    <div className="button-play">
                        <div className="play">
                            <button>
                                <p className="arrow-right-icon">
                                    <img src={arrow_right_play.src} alt="arrow-right-play" width={30} height={30}/>
                                </p>
                                <p className="play-context koulen-regular">PLAY</p>
                            </button>
                        </div>
                        <div className="plus">
                            <img src={plus.src} alt="plus-movie"/>
                        </div>
                    </div>
                </div>
                <div className="movie-description">
                    <div className="description-title">
                        <p className="koulen-regular">Description</p>
                    </div>
                    <div className="description-context">
                        <p className="krub-regular">{data.Plot}</p>
                    </div>
                </div>
                <div className="movie-cast">
                    <div className="movie-cast-title">
                        <p className="koulen-regular">Cast:</p>
                    </div>
                    <div className="movie-cast-actors">
                        {actors.map((el,index)=>(
                            <p key={index} className="koulen-regular basis-1/3  text-white text-sm  sm:text-lg lg:text-xl">{el}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
    )
}
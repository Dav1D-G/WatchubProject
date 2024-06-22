import space from '@/public/photos/_9ceac312-cca0-4517-82f6-d393b4b06c57.jpg';
import { CardMovieSection } from '@/components/homepage/organism/card-movie-section';
import { filterImageTable } from '@/utils/filterImageTable';
import { OnTop } from '@/components/homepage/organism/on-top';
import { typeMovies } from '@/utils/type-movies';
import { filterIdsTable } from '@/utils/filterIdsTable';
import { joinTables } from '@/utils/joinTables';


async function getData() {

    const movies = typeMovies.map(async(el)=>{
        const response = await fetch(`http://www.omdbapi.com/?apikey=80d6a346&s=${el}&page=3`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${el}`);
        }
        const data = await response.json();

        return {
            type : el,
            payload : data.Search
        };
    })
    const moviesAll = await Promise.all(movies);


    const tableImages = moviesAll.map((el)=>{
        const ids = filterIdsTable(el.payload);
        const images = filterImageTable(el.payload);
        const newTable = joinTables(images,ids);
        return {type : el.type , table : newTable}
    });

    return tableImages;
}

export default async function HomePage()
{
    const data = await getData();

    // check useCookies

    return(
        <>
        <section className="homepage">
            <section className="on-top" style={{backgroundImage : `url(${space.src})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center'}}>
                <div className='underlay'>
                    <OnTop />
                </div>
            </section>
            <section className="movies-list">
                {data.map((el,index)=>(
                    <CardMovieSection type={el.type}  carouselMovies={el.table} key={index}/>
                ))}
            </section>
        </section>
        </>
    )
}
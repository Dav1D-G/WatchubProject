'use server'


export async function getTypeMovies(type:string)
{
    const movies =  [1,2,3].map(async (el)=>{
        const data = await fetch(`http://www.omdbapi.com/?apikey=80d6a346&s=${type}&page=${el}`);
            if (!data.ok) {
            throw new Error(`Failed to fetch data for ${el}`);
        }
        const response = await data.json();

        return response.Search;
    })
    const moviesAll = await Promise.all(movies);
    const newTable = moviesAll.flat();
    return newTable;
}
type TableI =  {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

type ImageI =  {
    Title: string
    imdbID: string
    Description : string
    Poster: string
}

export function filterIdsTable(data : TableI[] | ImageI[]):string[]
{
    const ids = data.map(movie => movie.imdbID);
    return ids;
}
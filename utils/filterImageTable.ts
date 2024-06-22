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

export function filterImageTable(data : TableI[] | ImageI[]):string[]
{
    const posters = data.map(movie => movie.Poster);
    return posters;
}
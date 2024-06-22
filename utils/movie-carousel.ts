import movie_1_0 from '@/public/photos/movie_1_0.svg';
import movie_2_0 from '@/public/photos/movie_2_0.svg';

import movie_1 from '@/public/photos/MV5BMTQ3NzAyMDUyOF5BMl5BanBnXkFtZTcwMDMzMDM5OA@@._V1_SX300.jpg';
import movie_2 from '@/public/photos/MV5BMjA0OTA3ODU4M15BMl5BanBnXkFtZTcwNDY3NTM1OA@@._V1_SX300.jpg';
import movie_3 from '@/public/photos/MV5BN2I3YjZiNmQtMWVmZi00Y2NjLTkzYzctZmU3OTYxNjg4NzczXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg';
import movie_4 from '@/public/photos/MV5BYmI3ZGQzMTEtZjg3Zi00MmNlLWI3MTgtNDdkMDAxODFmOTQxXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg';


export const movieCarousel = [
    'https://m.media-amazon.com/images/M/MV5BNGU4NzNiYzYtMGEyZS00ZGU1LTg1YmItZmMyYTU0MzM1ZThmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BYmI3ZGQzMTEtZjg3Zi00MmNlLWI3MTgtNDdkMDAxODFmOTQxXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg',
    "https://m.media-amazon.com/images/M/MV5BMjA0OTA3ODU4M15BMl5BanBnXkFtZTcwNDY3NTM1OA@@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ3NzAyMDUyOF5BMl5BanBnXkFtZTcwMDMzMDM5OA@@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BN2I3YjZiNmQtMWVmZi00Y2NjLTkzYzctZmU3OTYxNjg4NzczXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
]

export const movieCarousel_2 = [
    {
        Title: "Seth MacFarlane's Cavalcade of Cartoon Comedy",
        imdbID: "tt1295036",
        Description: "A series of non-sequitur skits that could never be shown as cutaway gags on Family Guy (1999) - but which that show's creator would still like to present anyway.",
        Poster: "https://m.media-amazon.com/images/M/MV5BZjM2Y2M0NWEtZjAxMi00ZTk2LThhNGQtNmI3NGNlZWRhNTE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        Title: "Comedy of Power",
        imdbID: "tt0463486",
        Description : "A magistrate investigates a corporate executive.",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDE4ZDRhYWQtMWE5OS00ZDU4LWE0OGQtZDYzMWUyMmQ4ZDllXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg"
    },
    {
        Title: "Sex Is Comedy",
        imdbID: "tt0304678",
        Description : "A director struggles to film a difficult, intimate sex scene between two actors who happen to hate each other.",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzFjYWIzNTEtOWE3Ni00NzVjLWI5YzktNThlNWM0OWRkMGRiXkEyXkFqcGdeQXVyMjc2NTQ1MTI@._V1_SX300.jpg"
    },
    {
        Title: "The Tom and Jerry Comedy Show",
        imdbID: "tt0282315",
        Description : "It is about a cat who's chasing a mouse ...",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDYxN2NjOGYtZGVhZC00YTIwLTkwODAtYTRkYTk1MWNlNjAzXkEyXkFqcGdeQXVyMTY2MTA5NDAx._V1_SX300.jpg"
    },
    {
        Title: "The Underground Comedy Movie",
        imdbID: "tt0201290",
        Description : "A series of comedic short films guaranteed to offend.",
        Poster: "https://m.media-amazon.com/images/M/MV5BZmMyZTFhZTQtNzEyMS00MjIxLTg0YTAtYTQ1YTY3MjJmYmYxXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
    },
]

export const right_direction = [
    'center',
    'right',
    "right_away",
    'left_away',
    "left"  
]

export const left_direction = [
    'center',
    'left',
    "left_away",
    'right_away',
    "right"  
]

export const imageVariants = {
    center :{x : '0%', scale : 1 , zIndex : 5},
    left :{x : '-40%', scale : 0.7 , zIndex : 3},
    left_away :{x : '-80%', scale : 0.4 , zIndex : 2},
    right :{x : '40%', scale : 0.7 , zIndex : 3},
    right_away :{x : '80%', scale : 0.4 , zIndex : 2},
}
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

const genreTranslations = {
  "action": "Боевик",
  "comedy": "Комедия",
  "fantasy": "Фэнтези",
  "horror": "Ужасы",
};

const translateGenre = (movie: Movie) => ({
  ...movie,
  genre: genreTranslations[movie.genre as keyof typeof genreTranslations] || movie.genre,
});

const translateGenres = (response: Movie[]) => {
  return response.map(translateGenre);
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api/"}),
  endpoints: builder => ({
    getMovies: builder.query<Movie[], string | undefined>({
      query: (cinemaId?: string) => cinemaId ? `movies?cinemaId=${cinemaId}` : 'movies',
      transformResponse: translateGenres
    }),
    getMovie: builder.query<Movie, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
      transformResponse: translateGenre
    }),
  })
})

export const {useGetMoviesQuery, useGetMovieQuery} = movieApi;

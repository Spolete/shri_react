'use client'

import React, {FunctionComponent} from "react";

import {FilmDetails} from "@/components/FilmDetails/FilmDetails";
import {useGetMovieQuery} from "@/store/services/movieApi";
import {FilmDetailsLoader} from "@/components/FilmDetails/FilmDetailsLoader";

interface MovieInfoProps {
  id: number;
}

export const MovieInfo: FunctionComponent<MovieInfoProps> = ({id}) => {
  const {data, isLoading, error} = useGetMovieQuery(String(id));

  if (isLoading) {
    return <FilmDetailsLoader />
  }

  if (!data || error) {
    return <span>Not Found</span>
  }

  const {posterUrl, title, genre, releaseYear, rating, director, description} = data;

  return (
      <FilmDetails
        posterUrl={posterUrl}
        title={title}
        genre={genre}
        releaseYear={releaseYear}
        rating={rating}
        director={director}
        description={description}
        id={String(id)}
      />
  )
}
